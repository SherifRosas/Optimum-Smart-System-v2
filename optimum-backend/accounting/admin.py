from django.contrib import admin
from .models import (
    ChartOfAccounts,
    GeneralLedgerEntry,
    AccountsReceivable,
    AccountsPayable,
    CustomerAccount,
    Payment
)


@admin.register(ChartOfAccounts)
class ChartOfAccountsAdmin(admin.ModelAdmin):
    list_display = ['code', 'name', 'account_type', 'is_active', 'parent']
    list_filter = ['account_type', 'is_active']
    search_fields = ['code', 'name']
    ordering = ['code']


@admin.register(GeneralLedgerEntry)
class GeneralLedgerEntryAdmin(admin.ModelAdmin):
    list_display = ['entry_date', 'account', 'debit', 'credit', 'transaction_type', 'reference', 'created_by']
    list_filter = ['transaction_type', 'entry_date', 'account']
    search_fields = ['reference', 'description', 'account__name', 'account__code']
    date_hierarchy = 'entry_date'
    readonly_fields = ['created_at']


@admin.register(AccountsReceivable)
class AccountsReceivableAdmin(admin.ModelAdmin):
    list_display = ['invoice_number', 'customer', 'invoice_date', 'due_date', 'amount', 'paid_amount', 'balance', 'status']
    list_filter = ['status', 'invoice_date', 'due_date']
    search_fields = ['invoice_number', 'customer__name', 'customer__email']
    date_hierarchy = 'invoice_date'
    readonly_fields = ['balance', 'created_at', 'updated_at']


@admin.register(AccountsPayable)
class AccountsPayableAdmin(admin.ModelAdmin):
    list_display = ['bill_number', 'supplier', 'bill_date', 'due_date', 'amount', 'paid_amount', 'balance', 'status']
    list_filter = ['status', 'bill_date', 'due_date']
    search_fields = ['bill_number', 'supplier__name', 'supplier__email']
    date_hierarchy = 'bill_date'
    readonly_fields = ['balance', 'created_at', 'updated_at']


@admin.register(CustomerAccount)
class CustomerAccountAdmin(admin.ModelAdmin):
    list_display = ['customer', 'balance', 'total_invoiced', 'total_paid', 'last_transaction_date']
    search_fields = ['customer__name', 'customer__email']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ['payment_date', 'payment_type', 'amount', 'payment_method', 'reference_number', 'created_by']
    list_filter = ['payment_type', 'payment_method', 'payment_date']
    search_fields = ['reference_number', 'description']
    date_hierarchy = 'payment_date'
    readonly_fields = ['created_at']
