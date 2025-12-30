from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    ProductRequestViewSet,
    SupplierOfferViewSet,
    ChatMessageViewSet,
    AccountingSummaryViewSet,
)

app_name = 'product_requests'

router = DefaultRouter()
router.register('product-requests', ProductRequestViewSet, basename='product-request')
router.register('supplier-offers', SupplierOfferViewSet, basename='supplier-offer')
router.register('request-chat', ChatMessageViewSet, basename='request-chat')

summary_list = AccountingSummaryViewSet.as_view({'get': 'list'})

urlpatterns = [
    path('', include(router.urls)),
    path('accounting/summary/', summary_list, name='accounting-summary'),
]

