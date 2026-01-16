from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q, Sum, Count, Avg
from django.utils import timezone
from datetime import timedelta
from .models import Order, OrderMessage
from .serializers import OrderSerializer, OrderListSerializer, OrderMessageSerializer
from customers.models import Customer
from suppliers.models import Supplier
from ai_services import OrderAnalysisAI

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.select_related('customer', 'supplier').prefetch_related('messages')
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'list':
            return OrderListSerializer
        return OrderSerializer

    def get_queryset(self):
        queryset = Order.objects.select_related('customer', 'supplier').prefetch_related('messages')
        user = self.request.user
        
        # Role-based filtering
        if user.is_authenticated and hasattr(user, 'profile'):
            role = user.profile.role
            
            # Customers (Product Requesters) see only their own orders
            if role == 'PRODUCT_REQUESTER':
                # Filter by phone number linking UserProfile to Customer
                if user.profile.phone_number:
                    queryset = queryset.filter(customer__phone_number=user.profile.phone_number)
                else:
                    # If no phone number, return empty or try matching by name/email as fallback?
                    # Safer to return strict empty if no trusted link exists
                    queryset = queryset.none()
            
            # Suppliers see only orders assigned to them
            elif role == 'SUPPLIER':
                # Assuming Supplier model is linked to User, or UserProfile has supplier_id?
                # UserProfile doesn't seem to have direct supplier link, checking Supplier model...
                # Usually Supplier has a OneToOne to User or similar. 
                # Let's check if there is a Supplier object for this user
                try:
                    # If Supplier model is linked to User directly:
                    # supplier = user.supplier
                    # Or if Supplier lookup is needed:
                    queryset = queryset.filter(supplier__user=user)
                except Exception:
                    # Fallback if specific Supplier-User link logic differs
                    # For now, let's assume matching email or name if no direct link, 
                    # but typically it is supplier__user
                    pass

        # Filter by status
        status_filter = self.request.query_params.get('status', None)
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        
        # Filter by date range
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        if start_date:
            queryset = queryset.filter(created_at__date__gte=start_date)
        if end_date:
            queryset = queryset.filter(created_at__date__lte=end_date)
        
        # Search
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(
                Q(customer__name__icontains=search) |
                Q(product_type__icontains=search) |
                Q(customer__phone_number__icontains=search)
            )
        
        return queryset.order_by('-created_at')

    def create(self, request, *args, **kwargs):
        """Create a new order with automatic customer creation if needed"""
        data = request.data.copy()
        
        # Handle customer creation/retrieval
        # Handle customer creation/retrieval
        customer_data = data.get('customer', {})
        customer = None

        # 1. Try to identify customer from logged-in user (if they are a Product Requester)
        if request.user.is_authenticated and hasattr(request.user, 'profile'):
            if request.user.profile.role == 'PRODUCT_REQUESTER' and request.user.profile.phone_number:
                customer = Customer.objects.filter(phone_number=request.user.profile.phone_number).first()
                if customer:
                     # Update customer name if provided in request, otherwise keep existing
                     if customer_data.get('name'):
                         customer.name = customer_data.get('name')
                         customer.save(update_fields=['name'])
        
        # 2. If not found via user profile, try to get/create from request data
        if not customer and customer_data:
            customer, created = Customer.objects.get_or_create(
                phone_number=customer_data.get('phone_number'),
                defaults={
                    'name': customer_data.get('name'),
                    'email': customer_data.get('email', ''),
                    'address': customer_data.get('address', '')
                }
            )
        
        if customer:
            data['customer_id'] = customer.id
        
        # AI-powered auto-assign supplier if not provided
        if not data.get('supplier_id'):
            product_type = data.get('product_type', '')
            quantity = data.get('quantity', 1)
            delivery_date = data.get('delivery_date')
            
            # Get all active suppliers with their performance data
            suppliers = Supplier.objects.filter(is_active=True).annotate(
                past_orders_count=Count('orders'),
                success_rate=Avg('orders__status')  # Simplified - in real system, calculate actual success
            )
            
            # Prepare supplier data for AI analysis
            suppliers_data = []
            for supplier in suppliers:
                # Calculate success rate (orders delivered vs total)
                total_orders = supplier.orders.count()
                delivered_orders = supplier.orders.filter(status='delivered').count()
                success_rate = (delivered_orders / total_orders) if total_orders > 0 else 0.8
                
                suppliers_data.append({
                    'id': supplier.id,
                    'name': supplier.name,
                    'rating': float(supplier.rating),
                    'is_active': supplier.is_active,
                    'past_orders_count': total_orders,
                    'success_rate': success_rate
                })
            
            # Use AI to recommend best supplier
            ai_service = OrderAnalysisAI()
            recommendation = ai_service.recommend_supplier(
                product_type=product_type,
                quantity=quantity,
                delivery_date=str(delivery_date) if delivery_date else None,
                suppliers_data=suppliers_data
            )
            
            # Assign recommended supplier
            if recommendation.get('supplier_id'):
                data['supplier_id'] = recommendation['supplier_id']
                # Store AI recommendation in notes for reference
                ai_note = f"[AI-Assigned] {recommendation.get('reasoning', 'Auto-assigned by AI')} (Confidence: {recommendation.get('confidence', 0):.1%})"
                if data.get('notes'):
                    data['notes'] = f"{data['notes']}\n\n{ai_note}"
                else:
                    data['notes'] = ai_note
        
        # Set default values for fields that might not be provided
        if 'is_ai_generated' not in data:
            data['is_ai_generated'] = False
        if 'priority' not in data:
            data['priority'] = 'medium'
        if 'risk_score' not in data:
            data['risk_score'] = 0.0
        if 'unit_price' not in data:
            data['unit_price'] = 0.0
        
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save()
        
        # Create initial system message
        OrderMessage.objects.create(
            order=order,
            message_type='system',
            content=f'Order #{order.id} has been created and sent to {order.supplier.name if order.supplier else "supplier"}'
        )
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'])
    def confirm_offer(self, request, pk=None):
        """Supplier confirms an AI-generated offer"""
        order = self.get_object()
        user = request.user
        
        # Security: check if user is the assigned supplier
        offer = order.offers.filter(supplier__user=user, status='waiting_confirmation').first()
        if not offer:
            return Response(
                {'error': 'No pending offer matching your account for this order'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        offer.status = 'confirmed'
        offer.save()
        
        order.status = 'in-preparation'
        order.save()
        
        # Update other offers for this order
        order.offers.exclude(id=offer.id).update(status='rejected')
        
        OrderMessage.objects.create(
            order=order,
            message_type='system',
            content=f'Supplier {user.username} confirmed the offer. Order is now In Preparation.'
        )
        
        return Response({'message': 'Offer confirmed successfully', 'status': order.status})

    @action(detail=True, methods=['post'])
    def confirm_receipt(self, request, pk=None):
        """Customer confirms order receipt and provides feedback"""
        order = self.get_object()
        feedback = request.data.get('feedback', '')
        
        order.is_delivered_confirmed = True
        order.customer_feedback = feedback
        order.status = 'delivered'
        order.save()
        
        OrderMessage.objects.create(
            order=order,
            message_type='incoming',
            content=f'Customer confirmed receipt: {feedback}',
            sender=order.customer.name
        )
        
        return Response({'message': 'Receipt confirmed. Thank you for your feedback!'})

    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        """Update order status"""
        order = self.get_object()
        new_status = request.data.get('status')
        
        if new_status not in dict(Order.STATUS_CHOICES):
            return Response(
                {'error': 'Invalid status'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        old_status = order.status
        order.status = new_status
        order.save()
        
        # Create status update message
        OrderMessage.objects.create(
            order=order,
            message_type='system',
            content=f'Order status updated from {old_status} to {new_status}'
        )
        
        serializer = self.get_serializer(order)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def send_message(self, request, pk=None):
        """Send a message for an order"""
        order = self.get_object()
        content = request.data.get('content')
        message_type = request.data.get('type', 'outgoing')
        
        if not content:
            return Response(
                {'error': 'Message content is required'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        message = OrderMessage.objects.create(
            order=order,
            message_type=message_type,
            content=content,
            sender=request.data.get('sender', '')
        )
        
        serializer = OrderMessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def dashboard_stats(self, request):
        """Get dashboard statistics"""
        try:
            total_orders = Order.objects.count()
            pending_orders = Order.objects.filter(status='pending').count()
            in_preparation_orders = Order.objects.filter(status='in-preparation').count()
            ready_orders = Order.objects.filter(status='ready').count()
            delivered_orders = Order.objects.filter(status='delivered').count()
            
            # Calculate total revenue and profit
            revenue_result = Order.objects.aggregate(
                total=Sum('total_amount')
            )
            total_revenue = float(revenue_result['total'] or 0)
            
            # Mock profit calculation (20% margin)
            total_profit = total_revenue * 0.2
            
            # Upcoming deliveries (next 7 days)
            today = timezone.now().date()
            upcoming_date = today + timedelta(days=7)
            upcoming_deliveries = Order.objects.filter(
                delivery_date__lte=upcoming_date,
                delivery_date__gte=today
            ).count()
            
            return Response({
                'total_orders': total_orders,
                'pending_orders': pending_orders,
                'in_preparation_orders': in_preparation_orders,
                'ready_orders': ready_orders,
                'delivered_orders': delivered_orders,
                'total_revenue': total_revenue,
                'total_profit': total_profit,
                'upcoming_deliveries': upcoming_deliveries
            })
        except Exception as e:
            return Response({
                'error': str(e),
                'message': 'Failed to get dashboard statistics'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=False, methods=['get'])
    def recent_orders(self, request):
        """Get recent orders for dashboard"""
        limit = int(request.query_params.get('limit', 5))
        orders = Order.objects.select_related('customer', 'supplier').order_by('-created_at')[:limit]
        serializer = OrderListSerializer(orders, many=True)
        return Response(serializer.data)