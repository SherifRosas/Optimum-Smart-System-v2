from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ChartOfAccountsViewSet,
    GeneralLedgerEntryViewSet,
    AccountsReceivableViewSet,
    AccountsPayableViewSet,
    CustomerAccountViewSet,
    PaymentViewSet,
    AccountingSummaryViewSet,
)

router = DefaultRouter()
router.register(r'chart-of-accounts', ChartOfAccountsViewSet, basename='chart-of-accounts')
router.register(r'general-ledger', GeneralLedgerEntryViewSet, basename='general-ledger')
router.register(r'accounts-receivable', AccountsReceivableViewSet, basename='accounts-receivable')
router.register(r'accounts-payable', AccountsPayableViewSet, basename='accounts-payable')
router.register(r'customer-accounts', CustomerAccountViewSet, basename='customer-accounts')
router.register(r'payments', PaymentViewSet, basename='payments')
router.register(r'summary', AccountingSummaryViewSet, basename='accounting-summary')

urlpatterns = [
    path('', include(router.urls)),
]
