#!/usr/bin/env python
"""Quick script to show test results"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from orders.models import Order
from product_requests.models import ProductRequest

print("=" * 60)
print("TEST SCENARIO RESULTS")
print("=" * 60)

# Show new test orders (IDs 11-17)
orders = Order.objects.filter(id__gte=11).order_by('id')[:7]
print(f"\nNEW TEST ORDERS CREATED ({orders.count()}):")
for order in orders:
    supplier_name = order.supplier.name if order.supplier else "Not assigned"
    print(f"  Order #{order.id}: {order.product_type}")
    print(f"    Customer: {order.customer.name}")
    print(f"    Status: {order.status}")
    print(f"    Supplier: {supplier_name}")
    print()

# Show AI recommendations
requests = ProductRequest.objects.filter(status='ai_recommended')
print(f"\nAI RECOMMENDATIONS ({requests.count()}):")
for req in requests:
    supplier_name = req.recommended_supplier.username if req.recommended_supplier else "None"
    print(f"  {req.title}")
    print(f"    Recommended Supplier: {supplier_name}")
    print()

print("=" * 60)
