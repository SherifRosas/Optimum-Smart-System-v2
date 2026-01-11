#!/usr/bin/env python
"""
Simple script to quickly create a new order
Usage: python create_order_simple.py
"""

import requests
import json
from datetime import datetime, timedelta

BASE_URL = "http://localhost:8000/api"

# Login
print("Logging in...")
login_response = requests.post(
    f"{BASE_URL}/auth/login/",
    json={"username": "admin", "password": "admin123"},
    headers={"Content-Type": "application/json"}
)

if login_response.status_code != 200:
    print(f"Login failed: {login_response.text}")
    exit(1)

access_token = login_response.json()['tokens']['access']
print("Login successful!")

# Create order
delivery_date = (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d")

order_data = {
    "customer": {
        "name": "John Doe",
        "phone_number": "+1234567890"
    },
    "product_type": "Laptop",
    "quantity": 2,
    "unit_price": 10000,
    "delivery_date": delivery_date
}

print(f"\nCreating order...")
print(json.dumps(order_data, indent=2))

response = requests.post(
    f"{BASE_URL}/orders/",
    json=order_data,
    headers={
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
)

if response.status_code == 201:
    order = response.json()
    print("\n[OK] Order created successfully!")
    print(f"Order ID: {order.get('id')}")
    print(f"Customer: {order.get('customer', {}).get('name')}")
    print(f"Product: {order.get('product_type')}")
    print(f"Quantity: {order.get('quantity')}")
    total = order.get('total_amount')
    if total:
        try:
            total_float = float(total)
            print(f"Total: ${total_float:,.2f}")
        except:
            print(f"Total: ${total}")
    print(f"Status: {order.get('status')}")
else:
    print(f"\n[ERROR] Order creation failed!")
    print(f"Status: {response.status_code}")
    print(f"Response: {response.text}")
