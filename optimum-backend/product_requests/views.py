from datetime import timedelta

from django.utils import timezone
from django.db.models import Sum, Count, Q
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied

from authentication.models import UserProfile
from ai_services import evaluate_supplier_offers
from .models import ProductRequest, SupplierOffer, ChatMessage, AccountingEntry
from .serializers import (
    ProductRequestSerializer,
    SupplierOfferSerializer,
    ChatMessageSerializer,
    AccountingEntrySerializer,
)


def get_user_role(user) -> str:
    try:
        return user.profile.role or UserProfile.RoleChoices.PRODUCT_REQUESTER
    except UserProfile.DoesNotExist:
        return UserProfile.RoleChoices.PRODUCT_REQUESTER


class ProductRequestViewSet(viewsets.ModelViewSet):
    """Viewset managing product requests lifecycle"""

    serializer_class = ProductRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        role = get_user_role(user)
        queryset = ProductRequest.objects.select_related('requester', 'recommended_supplier').prefetch_related(
            'offers__supplier'
        )

        if role in {UserProfile.RoleChoices.ADMIN, UserProfile.RoleChoices.SUB_ADMIN}:
            return queryset
        if role == UserProfile.RoleChoices.SUPPLIER:
            return queryset.filter(offers__supplier=user).distinct()
        return queryset.filter(requester=user)

    def perform_create(self, serializer):
        user = self.request.user
        role = get_user_role(user)
        if role not in {UserProfile.RoleChoices.PRODUCT_REQUESTER, UserProfile.RoleChoices.ADMIN, UserProfile.RoleChoices.SUB_ADMIN}:
            raise PermissionDenied("Only requesters or admins can create product requests.")
        serializer.save(requester=user, status=ProductRequest.Status.SUBMITTED)

    @action(detail=True, methods=['get'], url_path='recommendation')
    def recommendation(self, request, pk=None):
        product_request = self.get_object()
        role = get_user_role(request.user)
        if role not in {
            UserProfile.RoleChoices.ADMIN,
            UserProfile.RoleChoices.SUB_ADMIN,
            UserProfile.RoleChoices.PRODUCT_REQUESTER,
        }:
            return Response({'detail': 'Not authorized to view recommendations.'}, status=status.HTTP_403_FORBIDDEN)

        recommendation = evaluate_supplier_offers(product_request)
        product_request.ai_recommendation = recommendation
        if recommendation.get('recommended_offer_id'):
            try:
                offer = product_request.offers.get(id=recommendation['recommended_offer_id'])
                product_request.recommended_supplier = offer.supplier
                offer.status = SupplierOffer.Status.RECOMMENDED
                offer.save(update_fields=['status'])
            except SupplierOffer.DoesNotExist:
                pass
        product_request.status = ProductRequest.Status.AI_RECOMMENDED
        product_request.save(update_fields=['ai_recommendation', 'recommended_supplier', 'status'])
        return Response(recommendation)

    @action(detail=True, methods=['post'], url_path='broadcast')
    def broadcast(self, request, pk=None):
        product_request = self.get_object()
        role = get_user_role(request.user)
        if role not in {UserProfile.RoleChoices.ADMIN, UserProfile.RoleChoices.SUB_ADMIN}:
            return Response({'detail': 'Only admins can broadcast requests.'}, status=status.HTTP_403_FORBIDDEN)
        product_request.status = ProductRequest.Status.NOTIFIED_SUPPLIERS
        product_request.broadcasted_at = timezone.now()
        product_request.save(update_fields=['status', 'broadcasted_at'])
        # Placeholder for notification logic
        return Response({'detail': 'Suppliers have been notified.'})


class SupplierOfferViewSet(viewsets.ModelViewSet):
    """Suppliers submit offers for product requests"""

    serializer_class = SupplierOfferSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        role = get_user_role(user)
        queryset = SupplierOffer.objects.select_related('supplier', 'request', 'request__requester')
        if role in {UserProfile.RoleChoices.ADMIN, UserProfile.RoleChoices.SUB_ADMIN}:
            return queryset
        if role == UserProfile.RoleChoices.SUPPLIER:
            return queryset.filter(supplier=user)
        if role == UserProfile.RoleChoices.PRODUCT_REQUESTER:
            return queryset.filter(request__requester=user)
        return queryset.none()

    def perform_create(self, serializer):
        user = self.request.user
        role = get_user_role(user)
        if role != UserProfile.RoleChoices.SUPPLIER:
            raise PermissionDenied("Only suppliers can submit offers.")
        serializer.save(supplier=user)


class ChatMessageViewSet(viewsets.ModelViewSet):
    """Chat messages per product request"""

    serializer_class = ChatMessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        request_id = self.request.query_params.get('request_id')
        queryset = ChatMessage.objects.select_related('request', 'sender')
        if request_id:
            queryset = queryset.filter(request_id=request_id)

        user = self.request.user
        role = get_user_role(user)
        if role in {UserProfile.RoleChoices.ADMIN, UserProfile.RoleChoices.SUB_ADMIN}:
            return queryset
        return queryset.filter(
            Q(request__requester=user) |
            Q(request__offers__supplier=user) |
            Q(sender=user)
        ).distinct()

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(sender=user)


class AccountingSummaryViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        user = request.user
        role = get_user_role(user)

        if role in {UserProfile.RoleChoices.ADMIN, UserProfile.RoleChoices.SUB_ADMIN}:
            qs = AccountingEntry.objects.all()
        else:
            qs = AccountingEntry.objects.filter(user=user)

        summary = qs.aggregate(
            total_debits=Sum('amount', filter=Q(entry_type=AccountingEntry.EntryType.DEBIT)),
            total_credits=Sum('amount', filter=Q(entry_type=AccountingEntry.EntryType.CREDIT)),
            entries=Count('id')
        )
        serializer = AccountingEntrySerializer(qs.order_by('-recorded_at')[:50], many=True)
        return Response({
            'summary': summary,
            'entries': serializer.data
        })

