import os
import django
import random
from decimal import Decimal
from django.utils import timezone
from datetime import timedelta

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from orders.models import Order
from accounting.models import AccountsReceivable, AccountsPayable, CustomerAccount
from customers.models import Customer
from suppliers.models import Supplier

def sync_accounting():
    print("Syncing Accounting Records...")
    orders = Order.objects.all()
    
    ar_count = 0
    ap_count = 0
    
    for order in orders:
        # 1. Create Invoice (Accounts Receivable)
        invoice_number = f"INV-{order.id}-{order.created_at.strftime('%Y%m')}"
        ar_entry, created = AccountsReceivable.objects.get_or_create(
            order=order,
            defaults={
                'customer': order.customer,
                'invoice_number': invoice_number,
                'invoice_date': order.created_at.date(),
                'due_date': order.created_at.date() + timedelta(days=30),
                'amount': order.total_amount,
                'balance': order.total_amount, # Assuming unpaid
                'status': 'open',
                'description': f"Invoice for Order #{order.id} - {order.product_type}"
            }
        )
        if created:
            ar_count += 1
            # Update Customer Account Balance
            cust_acc, _ = CustomerAccount.objects.get_or_create(customer=order.customer)
            cust_acc.total_invoiced += order.total_amount
            cust_acc.balance += order.total_amount
            cust_acc.save()

        # 2. Create Bill (Accounts Payable) if Supplier Assigned
        if order.supplier:
            bill_number = f"BILL-{order.id}-{order.supplier.id}"
            ap_entry, ap_created = AccountsPayable.objects.get_or_create(
                order=order,
                defaults={
                    'supplier': order.supplier,
                    'bill_number': bill_number, 
                    'bill_date': order.created_at.date(),
                    'due_date': order.created_at.date() + timedelta(days=15),
                    'amount': order.total_amount * Decimal("0.8"), # Assume 20% margin for cost
                    'balance': order.total_amount * Decimal("0.8"),
                    'status': 'open',
                    'description': f"Bill for Order #{order.id} from {order.supplier.name}"
                }
            )
            if ap_created:
                ap_count += 1

    print(f"Sync Complete. Created {ar_count} AR entries and {ap_count} AP entries.")

if __name__ == "__main__":
    sync_accounting()
