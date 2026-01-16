"""
Accounting utility functions for automatic accounting entries
"""
from django.utils import timezone
from decimal import Decimal
from .models import (
    ChartOfAccounts,
    GeneralLedgerEntry,
    AccountsReceivable,
    AccountsPayable,
    CustomerAccount,
)
from orders.models import Order
from customers.models import Customer
from suppliers.models import Supplier


def get_or_create_account(code, name, account_type, parent=None):
    """Get or create a chart of accounts entry"""
    account, created = ChartOfAccounts.objects.get_or_create(
        code=code,
        defaults={
            'name': name,
            'account_type': account_type,
            'parent': parent,
        }
    )
    return account


def initialize_chart_of_accounts():
    """Initialize basic chart of accounts"""
    # Assets
    cash_account = get_or_create_account('1000', 'Cash and Bank', 'asset')
    ar_account = get_or_create_account('1200', 'Accounts Receivable', 'asset')
    inventory_account = get_or_create_account('1500', 'Inventory', 'asset')
    
    # Liabilities
    ap_account = get_or_create_account('2000', 'Accounts Payable', 'liability')
    
    # Equity
    equity_account = get_or_create_account('3000', 'Owner Equity', 'equity')
    
    # Revenue
    revenue_account = get_or_create_account('4000', 'Sales Revenue', 'revenue')
    
    # Expenses
    cogs_account = get_or_create_account('5000', 'Cost of Goods Sold', 'expense')
    operating_expense_account = get_or_create_account('6000', 'Operating Expenses', 'expense')
    
    return {
        'cash': cash_account,
        'ar': ar_account,
        'inventory': inventory_account,
        'ap': ap_account,
        'equity': equity_account,
        'revenue': revenue_account,
        'cogs': cogs_account,
        'operating_expense': operating_expense_account,
    }


def create_invoice_for_order(order):
    """Create an Accounts Receivable entry (invoice) for a customer order"""
    # Generate invoice number
    invoice_number = f"INV-{order.id}-{timezone.now().strftime('%Y%m%d')}"
    
    # Calculate due date (30 days from now)
    due_date = timezone.now().date() + timezone.timedelta(days=30)
    
    # Create AR entry
    ar_entry = AccountsReceivable.objects.create(
        customer=order.customer,
        order=order,
        invoice_number=invoice_number,
        invoice_date=timezone.now().date(),
        due_date=due_date,
        amount=order.total_amount,
        paid_amount=Decimal('0.00'),
        description=f"Invoice for Order #{order.id} - {order.product_type}",
    )
    
    # Update customer account
    customer_account, _ = CustomerAccount.objects.get_or_create(customer=order.customer)
    customer_account.total_invoiced += order.total_amount
    customer_account.balance = customer_account.total_invoiced - customer_account.total_paid
    customer_account.last_transaction_date = timezone.now()
    customer_account.save()
    
    # Create GL entries
    accounts = initialize_chart_of_accounts()
    
    # Debit: Accounts Receivable
    GeneralLedgerEntry.objects.create(
        entry_date=timezone.now().date(),
        account=accounts['ar'],
        debit=order.total_amount,
        credit=Decimal('0.00'),
        transaction_type='order_created',
        reference=f"Order #{order.id}",
        description=f"Customer order - {order.product_type}",
        order=order,
    )
    
    # Credit: Sales Revenue
    GeneralLedgerEntry.objects.create(
        entry_date=timezone.now().date(),
        account=accounts['revenue'],
        debit=Decimal('0.00'),
        credit=order.total_amount,
        transaction_type='order_created',
        reference=f"Order #{order.id}",
        description=f"Sales revenue - {order.product_type}",
        order=order,
    )
    
    return ar_entry


def create_bill_for_supplier_order(order, supplier, amount):
    """Create an Accounts Payable entry (bill) for a supplier purchase"""
    # Generate bill number
    bill_number = f"BILL-{order.id}-{timezone.now().strftime('%Y%m%d')}"
    
    # Calculate due date (30 days from now)
    due_date = timezone.now().date() + timezone.timedelta(days=30)
    
    # Create AP entry
    ap_entry = AccountsPayable.objects.create(
        supplier=supplier,
        order=order,
        bill_number=bill_number,
        bill_date=timezone.now().date(),
        due_date=due_date,
        amount=amount,
        paid_amount=Decimal('0.00'),
        description=f"Bill for Order #{order.id} - {order.product_type}",
    )
    
    # Create GL entries
    accounts = initialize_chart_of_accounts()
    
    # Debit: Cost of Goods Sold or Inventory
    GeneralLedgerEntry.objects.create(
        entry_date=timezone.now().date(),
        account=accounts['cogs'],
        debit=amount,
        credit=Decimal('0.00'),
        transaction_type='purchase_order',
        reference=f"Order #{order.id}",
        description=f"Purchase from supplier - {order.product_type}",
        order=order,
    )
    
    # Credit: Accounts Payable
    GeneralLedgerEntry.objects.create(
        entry_date=timezone.now().date(),
        account=accounts['ap'],
        debit=Decimal('0.00'),
        credit=amount,
        transaction_type='purchase_order',
        reference=f"Order #{order.id}",
        description=f"Supplier bill - {order.product_type}",
        order=order,
    )
    
    return ap_entry
