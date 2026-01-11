#!/usr/bin/env python
"""
Test script to verify order creation API works correctly
"""
import requests
import json

# API endpoint
BASE_URL = "http://localhost:8000/api"

def test_order_creation():
    print("=" * 60)
    print("Testing Order Creation API")
    print("=" * 60)
    
    # Step 1: Login to get token
    print("\n1. Logging in as admin...")
    login_data = {
        "username": "admin",
        "password": "admin123"
    }
    
    try:
        login_response = requests.post(
            f"{BASE_URL}/auth/login/",
            json=login_data,
            headers={"Content-Type": "application/json"}
        )
        
        if login_response.status_code == 200:
            response_data = login_response.json()
            # Check different possible response formats
            if 'tokens' in response_data:
                access_token = response_data['tokens'].get('access')
            elif 'access' in response_data:
                access_token = response_data.get('access')
            elif 'access_token' in response_data:
                access_token = response_data.get('access_token')
            else:
                print(f"[ERROR] Unexpected login response format: {response_data}")
                return
            
            if not access_token:
                print(f"[ERROR] No access token in response: {response_data}")
                return
                
            print(f"[OK] Login successful! Token: {access_token[:20]}...")
        else:
            print(f"[ERROR] Login failed: {login_response.status_code}")
            print(f"Response: {login_response.text}")
            return
    except requests.exceptions.ConnectionError:
        print("[ERROR] Cannot connect to backend. Is the server running on http://localhost:8000?")
        return
    except Exception as e:
        print(f"[ERROR] Login error: {e}")
        return
    
    # Step 2: Create an order
    print("\n2. Creating a test order...")
    order_data = {
        "customer": {
            "name": "Test Customer",
            "phone_number": "+1234567890"
        },
        "product_type": "Laptop",
        "quantity": 2,
        "unit_price": 10000,
        "delivery_date": "2026-02-01"
    }
    
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    try:
        order_response = requests.post(
            f"{BASE_URL}/orders/",
            json=order_data,
            headers=headers
        )
        
        print(f"Status Code: {order_response.status_code}")
        print(f"Response Headers: {dict(order_response.headers)}")
        
        if order_response.status_code == 201:
            order = order_response.json()
            print("[OK] Order created successfully!")
            print(f"Order ID: {order.get('id')}")
            print(f"Customer: {order.get('customer', {}).get('name', 'N/A')}")
            print(f"Product: {order.get('product_type')}")
            print(f"Quantity: {order.get('quantity')}")
            print(f"Status: {order.get('status')}")
            return True
        else:
            print(f"[ERROR] Order creation failed!")
            print(f"Response: {order_response.text}")
            try:
                error_data = order_response.json()
                print(f"Error details: {json.dumps(error_data, indent=2)}")
            except:
                print(f"Raw response: {order_response.text}")
            return False
            
    except Exception as e:
        print(f"[ERROR] Order creation error: {e}")
        return False

if __name__ == "__main__":
    test_order_creation()
