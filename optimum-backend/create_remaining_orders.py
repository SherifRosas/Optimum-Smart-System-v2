import os
import django
from datetime import timedelta
from django.utils import timezone

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from orders.models import Order
from customers.models import Customer

orders_to_create = [
    {
        "customer_name": "Omar Khaled",
        "product_type": "Office Supplies",
        "quantity": 50,
        "days_offset": 0  # Today
    },
    {
        "customer_name": "Sara Ibrahim",
        "product_type": "Machinery Parts",
        "quantity": 5,
        "days_offset": 3  # In 3 days
    },
    {
        "customer_name": "Mohamed Hassan",
        "product_type": "Chemical Additives",
        "quantity": 200,
        "days_offset": 30 # Next month
    },
    {
        "customer_name": "Fatima Ali",
        "product_type": "Safety Gear",
        "quantity": 20,
        "days_offset": 0 # Today
    },
    {
        "customer_name": "Ahmed Mohamed",
        "product_type": "Maintenance Service",
        "quantity": 1,
        "days_offset": 1 # Tomorrow
    }
]

print("Starting auto-fill of remaining orders...")

for order_data in orders_to_create:
    try:
        # Find customer by name
        customer = Customer.objects.filter(name__icontains=order_data["customer_name"]).first()
        if not customer:
            print(f"❌ Customer not found: {order_data['customer_name']}")
            continue

        # Calculate delivery date
        delivery_date = timezone.now() + timedelta(days=order_data["days_offset"])

        # Create Order
        order = Order.objects.create(
            customer=customer,
            product_type=order_data["product_type"],
            quantity=order_data["quantity"],
            unit_price=0.00, # Pending Quote
            total_amount=0.00,
            delivery_date=delivery_date,
            status='pending',
            is_ai_generated=False
        )
        print(f"[OK] Created Order #{order.id} for {customer.name}: {order.product_type} (Qty: {order.quantity})")

    except Exception as e:
        print(f"[ERR] Failed to create order for {order_data['customer_name']}: {e}")

print("Done!")
