from django.db import models
from django.core.validators import MinValueValidator
from django.conf import settings
from decimal import Decimal
from orders.models import Order
from customers.models import Customer
from suppliers.models import Supplier


class ChartOfAccounts(models.Model):
    """Chart of Accounts for General Ledger"""
    
    ACCOUNT_TYPES = [
        ('asset', 'Asset'),
        ('liability', 'Liability'),
        ('equity', 'Equity'),
        ('revenue', 'Revenue'),
        ('expense', 'Expense'),
    ]
    
    code = models.CharField(max_length=20, unique=True, help_text="Account code (e.g., 1000, 2000)")
    name = models.CharField(max_length=200, help_text="Account name")
    account_type = models.CharField(max_length=20, choices=ACCOUNT_TYPES, help_text="Type of account")
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name='children')
    is_active = models.BooleanField(default=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['code']
        verbose_name = 'Chart of Account'
        verbose_name_plural = 'Chart of Accounts'
        indexes = [
            models.Index(fields=['code'], name='coa_code_idx'),
            models.Index(fields=['account_type'], name='coa_type_idx'),
        ]
    
    def __str__(self):
        return f"{self.code} - {self.name}"


class GeneralLedgerEntry(models.Model):
    """General Ledger Entry - Full accounting for Admin"""
    
    TRANSACTION_TYPES = [
        ('order_created', 'Order Created'),
        ('customer_payment', 'Customer Payment'),
        ('supplier_payment', 'Supplier Payment'),
        ('purchase_order', 'Purchase Order'),
        ('adjustment', 'Adjustment'),
        ('other', 'Other'),
    ]
    
    entry_date = models.DateField(help_text="Date of the transaction")
    account = models.ForeignKey(ChartOfAccounts, on_delete=models.PROTECT, related_name='gl_entries')
    debit = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=Decimal('0.00'),
        validators=[MinValueValidator(Decimal('0.00'))],
        help_text="Debit amount"
    )
    credit = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=Decimal('0.00'),
        validators=[MinValueValidator(Decimal('0.00'))],
        help_text="Credit amount"
    )
    transaction_type = models.CharField(max_length=30, choices=TRANSACTION_TYPES)
    reference = models.CharField(max_length=100, blank=True, help_text="Reference number (e.g., Order #123)")
    description = models.TextField(help_text="Transaction description")
    order = models.ForeignKey(Order, null=True, blank=True, on_delete=models.SET_NULL, related_name='gl_entries')
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='created_gl_entries')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-entry_date', '-created_at']
        verbose_name = 'General Ledger Entry'
        verbose_name_plural = 'General Ledger Entries'
        indexes = [
            models.Index(fields=['entry_date'], name='gl_entry_date_idx'),
            models.Index(fields=['account', 'entry_date'], name='gl_account_date_idx'),
            models.Index(fields=['transaction_type'], name='gl_transaction_type_idx'),
        ]
    
    def __str__(self):
        return f"GL Entry #{self.id} - {self.account.code} ({self.entry_date})"


class AccountsReceivable(models.Model):
    """Accounts Receivable - Customer receivables"""
    
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('partial', 'Partially Paid'),
        ('paid', 'Paid'),
        ('overdue', 'Overdue'),
        ('cancelled', 'Cancelled'),
    ]
    
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='ar_accounts')
    order = models.ForeignKey(Order, null=True, blank=True, on_delete=models.SET_NULL, related_name='ar_entries')
    invoice_number = models.CharField(max_length=50, unique=True, help_text="Invoice number")
    invoice_date = models.DateField(help_text="Invoice date")
    due_date = models.DateField(help_text="Payment due date")
    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        validators=[MinValueValidator(Decimal('0.01'))],
        help_text="Invoice amount"
    )
    paid_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=Decimal('0.00'),
        validators=[MinValueValidator(Decimal('0.00'))],
        help_text="Amount paid so far"
    )
    balance = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        help_text="Outstanding balance"
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-invoice_date', '-created_at']
        verbose_name = 'Accounts Receivable'
        verbose_name_plural = 'Accounts Receivable'
        indexes = [
            models.Index(fields=['customer', 'status'], name='ar_customer_status_idx'),
            models.Index(fields=['invoice_date'], name='ar_invoice_date_idx'),
            models.Index(fields=['due_date', 'status'], name='ar_due_date_status_idx'),
        ]
    
    def save(self, *args, **kwargs):
        self.balance = self.amount - self.paid_amount
        if self.balance <= 0:
            self.status = 'paid'
        elif self.paid_amount > 0:
            self.status = 'partial'
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"AR #{self.invoice_number} - {self.customer.name} ({self.balance})"


class AccountsPayable(models.Model):
    """Accounts Payable - Supplier payables"""
    
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('partial', 'Partially Paid'),
        ('paid', 'Paid'),
        ('overdue', 'Overdue'),
        ('cancelled', 'Cancelled'),
    ]
    
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, related_name='ap_accounts')
    order = models.ForeignKey(Order, null=True, blank=True, on_delete=models.SET_NULL, related_name='ap_entries')
    bill_number = models.CharField(max_length=50, unique=True, help_text="Bill/Invoice number from supplier")
    bill_date = models.DateField(help_text="Bill date")
    due_date = models.DateField(help_text="Payment due date")
    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        validators=[MinValueValidator(Decimal('0.01'))],
        help_text="Bill amount"
    )
    paid_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=Decimal('0.00'),
        validators=[MinValueValidator(Decimal('0.00'))],
        help_text="Amount paid so far"
    )
    balance = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        help_text="Outstanding balance"
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-bill_date', '-created_at']
        verbose_name = 'Accounts Payable'
        verbose_name_plural = 'Accounts Payable'
        indexes = [
            models.Index(fields=['supplier', 'status'], name='ap_supplier_status_idx'),
            models.Index(fields=['bill_date'], name='ap_bill_date_idx'),
            models.Index(fields=['due_date', 'status'], name='ap_due_date_status_idx'),
        ]
    
    def save(self, *args, **kwargs):
        self.balance = self.amount - self.paid_amount
        if self.balance <= 0:
            self.status = 'paid'
        elif self.paid_amount > 0:
            self.status = 'partial'
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"AP #{self.bill_number} - {self.supplier.name} ({self.balance})"


class CustomerAccount(models.Model):
    """Simple account per customer - shows balance, invoices, payments"""
    
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE, related_name='account')
    balance = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=Decimal('0.00'),
        help_text="Current account balance (positive = customer owes, negative = credit)"
    )
    total_invoiced = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=Decimal('0.00'),
        help_text="Total amount invoiced"
    )
    total_paid = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=Decimal('0.00'),
        help_text="Total amount paid"
    )
    last_transaction_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-updated_at']
        verbose_name = 'Customer Account'
        verbose_name_plural = 'Customer Accounts'
        indexes = [
            models.Index(fields=['customer'], name='customer_account_customer_idx'),
            models.Index(fields=['balance'], name='customer_account_balance_idx'),
        ]
    
    def __str__(self):
        return f"Account - {self.customer.name} (Balance: {self.balance})"


class Payment(models.Model):
    """Payment records - for both customer payments and supplier payments"""
    
    PAYMENT_TYPES = [
        ('customer_payment', 'Customer Payment'),
        ('supplier_payment', 'Supplier Payment'),
    ]
    
    PAYMENT_METHODS = [
        ('cash', 'Cash'),
        ('bank_transfer', 'Bank Transfer'),
        ('credit_card', 'Credit Card'),
        ('fawry', 'Fawry'),
        ('vodafone_cash', 'Vodafone Cash'),
        ('orange_money', 'Orange Money'),
        ('etisalat_cash', 'Etisalat Cash'),
        ('paymob', 'Paymob'),
        ('paytabs', 'PayTabs'),
        ('myfatoorah', 'MyFatoorah'),
        ('other', 'Other'),
    ]
    
    payment_type = models.CharField(max_length=20, choices=PAYMENT_TYPES)
    payment_date = models.DateField(help_text="Payment date")
    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        validators=[MinValueValidator(Decimal('0.01'))],
        help_text="Payment amount"
    )
    payment_method = models.CharField(max_length=30, choices=PAYMENT_METHODS)
    reference_number = models.CharField(max_length=100, blank=True, help_text="Payment reference/transaction ID")
    
    # Links to AR or AP
    ar_entry = models.ForeignKey(AccountsReceivable, null=True, blank=True, on_delete=models.SET_NULL, related_name='payments')
    ap_entry = models.ForeignKey(AccountsPayable, null=True, blank=True, on_delete=models.SET_NULL, related_name='payments')
    
    order = models.ForeignKey(Order, null=True, blank=True, on_delete=models.SET_NULL, related_name='payments')
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='created_payments')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-payment_date', '-created_at']
        verbose_name = 'Payment'
        verbose_name_plural = 'Payments'
        indexes = [
            models.Index(fields=['payment_date'], name='payment_date_idx'),
            models.Index(fields=['payment_type'], name='payment_type_idx'),
            models.Index(fields=['ar_entry'], name='payment_ar_idx'),
            models.Index(fields=['ap_entry'], name='payment_ap_idx'),
        ]
    
    def __str__(self):
        return f"Payment #{self.id} - {self.amount} ({self.payment_date})"
