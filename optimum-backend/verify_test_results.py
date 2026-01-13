#!/usr/bin/env python
"""
Quick verification script for test results
Run this after automated test to verify everything was created correctly
"""

import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from orders.models import Order
from customers.models import Customer
from suppliers.models import Supplier
from product_requests.models import ProductRequest, SupplierOffer
from django.contrib.auth.models import User
from authentication.models import UserProfile

print("=" * 60)
print("TEST RESULTS VERIFICATION")
print("=" * 60)

# Counts
users_count = User.objects.count()
customers_count = Customer.objects.count()
suppliers_count = Supplier.objects.count()
orders_count = Order.objects.count()
requests_count = ProductRequest.objects.count()
offers_count = SupplierOffer.objects.count()

# Status counts
pending_orders = Order.objects.filter(status='pending').count()
in_prep_orders = Order.objects.filter(status='in-preparation').count()
delivered_orders = Order.objects.filter(status='delivered').count()
recommended_requests = ProductRequest.objects.filter(status='ai_recommended').count()

print(f"\nENTITIES CREATED:")
print(f"  Users: {users_count}")
print(f"  Customers: {customers_count} (Expected: 7)")
print(f"  Suppliers: {suppliers_count} (Expected: 7)")
print(f"  Orders: {orders_count} (Expected: 7)")
print(f"  Product Requests: {requests_count} (Expected: 7)")
print(f"  Supplier Offers: {offers_count} (Expected: 49)")

print(f"\nORDER STATUS:")
print(f"  Pending: {pending_orders}")
print(f"  In Preparation: {in_prep_orders}")
print(f"  Delivered: {delivered_orders}")

print(f"\nAI RECOMMENDATIONS:")
print(f"  AI Recommended Requests: {recommended_requests} (Expected: 7)")

print(f"\nVERIFICATION:")
all_good = True

if customers_count == 7:
    print("  [OK] Customers: CORRECT")
else:
    print(f"  [ERROR] Customers: Expected 7, got {customers_count}")
    all_good = False

if suppliers_count == 7:
    print("  [OK] Suppliers: CORRECT")
else:
    print(f"  [ERROR] Suppliers: Expected 7, got {suppliers_count}")
    all_good = False

if orders_count == 7:
    print("  [OK] Orders: CORRECT")
else:
    print(f"  [ERROR] Orders: Expected 7, got {orders_count}")
    all_good = False

if offers_count == 49:
    print("  [OK] Supplier Offers: CORRECT")
else:
    print(f"  [ERROR] Supplier Offers: Expected 49, got {offers_count}")
    all_good = False

if recommended_requests == 7:
    print("  [OK] AI Recommendations: CORRECT")
else:
    print(f"  [WARNING] AI Recommendations: Expected 7, got {recommended_requests}")

print("\n" + "=" * 60)
if all_good:
    print("[SUCCESS] ALL CHECKS PASSED!")
else:
    print("[WARNING] SOME CHECKS FAILED - Review above")
print("=" * 60)

# Show sample data
if orders_count > 0:
    print("\nSAMPLE ORDER:")
    order = Order.objects.first()
    print(f"  ID: {order.id}")
    print(f"  Customer: {order.customer.name}")
    print(f"  Product: {order.product_type}")
    print(f"  Quantity: {order.quantity}")
    print(f"  Status: {order.status}")
    if order.supplier:
        print(f"  Supplier: {order.supplier.name}")

if recommended_requests > 0:
    print("\nSAMPLE AI RECOMMENDATION:")
    request = ProductRequest.objects.filter(status='ai_recommended').first()
    if request:
        print(f"  Request: {request.title}")
        if request.recommended_supplier:
            print(f"  Recommended Supplier: {request.recommended_supplier.username}")
        if request.ai_recommendation:
            print(f"  AI Score: {request.ai_recommendation.get('explanation', 'N/A')}")

print("\n")
