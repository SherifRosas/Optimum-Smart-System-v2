#!/usr/bin/env python
"""
Comprehensive Test Scenario Script
Automates the full system workflow test from scratch

Usage:
    python comprehensive_test_scenario.py

This script will:
1. Verify clean database state
2. Create 1 subadmin, 7 customers, 7 suppliers
3. Create 7 orders (one per customer)
4. Simulate AI supplier selection
5. Track delivery and customer confirmation
"""

import os
import sys
import django
from datetime import datetime, timedelta
from decimal import Decimal

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth.models import User
from authentication.models import UserProfile
from customers.models import Customer
from suppliers.models import Supplier
from orders.models import Order
from product_requests.models import ProductRequest, SupplierOffer
from django.utils import timezone

# Color codes for terminal output
class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_header(text):
    print(f"\n{Colors.HEADER}{Colors.BOLD}{'='*60}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{text}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{'='*60}{Colors.ENDC}\n")

def print_step(step_num, text):
    print(f"{Colors.OKCYAN}[STEP {step_num}]{Colors.ENDC} {text}")

def print_success(text):
    print(f"{Colors.OKGREEN}✅ {text}{Colors.ENDC}")

def print_warning(text):
    print(f"{Colors.WARNING}⚠️  {text}{Colors.ENDC}")

def print_error(text):
    print(f"{Colors.FAIL}❌ {text}{Colors.ENDC}")

def verify_clean_state():
    """Phase 1: Verify database is clean"""
    print_header("PHASE 1: VERIFYING CLEAN DATABASE STATE")
    
    orders_count = Order.objects.count()
    customers_count = Customer.objects.count()
    suppliers_count = Supplier.objects.count()
    users_count = User.objects.count()
    
    print(f"Current state:")
    print(f"  Orders: {orders_count}")
    print(f"  Customers: {customers_count}")
    print(f"  Suppliers: {suppliers_count}")
    print(f"  Users: {users_count}")
    
    if orders_count == 0 and customers_count == 0 and suppliers_count == 0:
        print_success("Database is clean - ready for testing!")
        return True
    else:
        print_warning("Database is not clean. Some data exists.")
        response = input("Do you want to continue anyway? (yes/no): ")
        return response.lower() == 'yes'

def verify_master_admin():
    """Phase 2: Verify master admin exists"""
    print_header("PHASE 2: VERIFYING MASTER ADMIN")
    
    try:
        admin = User.objects.get(username='SherifRosas')
        profile = UserProfile.objects.get(user=admin)
        print_success(f"Master Admin Found: {admin.username}")
        print(f"  Email: {admin.email}")
        print(f"  Role: {profile.role}")
        print(f"  Status: {profile.status}")
        return True
    except User.DoesNotExist:
        print_error("Master Admin (SherifRosas) not found!")
        print("Please create master admin first using create_admin.py")
        return False

def create_subadmin():
    """Phase 3.1: Create 1 subadmin"""
    print_step(3.1, "Creating Subadmin")
    
    username = 'SubAdmin1'
    email = 'subadmin1@optimum.com'
    password = 'SubAdmin123!@#'
    
    user, created = User.objects.get_or_create(
        username=username,
        defaults={
            'email': email,
            'is_staff': True,
            'is_active': True
        }
    )
    
    if not created:
        user.email = email
        user.is_staff = True
        user.is_active = True
        user.save()
    
    user.set_password(password)
    user.save()
    
    profile, profile_created = UserProfile.objects.get_or_create(
        user=user,
        defaults={
            'role': UserProfile.RoleChoices.ADMIN,
            'status': UserProfile.StatusChoices.ACTIVE
        }
    )
    
    if not profile_created:
        profile.role = UserProfile.RoleChoices.ADMIN
        profile.status = UserProfile.StatusChoices.ACTIVE
        profile.save()
    
    print_success(f"Subadmin created: {username}")
    print(f"  Email: {email}")
    print(f"  Password: {password}")
    return user

def create_customers():
    """Phase 3.2: Create 7 customers"""
    print_step(3.2, "Creating 7 Customers")
    
    customers_data = [
        {
            'name': 'Ahmed Mohamed',
            'phone': '01001234567',
            'email': 'ahmed.mohamed@example.com',
            'address': '123 Main Street, Cairo, Egypt'
        },
        {
            'name': 'Fatima Ali',
            'phone': '01001234568',
            'email': 'fatima.ali@example.com',
            'address': '456 Park Avenue, Alexandria, Egypt'
        },
        {
            'name': 'Mohamed Hassan',
            'phone': '01001234569',
            'email': 'mohamed.hassan@example.com',
            'address': '789 Business District, Giza, Egypt'
        },
        {
            'name': 'Sara Ibrahim',
            'phone': '01001234570',
            'email': 'sara.ibrahim@example.com',
            'address': '321 Tech Park, New Cairo, Egypt'
        },
        {
            'name': 'Omar Khaled',
            'phone': '01001234571',
            'email': 'omar.khaled@example.com',
            'address': '654 Innovation Hub, Maadi, Egypt'
        },
        {
            'name': 'Layla Mahmoud',
            'phone': '01001234572',
            'email': 'layla.mahmoud@example.com',
            'address': '987 Commerce Center, Zamalek, Egypt'
        },
        {
            'name': 'Youssef Nour',
            'phone': '01001234573',
            'email': 'youssef.nour@example.com',
            'address': '147 Digital Plaza, Heliopolis, Egypt'
        }
    ]
    
    customers = []
    for data in customers_data:
        customer, created = Customer.objects.get_or_create(
            phone_number=data['phone'],
            defaults={
                'name': data['name'],
                'email': data['email'],
                'address': data['address']
            }
        )
        if not created:
            customer.name = data['name']
            customer.email = data['email']
            customer.address = data['address']
            customer.save()
        
        customers.append(customer)
        print_success(f"Customer created: {customer.name} ({customer.phone_number})")
    
    return customers

def create_suppliers():
    """Phase 3.3: Create 7 suppliers with user accounts"""
    print_step(3.3, "Creating 7 Suppliers with User Accounts")
    
    suppliers_data = [
        {
            'name': 'Tech Solutions Egypt',
            'contact': 'Amr Fahmy',
            'email': 'amr@techsolutions.eg',
            'phone': '01009876543',
            'address': '100 Tech Street, Cairo',
            'rating': Decimal('4.5'),
            'username': 'supplier1_tech',
            'password': 'Supplier123!@#'
        },
        {
            'name': 'Digital World Trading',
            'contact': 'Nada Samir',
            'email': 'nada@digitalworld.eg',
            'phone': '01009876544',
            'address': '200 Digital Avenue, Alexandria',
            'rating': Decimal('4.3'),
            'username': 'supplier2_digital',
            'password': 'Supplier123!@#'
        },
        {
            'name': 'Electronics Hub',
            'contact': 'Karim Adel',
            'email': 'karim@electronicshub.eg',
            'phone': '01009876545',
            'address': '300 Electronics Plaza, Giza',
            'rating': Decimal('4.7'),
            'username': 'supplier3_electronics',
            'password': 'Supplier123!@#'
        },
        {
            'name': 'Smart Devices Co.',
            'contact': 'Dina Magdy',
            'email': 'dina@smartdevices.eg',
            'phone': '01009876546',
            'address': '400 Smart City, New Cairo',
            'rating': Decimal('4.2'),
            'username': 'supplier4_smart',
            'password': 'Supplier123!@#'
        },
        {
            'name': 'Future Tech Ltd',
            'contact': 'Tamer Rizk',
            'email': 'tamer@futuretech.eg',
            'phone': '01009876547',
            'address': '500 Future Park, Maadi',
            'rating': Decimal('4.6'),
            'username': 'supplier5_future',
            'password': 'Supplier123!@#'
        },
        {
            'name': 'Innovation Systems',
            'contact': 'Rania Hany',
            'email': 'rania@innovationsys.eg',
            'phone': '01009876548',
            'address': '600 Innovation Center, Zamalek',
            'rating': Decimal('4.4'),
            'username': 'supplier6_innovation',
            'password': 'Supplier123!@#'
        },
        {
            'name': 'Premium Electronics',
            'contact': 'Hassan Mostafa',
            'email': 'hassan@premiumelec.eg',
            'phone': '01009876549',
            'address': '700 Premium District, Heliopolis',
            'rating': Decimal('4.8'),
            'username': 'supplier7_premium',
            'password': 'Supplier123!@#'
        }
    ]
    
    suppliers = []
    for data in suppliers_data:
        # Create or get supplier
        supplier, created = Supplier.objects.get_or_create(
            email=data['email'],
            defaults={
                'name': data['name'],
                'contact_person': data['contact'],
                'phone_number': data['phone'],
                'address': data['address'],
                'rating': data['rating'],
                'is_active': True
            }
        )
        if not created:
            supplier.name = data['name']
            supplier.contact_person = data['contact']
            supplier.phone_number = data['phone']
            supplier.address = data['address']
            supplier.rating = data['rating']
            supplier.is_active = True
            supplier.save()
        
        # Create user account for supplier
        user, user_created = User.objects.get_or_create(
            username=data['username'],
            defaults={
                'email': data['email'],
                'is_active': True
            }
        )
        if not user_created:
            user.email = data['email']
            user.is_active = True
            user.save()
        
        user.set_password(data['password'])
        user.save()
        
        # Create or update user profile
        profile, profile_created = UserProfile.objects.get_or_create(
            user=user,
            defaults={
                'role': UserProfile.RoleChoices.SUPPLIER,
                'status': UserProfile.StatusChoices.ACTIVE
            }
        )
        if not profile_created:
            profile.role = UserProfile.RoleChoices.SUPPLIER
            profile.status = UserProfile.StatusChoices.ACTIVE
            profile.save()
        
        # Store user in supplier object for later use
        supplier.user = user
        
        suppliers.append(supplier)
        print_success(f"Supplier created: {supplier.name} (Rating: {supplier.rating})")
        print(f"  User: {user.username} | Email: {user.email} | Password: {data['password']}")
    
    return suppliers

def create_orders(customers):
    """Phase 4: Create 7 orders (one per customer)"""
    print_header("PHASE 4: CREATING 7 ORDERS")
    
    orders_data = [
        {
            'product': 'iPhone 15 Pro Max 256GB',
            'quantity': 2,
            'delivery_date': timezone.now().date() + timedelta(days=7),
            'unit_price': Decimal('45000.00'),
            'notes': 'Urgent order, need premium packaging'
        },
        {
            'product': 'Samsung Galaxy S24 Ultra 512GB',
            'quantity': 1,
            'delivery_date': timezone.now().date() + timedelta(days=8),
            'unit_price': Decimal('38000.00'),
            'notes': 'Gift packaging required'
        },
        {
            'product': 'MacBook Pro 16" M3 Pro',
            'quantity': 1,
            'delivery_date': timezone.now().date() + timedelta(days=9),
            'unit_price': Decimal('85000.00'),
            'notes': 'Need for business presentation'
        },
        {
            'product': 'iPad Pro 12.9" 256GB',
            'quantity': 3,
            'delivery_date': timezone.now().date() + timedelta(days=10),
            'unit_price': Decimal('12000.00'),
            'notes': 'Bulk order for company'
        },
        {
            'product': 'Dell XPS 15 Laptop',
            'quantity': 2,
            'delivery_date': timezone.now().date() + timedelta(days=11),
            'unit_price': Decimal('55000.00'),
            'notes': 'High performance required'
        },
        {
            'product': 'Sony WH-1000XM5 Headphones',
            'quantity': 5,
            'delivery_date': timezone.now().date() + timedelta(days=12),
            'unit_price': Decimal('8500.00'),
            'notes': 'Corporate gift order'
        },
        {
            'product': 'Apple Watch Ultra 2',
            'quantity': 4,
            'delivery_date': timezone.now().date() + timedelta(days=13),
            'unit_price': Decimal('15000.00'),
            'notes': 'Team fitness tracking devices'
        }
    ]
    
    orders = []
    for i, data in enumerate(orders_data):
        customer = customers[i]
        total_amount = data['unit_price'] * data['quantity']
        
        order = Order.objects.create(
            customer=customer,
            product_type=data['product'],
            quantity=data['quantity'],
            unit_price=data['unit_price'],
            total_amount=total_amount,
            delivery_date=data['delivery_date'],
            status='pending',
            notes=data['notes']
        )
        
        orders.append(order)
        print_success(f"Order #{order.id} created: {data['product']} for {customer.name}")
    
    return orders

def create_product_requests(orders):
    """Phase 5: Create product requests for AI supplier selection"""
    print_header("PHASE 5: CREATING PRODUCT REQUESTS FOR AI SELECTION")
    
    # Get master admin as requester
    try:
        requester = User.objects.get(username='SherifRosas')
    except User.DoesNotExist:
        print_error("Master admin not found for product requests")
        return []
    
    product_requests = []
    for order in orders:
        request = ProductRequest.objects.create(
            requester=requester,
            title=f"{order.product_type} - Order #{order.id}",
            description=f"Order from {order.customer.name}. {order.notes}",
            quantity=order.quantity,
            delivery_deadline=order.delivery_date,
            status=ProductRequest.Status.NOTIFIED_SUPPLIERS,
            broadcasted_at=timezone.now()
        )
        
        product_requests.append(request)
        print_success(f"Product Request created: {request.title}")
    
    return product_requests

def create_supplier_offers(product_requests, suppliers):
    """Phase 6: Create supplier offers for all requests"""
    print_header("PHASE 6: CREATING SUPPLIER OFFERS")
    
    # Price variations for each supplier
    price_multipliers = {
        0: 1.0,      # Supplier 1: Base price
        1: 0.99,    # Supplier 2: 1% cheaper (best prices)
        2: 1.02,    # Supplier 3: 2% more expensive
        3: 1.05,    # Supplier 4: 5% more expensive
        4: 1.01,    # Supplier 5: 1% more expensive
        5: 1.03,    # Supplier 6: 3% more expensive
        6: 1.08,    # Supplier 7: 8% more expensive (premium)
    }
    
    # Base prices for each product type
    base_prices = {
        'iPhone 15 Pro Max 256GB': Decimal('45000.00'),
        'Samsung Galaxy S24 Ultra 512GB': Decimal('38000.00'),
        'MacBook Pro 16" M3 Pro': Decimal('85000.00'),
        'iPad Pro 12.9" 256GB': Decimal('12000.00'),
        'Dell XPS 15 Laptop': Decimal('55000.00'),
        'Sony WH-1000XM5 Headphones': Decimal('8500.00'),
        'Apple Watch Ultra 2': Decimal('15000.00'),
    }
    
    # Delivery date offsets (negative = earlier delivery)
    delivery_offsets = {
        0: 0,   # Supplier 1: On time
        1: -1,  # Supplier 2: 1 day earlier (best delivery)
        2: 1,   # Supplier 3: 1 day later
        3: 2,   # Supplier 4: 2 days later
        4: 0,   # Supplier 5: On time
        5: 1,   # Supplier 6: 1 day later
        6: 0,   # Supplier 7: On time
    }
    
    total_offers = 0
    for request in product_requests:
        # Extract product type from title
        product_type = request.title.split(' - ')[0]
        base_price = base_prices.get(product_type, Decimal('10000.00'))
        
        for i, supplier in enumerate(suppliers):
            # Calculate price with multiplier
            price = base_price * Decimal(str(price_multipliers[i]))
            
            # Calculate delivery date with offset
            delivery_date = request.delivery_deadline + timedelta(days=delivery_offsets[i])
            
            # Get supplier user
            supplier_user = supplier.user if hasattr(supplier, 'user') else None
            if not supplier_user:
                # Try to find user by email
                try:
                    supplier_user = User.objects.get(email=supplier.email)
                except User.DoesNotExist:
                    print_warning(f"User not found for supplier {supplier.name}, skipping offer")
                    continue
            
            # Create offer
            offer = SupplierOffer.objects.create(
                supplier=supplier_user,
                request=request,
                price=price,
                delivery_date=delivery_date,
                notes=f"Offer from {supplier.name}. Quality guaranteed.",
                status=SupplierOffer.Status.PENDING
            )
            
            total_offers += 1
            if total_offers % 7 == 0:
                print_success(f"Offers created for request: {request.title}")
    
    print_success(f"Total offers created: {total_offers} (7 orders × 7 suppliers)")
    return total_offers

def ai_evaluate_offers(product_requests):
    """Phase 7: AI evaluates and picks best offers"""
    print_header("PHASE 7: AI EVALUATING OFFERS")
    
    from ai_services import evaluate_supplier_offers
    
    recommended_count = 0
    for request in product_requests:
        # Evaluate offers using AI service
        evaluation = evaluate_supplier_offers(request)
        
        if evaluation.get('recommended_offer_id'):
            recommended_offer = SupplierOffer.objects.get(id=evaluation['recommended_offer_id'])
            
            # Update request with AI recommendation
            request.status = ProductRequest.Status.AI_RECOMMENDED
            request.recommended_supplier = recommended_offer.supplier
            request.ai_recommendation = evaluation
            request.save()
            
            # Mark offer as recommended
            recommended_offer.status = SupplierOffer.Status.RECOMMENDED
            recommended_offer.save()
            
            recommended_count += 1
            print_success(f"AI recommended: {recommended_offer.supplier.username if recommended_offer.supplier else 'N/A'} for {request.title}")
            print(f"  Price: {recommended_offer.price} EGP")
            print(f"  Delivery: {recommended_offer.delivery_date}")
            print(f"  Score: {recommended_offer.score:.3f}")
    
    print_success(f"AI recommendations completed: {recommended_count}/{len(product_requests)}")
    return recommended_count

def assign_orders_to_suppliers(orders, product_requests):
    """Phase 8-9: Assign orders to recommended suppliers"""
    print_header("PHASE 8-9: ASSIGNING ORDERS TO SUPPLIERS")
    
    assigned_count = 0
    for i, request in enumerate(product_requests):
        if request.recommended_supplier:
            # Find corresponding supplier by user email
            supplier_user = request.recommended_supplier
            try:
                supplier = Supplier.objects.filter(email=supplier_user.email).first()
                if supplier and i < len(orders):
                    order = orders[i]
                    order.supplier = supplier
                    order.status = 'in-preparation'
                    order.save()
                    assigned_count += 1
                    print_success(f"Order #{order.id} assigned to {supplier.name}")
                else:
                    print_warning(f"Supplier not found for user {supplier_user.email}")
            except Exception as e:
                print_warning(f"Could not assign order {orders[i].id if i < len(orders) else 'N/A'}: {e}")
    
    return assigned_count

def final_verification():
    """Final verification of test results"""
    print_header("FINAL VERIFICATION")
    
    orders_count = Order.objects.count()
    customers_count = Customer.objects.count()
    suppliers_count = Supplier.objects.count()
    requests_count = ProductRequest.objects.count()
    offers_count = SupplierOffer.objects.count()
    delivered_count = Order.objects.filter(status='delivered').count()
    in_prep_count = Order.objects.filter(status='in-preparation').count()
    
    print(f"{Colors.BOLD}System State:{Colors.ENDC}")
    print(f"  ✅ Customers: {customers_count} (Expected: 7)")
    print(f"  ✅ Suppliers: {suppliers_count} (Expected: 7)")
    print(f"  ✅ Orders: {orders_count} (Expected: 7)")
    print(f"  ✅ Product Requests: {requests_count} (Expected: 7)")
    print(f"  ✅ Supplier Offers: {offers_count} (Expected: 49)")
    print(f"  ✅ Orders in Preparation: {in_prep_count}")
    print(f"  ✅ Orders Delivered: {delivered_count}")
    
    print(f"\n{Colors.BOLD}Test Status:{Colors.ENDC}")
    if customers_count == 7 and suppliers_count == 7 and orders_count == 7:
        print_success("All entities created successfully!")
    else:
        print_warning("Some entities missing - check counts above")
    
    if offers_count == 49:
        print_success("All supplier offers created!")
    else:
        print_warning(f"Expected 49 offers, got {offers_count}")

def main():
    """Main test execution"""
    print_header("COMPREHENSIVE TEST SCENARIO - AUTOMATED SCRIPT")
    print("This script will test the complete system workflow")
    print("Starting in 3 seconds...")
    import time
    time.sleep(3)
    
    # Phase 1: Verify clean state
    if not verify_clean_state():
        print_error("Test aborted - database not clean")
        return
    
    # Phase 2: Verify master admin
    if not verify_master_admin():
        print_error("Test aborted - master admin not found")
        return
    
    # Phase 3: Create users
    print_header("PHASE 3: CREATING USERS")
    subadmin = create_subadmin()
    customers = create_customers()
    suppliers = create_suppliers()
    
    # Phase 4: Create orders
    orders = create_orders(customers)
    
    # Phase 5: Create product requests
    product_requests = create_product_requests(orders)
    
    # Phase 6: Create supplier offers
    create_supplier_offers(product_requests, suppliers)
    
    # Phase 7: AI evaluation
    ai_evaluate_offers(product_requests)
    
    # Phase 8-9: Assign orders
    assign_orders_to_suppliers(orders, product_requests)
    
    # Final verification
    final_verification()
    
    print_header("TEST SCENARIO COMPLETED")
    print_success("Automated test phases completed!")
    print_warning("Next steps (manual):")
    print("  1. Login as suppliers to confirm orders")
    print("  2. Update order statuses through delivery")
    print("  3. Have customers confirm receipt")
    print("\nSee COMPREHENSIVE_TEST_SCENARIO.md for manual steps")

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nTest interrupted by user")
        sys.exit(1)
    except Exception as e:
        print_error(f"Test failed with error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
