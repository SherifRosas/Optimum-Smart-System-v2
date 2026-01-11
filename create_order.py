#!/usr/bin/env python
"""
Script to create a new order in Optimum Smart System
Usage: python create_order.py
"""

import requests
import json
import sys
from datetime import datetime, timedelta

# API Configuration
BASE_URL = "http://localhost:8000/api"
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin123"

def login():
    """Login and get access token"""
    print("=" * 60)
    print("Logging in...")
    print("=" * 60)
    
    login_data = {
        "username": ADMIN_USERNAME,
        "password": ADMIN_PASSWORD
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/auth/login/",
            json=login_data,
            headers={"Content-Type": "application/json"}
        )
        
        if response.status_code == 200:
            data = response.json()
            if 'tokens' in data:
                access_token = data['tokens']['access']
                print(f"[OK] Login successful!")
                return access_token
            else:
                print(f"[ERROR] Unexpected response format: {data}")
                return None
        else:
            print(f"[ERROR] Login failed: {response.status_code}")
            print(f"Response: {response.text}")
            return None
    except requests.exceptions.ConnectionError:
        print("[ERROR] Cannot connect to backend. Is the server running on http://localhost:8000?")
        return None
    except Exception as e:
        print(f"[ERROR] Login error: {e}")
        return None

def create_order(access_token, order_data=None):
    """Create a new order"""
    print("\n" + "=" * 60)
    print("Creating New Order")
    print("=" * 60)
    
    # Default order data if not provided
    if order_data is None:
        # Default delivery date: 7 days from now
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
    
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    print(f"\nOrder Data:")
    print(json.dumps(order_data, indent=2))
    
    try:
        response = requests.post(
            f"{BASE_URL}/orders/",
            json=order_data,
            headers=headers
        )
        
        print(f"\nStatus Code: {response.status_code}")
        
        if response.status_code == 201:
            order = response.json()
            print("\n[OK] Order created successfully!")
            print("\n" + "-" * 60)
            print("Order Details:")
            print("-" * 60)
            print(f"Order ID: {order.get('id')}")
            print(f"Customer: {order.get('customer', {}).get('name', 'N/A')}")
            print(f"Phone: {order.get('customer', {}).get('phone_number', 'N/A')}")
            print(f"Product Type: {order.get('product_type')}")
            print(f"Quantity: {order.get('quantity')}")
            print(f"Unit Price: ${order.get('unit_price'):,.2f}")
            print(f"Total Amount: ${order.get('total_amount'):,.2f}")
            print(f"Delivery Date: {order.get('delivery_date')}")
            print(f"Status: {order.get('status')}")
            if order.get('supplier'):
                print(f"Supplier: {order.get('supplier', {}).get('name', 'N/A')}")
            print("-" * 60)
            return order
        else:
            print(f"\n[ERROR] Order creation failed!")
            print(f"Response: {response.text}")
            try:
                error_data = response.json()
                print(f"\nError Details:")
                print(json.dumps(error_data, indent=2))
            except:
                pass
            return None
            
    except Exception as e:
        print(f"\n[ERROR] Order creation error: {e}")
        return None

def create_custom_order():
    """Interactive function to create order with custom data"""
    print("\n" + "=" * 60)
    print("Create Custom Order")
    print("=" * 60)
    
    # Get order details from user
    print("\nEnter order details (press Enter for defaults):")
    
    customer_name = input("Customer Name [John Doe]: ").strip() or "John Doe"
    phone_number = input("Phone Number [+1234567890]: ").strip() or "+1234567890"
    product_type = input("Product Type [Laptop]: ").strip() or "Laptop"
    
    while True:
        quantity_input = input("Quantity [2]: ").strip() or "2"
        try:
            quantity = int(quantity_input)
            if quantity > 0:
                break
            else:
                print("Quantity must be greater than 0")
        except ValueError:
            print("Please enter a valid number")
    
    while True:
        unit_price_input = input("Unit Price [10000]: ").strip() or "10000"
        try:
            unit_price = float(unit_price_input)
            if unit_price > 0:
                break
            else:
                print("Unit price must be greater than 0")
        except ValueError:
            print("Please enter a valid number")
    
    # Delivery date: default to 7 days from now
    default_date = (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d")
    delivery_date = input(f"Delivery Date (YYYY-MM-DD) [{default_date}]: ").strip() or default_date
    
    order_data = {
        "customer": {
            "name": customer_name,
            "phone_number": phone_number
        },
        "product_type": product_type,
        "quantity": quantity,
        "unit_price": unit_price,
        "delivery_date": delivery_date
    }
    
    return order_data

def main():
    """Main function"""
    print("\n" + "=" * 60)
    print("Optimum Smart System - Order Creation Script")
    print("=" * 60)
    
    # Login
    access_token = login()
    if not access_token:
        print("\n[ERROR] Failed to login. Exiting...")
        sys.exit(1)
    
    # Ask user if they want to create custom order or use defaults
    print("\n" + "=" * 60)
    print("Order Creation Options")
    print("=" * 60)
    print("1. Create order with default values")
    print("2. Create order with custom values")
    print("3. Exit")
    
    choice = input("\nEnter your choice (1-3): ").strip()
    
    if choice == "1":
        # Create order with defaults
        order = create_order(access_token)
    elif choice == "2":
        # Create custom order
        order_data = create_custom_order()
        order = create_order(access_token, order_data)
    elif choice == "3":
        print("\nExiting...")
        sys.exit(0)
    else:
        print("\n[ERROR] Invalid choice. Exiting...")
        sys.exit(1)
    
    if order:
        print("\n" + "=" * 60)
        print("[SUCCESS] Order creation completed!")
        print("=" * 60)
        print(f"\nYou can view this order in:")
        print(f"- Frontend: http://localhost:3000/dashboard (or http://localhost:3001)")
        print(f"- Django Admin: http://localhost:8000/admin/orders/order/")
        print("=" * 60)
    else:
        print("\n" + "=" * 60)
        print("[ERROR] Order creation failed!")
        print("=" * 60)

if __name__ == "__main__":
    main()
