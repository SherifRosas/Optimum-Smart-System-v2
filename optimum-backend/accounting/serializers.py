from rest_framework import serializers
from .models import (
    ChartOfAccounts,
    GeneralLedgerEntry,
    AccountsReceivable,
    AccountsPayable,
    CustomerAccount,
    Payment
)
# Note: We don't import full serializers to avoid circular dependencies
# We'll use read-only fields instead


class ChartOfAccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartOfAccounts
        fields = '__all__'


class GeneralLedgerEntrySerializer(serializers.ModelSerializer):
    account_name = serializers.CharField(source='account.name', read_only=True)
    account_code = serializers.CharField(source='account.code', read_only=True)
    created_by_username = serializers.CharField(source='created_by.username', read_only=True)
    order_id = serializers.IntegerField(source='order.id', read_only=True)
    
    class Meta:
        model = GeneralLedgerEntry
        fields = '__all__'


class AccountsReceivableSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.name', read_only=True)
    customer_email = serializers.EmailField(source='customer.email', read_only=True)
    order_id = serializers.IntegerField(source='order.id', read_only=True)
    order_product_type = serializers.CharField(source='order.product_type', read_only=True)
    
    class Meta:
        model = AccountsReceivable
        fields = '__all__'


class AccountsPayableSerializer(serializers.ModelSerializer):
    supplier_name = serializers.CharField(source='supplier.name', read_only=True)
    supplier_email = serializers.EmailField(source='supplier.email', read_only=True)
    order_id = serializers.IntegerField(source='order.id', read_only=True)
    order_product_type = serializers.CharField(source='order.product_type', read_only=True)
    
    class Meta:
        model = AccountsPayable
        fields = '__all__'


class CustomerAccountSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.name', read_only=True)
    customer_email = serializers.EmailField(source='customer.email', read_only=True)
    customer_phone = serializers.CharField(source='customer.phone_number', read_only=True)
    
    class Meta:
        model = CustomerAccount
        fields = '__all__'


class PaymentSerializer(serializers.ModelSerializer):
    created_by_username = serializers.CharField(source='created_by.username', read_only=True)
    ar_invoice_number = serializers.CharField(source='ar_entry.invoice_number', read_only=True)
    ap_bill_number = serializers.CharField(source='ap_entry.bill_number', read_only=True)
    order_id = serializers.IntegerField(source='order.id', read_only=True)
    
    class Meta:
        model = Payment
        fields = '__all__'


class AccountingSummarySerializer(serializers.Serializer):
    """Summary statistics for accounting dashboard"""
    total_receivables = serializers.DecimalField(max_digits=12, decimal_places=2)
    total_payables = serializers.DecimalField(max_digits=12, decimal_places=2)
    total_customer_balance = serializers.DecimalField(max_digits=12, decimal_places=2)
    total_revenue = serializers.DecimalField(max_digits=12, decimal_places=2)
    total_expenses = serializers.DecimalField(max_digits=12, decimal_places=2)
    net_income = serializers.DecimalField(max_digits=12, decimal_places=2)
    overdue_receivables = serializers.DecimalField(max_digits=12, decimal_places=2)
    overdue_payables = serializers.DecimalField(max_digits=12, decimal_places=2)
