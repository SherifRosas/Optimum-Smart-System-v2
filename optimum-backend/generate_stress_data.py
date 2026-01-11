import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from customers.models import Customer
from orders.models import Order
from django.utils import timezone
from datetime import timedelta
import random

def run_stress_test():
    customers_names = [f"Stress Customer {i}" for i in range(1, 8)]
    products = [
        "Solar Panel XP1", "High-Cap Battery", "Pure Sine Inverter", 
        "Mounting Rail Set", "Smart Controller", "AC Cable 10m", "DC Isolator"
    ]
    
    customers = []
    for name in customers_names:
        customer, _ = Customer.objects.get_or_create(
            name=name,
            defaults={'phone_number': f'555-{random.randint(100, 999)}'}
        )
        customers.append(customer)
    
    created_count = 0
    today = timezone.now().date()
    
    for customer in customers:
        for product in products:
            # Create a mix of pending, delivered and cancelled to feed AI insights
            status_choice = random.choices(
                ['pending', 'in-preparation', 'ready', 'delivered', 'cancelled'],
                weights=[20, 20, 10, 40, 10]
            )[0]
            
            quantity = random.randint(1, 20)
            unit_price = random.randint(50, 500)
            
            Order.objects.create(
                customer=customer,
                product_type=product,
                quantity=quantity,
                unit_price=unit_price,
                total_amount=quantity * unit_price,
                delivery_date=today + timedelta(days=random.randint(1, 14)),
                status=status_choice,
                priority=random.choice(['low', 'medium', 'high', 'critical'])
            )
            created_count += 1
            
    print(f"Successfully created {created_count} orders for 7 customers.")

if __name__ == "__main__":
    run_stress_test()
