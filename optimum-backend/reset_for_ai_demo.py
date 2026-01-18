import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from orders.models import Order
from product_requests.models import SupplierOffer

def reset_orders():
    print("Resetting orders to 'pending'...")
    orders = Order.objects.all()
    count = orders.update(status='pending', supplier=None)
    print(f"Updated {count} orders to PENDING.")

    print("Deleting existing supplier offers...")
    deleted_count, _ = SupplierOffer.objects.all().delete()
    print(f"Deleted {deleted_count} offers.")

    print("Ready for AI Procurement run!")

if __name__ == "__main__":
    reset_orders()
