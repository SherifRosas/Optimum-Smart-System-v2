
import os
import django
from decimal import Decimal

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth.models import User
from orders.models import Order, SupplierOffer, OrderMessage

def test_flow(order_id):
    print(f"--- Testing Flow for Order #{order_id} ---")
    order = Order.objects.get(id=order_id)
    
    # 1. Supplier Confirmation
    offer = order.offers.filter(status='waiting_confirmation').first()
    if not offer:
        print(f"No waiting offer found for Order {order_id}. Checking current status: {order.status}")
        return

    print(f"Current Status: {order.status}")
    print(f"Best Offer: {offer.supplier.name} at ${offer.unit_price}")
    
    # Simulate confirmation
    offer.status = 'confirmed'
    offer.save()
    order.status = 'in-preparation'
    order.save()
    order.offers.exclude(id=offer.id).update(status='rejected')
    
    OrderMessage.objects.create(
        order=order,
        message_type='system',
        content=f'Supplier {offer.supplier.name} confirmed the offer. Order is now In Preparation.'
    )
    print(f"Step 1: Confirmed. Status: {order.status}")

    # 2. Mark as Ready
    order.status = 'ready'
    order.save()
    OrderMessage.objects.create(
        order=order,
        message_type='system',
        content=f'Order is ready for delivery.'
    )
    print(f"Step 2: Ready. Status: {order.status}")

    # 3. Customer Confirmation
    feedback = "AI procurement worked perfectly! Fast and fair price."
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
    print(f"Step 3: Delivered. Status: {order.status}")
    print(f"Final Outcome: Order #{order_id} reached 'delivered' status with customer feedback recorded.")

if __name__ == "__main__":
    for order_id in [74, 75, 76]:
        try:
            test_flow(order_id)
        except Exception as e:
            print(f"Error processing order {order_id}: {e}")
