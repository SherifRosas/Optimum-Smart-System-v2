import os
import django
from django.utils.text import slugify
from django.db import transaction

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth.models import User
from suppliers.models import Supplier
from authentication.models import UserProfile
from orders.models import Order

password = "password123"

print(f"{'SUPPLIER NAME':<30} | {'USERNAME':<20} | {'PASSWORD':<15} | {'ASSIGNED ORDERS'}")
print("-" * 85)

with transaction.atomic():
    suppliers = Supplier.objects.all()[:7] # Get first 7 suppliers
    unassigned_orders = list(Order.objects.filter(supplier__isnull=True, status='pending'))
    
    for i, supplier in enumerate(suppliers):
        # 1. Create/Get User
        username = slugify(supplier.name).replace("-", "")
        email = f"{username}@example.com"
        
        user, created = User.objects.get_or_create(username=username, defaults={
            'email': email,
            'first_name': supplier.name.split()[0],
            'last_name': " ".join(supplier.name.split()[1:]) or "Supplier"
        })
        
        if created:
            user.set_password(password)
            user.save()
            
            # Create Profile
            UserProfile.objects.create(
                user=user,
                role='SUPPLIER',
                company_name=supplier.name,
                status='ACTIVE'
            )
        
        # 2. Assign Orders (Round-robin distribution of unassigned orders)
        # If we have unassigned orders, assign one to this supplier
        assigned_count = 0
        if unassigned_orders:
            # Simple logic: assign 1 order to each supplier until run out
            # Or if we want to assign all 5 unassigned orders:
            # Let's assign unassigned_orders[i % len(unassigned_orders)] ??
            # Better: just pop one if available
            order_to_assign = unassigned_orders.pop(0) if unassigned_orders else None
            
            if order_to_assign:
                order_to_assign.supplier = supplier
                order_to_assign.save()
                assigned_count += 1
                
                # Also create a System message
                from orders.models import OrderMessage
                OrderMessage.objects.create(
                    order=order_to_assign,
                    message_type='system',
                    content=f"Order automatically assigned to {supplier.name} for testing."
                )

        print(f"{supplier.name:<30} | {username:<20} | {password:<15} | {assigned_count + supplier.orders.count()}")

print("-" * 85)
print("✅ Supplier accounts ready and orders assigned!")
