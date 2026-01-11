import os
import django
import random
from decimal import Decimal

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth import get_user_model
from customers.models import Customer
from suppliers.models import Supplier
from orders.models import Order

User = get_user_model()

def seed_data():
    print("🚀 Starting 7x7 Scenario Seeding...")

    # 1. Create Sub-Admin
    sub_admin, created = User.objects.get_or_create(
        username='subadmin',
        defaults={
            'email': 'subadmin@example.com',
            'is_staff': True,
        }
    )
    if created:
        sub_admin.set_password('subadmin123')
        sub_admin.save()
        print("✅ Sub-Admin 'subadmin' created.")
    else:
        print("ℹ️ Sub-Admin 'subadmin' already exists.")

    # 2. Create 7 Customers
    customer_names = [
        "Sherif Rosas", "Global Logistics", "Elite Distributors", 
        "Prime Retailers", "Next-Gen Solutions", "Urban Gadgets", "Skyline Trading"
    ]
    for i, name in enumerate(customer_names):
        customer, created = Customer.objects.get_or_create(
            name=name,
            defaults={
                'phone_number': f'+201{random.randint(0, 9)}{random.randint(1000000, 9999999)}',
                'email': f'contact_{i+1}@example.com',
                'address': f'{random.randint(1, 100)} Business St, Cairo, Egypt',
                'google_maps_url': f'https://maps.google.com/?q={random.uniform(30.0, 31.0)},{random.uniform(31.0, 32.0)}'
            }
        )
        if created:
            print(f"✅ Customer '{name}' created.")

    # 3. Create 7 Suppliers
    supplier_data = [
        {"name": "Tech Hub Egypt", "sector": "Technology", "rating": "4.8"},
        {"name": "Digital World", "sector": "Technology", "rating": "4.5"},
        {"name": "Silicon Valley Supplies", "sector": "Technology", "rating": "4.9"},
        {"name": "Modern Furniture Co", "sector": "Furniture", "rating": "4.2"},
        {"name": "Office Comforts", "sector": "Furniture", "rating": "4.0"},
        {"name": "Stationery Pro", "sector": "Office Supply", "rating": "4.3"},
        {"name": "General Mart", "sector": "General", "rating": "3.8"},
    ]
    
    for data in supplier_data:
        supplier, created = Supplier.objects.get_or_create(
            name=data["name"],
            defaults={
                'contact_person': f'Manager {data["name"]}',
                'email': f'sales@{"".join(data["name"].split()).lower()}.com',
                'phone_number': f'+202{random.randint(10000000, 99999999)}',
                'address': f'{random.randint(1, 50)} Industrial Ave, Giza',
                'google_maps_url': f'https://maps.google.com/?q={random.uniform(29.9, 30.1)},{random.uniform(31.1, 31.3)}',
                'rating': Decimal(data["rating"]),
                'is_active': True
            }
        )
        if created:
            print(f"✅ Supplier '{data['name']}' ({data['sector']}) created.")

    print("\n✨ Seeding completed successfully!")

if __name__ == "__main__":
    seed_data()
