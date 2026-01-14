#!/usr/bin/env python
"""
Comprehensive Test Scenario - CORRECT WORKFLOW
===============================================

This script follows the correct workflow:
1. Admin logs in and creates user accounts (customers, suppliers, subadmin)
2. Customers login with their accounts and create orders
3. AI analyzes orders and sends to suppliers
4. Suppliers login and submit offers
5. AI picks best offer and assigns order
6. Supplier confirms order
7. Track delivery
8. Customer confirms receipt

Run: python comprehensive_test_scenario_correct.py
"""

import os
import sys
import django
from decimal import Decimal
from datetime import datetime, timedelta

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth.models import User
from django.db import transaction
from authentication.models import UserProfile
from customers.models import Customer
from suppliers.models import Supplier
from orders.models import Order
from product_requests.models import ProductRequest, SupplierOffer
from ai_services import OrderAnalysisAI

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
    """Print section header"""
    print(f"\n{Colors.HEADER}{Colors.BOLD}{'=' * 60}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{text}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{'=' * 60}{Colors.ENDC}\n")

def print_step(phase, text):
    """Print step header"""
    print(f"{Colors.OKCYAN}[STEP {phase}]{Colors.ENDC} {text}")

def print_success(text):
    """Print success message"""
    print(f"{Colors.OKGREEN}[OK] {text}{Colors.ENDC}")

def print_warning(text):
    """Print warning message"""
    print(f"{Colors.WARNING}[WARNING] {text}{Colors.ENDC}")

def print_error(text):
    """Print error message"""
    print(f"{Colors.FAIL}[ERROR] {text}{Colors.ENDC}")

def print_info(text):
    """Print info message"""
    print(f"{Colors.OKBLUE}[INFO] {text}{Colors.ENDC}")

def verify_master_admin():
    """Verify or create master admin"""
    print_header("PHASE 1: VERIFYING MASTER ADMIN")
    
    try:
        admin = User.objects.get(username='SherifRosas')
        profile = UserProfile.objects.get(user=admin)
        print_success(f"Master Admin Found: {admin.username}")
        print(f"  Email: {admin.email}")
        print(f"  Role: {profile.role}")
        return admin
    except User.DoesNotExist:
        print_warning("Master Admin (SherifRosas) not found!")
        print("Creating master admin...")
        
        admin = User.objects.create_user(
            username='SherifRosas',
            email='sherifrosas.ai@gmail.com',
            password='01224576070#MoonLand',
            is_staff=True,
            is_superuser=True,
            is_active=True
        )
        
        profile, created = UserProfile.objects.get_or_create(
            user=admin,
            defaults={
                'role': UserProfile.RoleChoices.ADMIN,
                'status': UserProfile.StatusChoices.ACTIVE
            }
        )
        
        if not created:
            profile.role = UserProfile.RoleChoices.ADMIN
            profile.status = UserProfile.StatusChoices.ACTIVE
            profile.save()
        
        print_success(f"Master Admin Created: {admin.username}")
        print(f"  Email: {admin.email}")
        print(f"  Password: 01224576070#MoonLand")
        return admin
    except Exception as e:
        print_error(f"Error with master admin: {e}")
        return None

def admin_create_subadmin(admin_user):
    """Admin creates subadmin account"""
    print_step("2.1", "Admin Creating Subadmin Account")
    
    username = 'SubAdmin1'
    email = 'subadmin1@optimum.com'
    password = 'SubAdmin123!@#'
    
    user, created = User.objects.get_or_create(
        username=username,
        defaults={
            'email': email,
            'is_active': True
        }
    )
    
    if not created:
        user.email = email
        user.is_active = True
        user.save()
    
    user.set_password(password)
    user.save()
    
    profile, profile_created = UserProfile.objects.get_or_create(
        user=user,
        defaults={
            'role': UserProfile.RoleChoices.SUB_ADMIN,
            'status': UserProfile.StatusChoices.ACTIVE,
            'created_by': admin_user
        }
    )
    
    if not profile_created:
        profile.role = UserProfile.RoleChoices.SUB_ADMIN
        profile.status = UserProfile.StatusChoices.ACTIVE
        profile.created_by = admin_user
        profile.save()
    
    print_success(f"Subadmin account created: {username}")
    print(f"  Email: {email}")
    print(f"  Password: {password}")
    return user

def admin_create_customer_accounts(admin_user):
    """Admin creates 7 customer user accounts"""
    print_step("2.2", "Admin Creating 7 Customer Accounts")
    
    customers_data = [
        {
            'username': 'customer1_ahmed',
            'email': 'ahmed.mohamed@example.com',
            'password': 'Customer123!@#',
            'name': 'Ahmed Mohamed',
            'phone': '01001234567',
            'address': '123 Main Street, Cairo, Egypt'
        },
        {
            'username': 'customer2_fatima',
            'email': 'fatima.ali@example.com',
            'password': 'Customer123!@#',
            'name': 'Fatima Ali',
            'phone': '01001234568',
            'address': '456 Park Avenue, Alexandria, Egypt'
        },
        {
            'username': 'customer3_mohamed',
            'email': 'mohamed.hassan@example.com',
            'password': 'Customer123!@#',
            'name': 'Mohamed Hassan',
            'phone': '01001234569',
            'address': '789 Business District, Giza, Egypt'
        },
        {
            'username': 'customer4_sara',
            'email': 'sara.ibrahim@example.com',
            'password': 'Customer123!@#',
            'name': 'Sara Ibrahim',
            'phone': '01001234570',
            'address': '321 Tech Park, New Cairo, Egypt'
        },
        {
            'username': 'customer5_omar',
            'email': 'omar.khaled@example.com',
            'password': 'Customer123!@#',
            'name': 'Omar Khaled',
            'phone': '01001234571',
            'address': '654 Innovation Hub, Maadi, Egypt'
        },
        {
            'username': 'customer6_layla',
            'email': 'layla.mahmoud@example.com',
            'password': 'Customer123!@#',
            'name': 'Layla Mahmoud',
            'phone': '01001234572',
            'address': '987 Commerce Center, Zamalek, Egypt'
        },
        {
            'username': 'customer7_youssef',
            'email': 'youssef.nour@example.com',
            'password': 'Customer123!@#',
            'name': 'Youssef Nour',
            'phone': '01001234573',
            'address': '147 Digital Plaza, Heliopolis, Egypt'
        }
    ]
    
    customer_users = []
    for data in customers_data:
        # Create User account (as admin would)
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
        
        # Create UserProfile with PRODUCT_REQUESTER role
        profile, profile_created = UserProfile.objects.get_or_create(
            user=user,
            defaults={
                'role': UserProfile.RoleChoices.PRODUCT_REQUESTER,
                'status': UserProfile.StatusChoices.ACTIVE,
                'phone_number': data['phone'],
                'created_by': admin_user
            }
        )
        
        if not profile_created:
            profile.role = UserProfile.RoleChoices.PRODUCT_REQUESTER
            profile.status = UserProfile.StatusChoices.ACTIVE
            profile.phone_number = data['phone']
            profile.created_by = admin_user
            profile.save()
        
        # Create Customer record linked to user
        customer, customer_created = Customer.objects.get_or_create(
            phone_number=data['phone'],
            defaults={
                'name': data['name'],
                'email': data['email'],
                'address': data['address']
            }
        )
        
        if not customer_created:
            customer.name = data['name']
            customer.email = data['email']
            customer.address = data['address']
            customer.save()
        
        customer_users.append({
            'user': user,
            'customer': customer
        })
        
        print_success(f"Customer account created: {data['name']} ({data['username']})")
        print(f"  Email: {data['email']}")
        print(f"  Password: {data['password']}")
    
    return customer_users

def admin_create_supplier_accounts(admin_user):
    """Admin creates 7 supplier user accounts"""
    print_step("2.3", "Admin Creating 7 Supplier Accounts")
    
    suppliers_data = [
        {
            'username': 'supplier1_tech',
            'email': 'amr@techsolutions.eg',
            'password': 'Supplier123!@#',
            'name': 'Tech Solutions Egypt',
            'contact': 'Amr Fahmy',
            'phone': '01009876543',
            'address': '100 Tech Street, Cairo',
            'rating': Decimal('4.5')
        },
        {
            'username': 'supplier2_digital',
            'email': 'nada@digitalworld.eg',
            'password': 'Supplier123!@#',
            'name': 'Digital World Trading',
            'contact': 'Nada Samir',
            'phone': '01009876544',
            'address': '200 Digital Avenue, Alexandria',
            'rating': Decimal('4.3')
        },
        {
            'username': 'supplier3_electronics',
            'email': 'karim@electronicshub.eg',
            'password': 'Supplier123!@#',
            'name': 'Electronics Hub',
            'contact': 'Karim Adel',
            'phone': '01009876545',
            'address': '300 Electronics Plaza, Giza',
            'rating': Decimal('4.7')
        },
        {
            'username': 'supplier4_smart',
            'email': 'dina@smartdevices.eg',
            'password': 'Supplier123!@#',
            'name': 'Smart Devices Co.',
            'contact': 'Dina Magdy',
            'phone': '01009876546',
            'address': '400 Smart City, New Cairo',
            'rating': Decimal('4.2')
        },
        {
            'username': 'supplier5_future',
            'email': 'tamer@futuretech.eg',
            'password': 'Supplier123!@#',
            'name': 'Future Tech Ltd',
            'contact': 'Tamer Youssef',
            'phone': '01009876547',
            'address': '500 Future Road, 6th October',
            'rating': Decimal('4.6')
        },
        {
            'username': 'supplier6_innovation',
            'email': 'rania@innovationsys.eg',
            'password': 'Supplier123!@#',
            'name': 'Innovation Systems',
            'contact': 'Rania Mostafa',
            'phone': '01009876548',
            'address': '600 Innovation Drive, Nasr City',
            'rating': Decimal('4.4')
        },
        {
            'username': 'supplier7_premium',
            'email': 'hassan@premiumelec.eg',
            'password': 'Supplier123!@#',
            'name': 'Premium Electronics',
            'contact': 'Hassan Reda',
            'phone': '01009876549',
            'address': '700 Premium Boulevard, Dokki',
            'rating': Decimal('4.8')
        }
    ]
    
    supplier_users = []
    for data in suppliers_data:
        # Create User account (as admin would)
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
        
        # Create UserProfile with SUPPLIER role
        profile, profile_created = UserProfile.objects.get_or_create(
            user=user,
            defaults={
                'role': UserProfile.RoleChoices.SUPPLIER,
                'status': UserProfile.StatusChoices.ACTIVE,
                'phone_number': data['phone'],
                'company_name': data['name'],
                'created_by': admin_user
            }
        )
        
        if not profile_created:
            profile.role = UserProfile.RoleChoices.SUPPLIER
            profile.status = UserProfile.StatusChoices.ACTIVE
            profile.phone_number = data['phone']
            profile.company_name = data['name']
            profile.created_by = admin_user
            profile.save()
        
        # Create Supplier record linked to user
        supplier, supplier_created = Supplier.objects.get_or_create(
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
        
        if not supplier_created:
            supplier.name = data['name']
            supplier.contact_person = data['contact']
            supplier.phone_number = data['phone']
            supplier.address = data['address']
            supplier.rating = data['rating']
            supplier.is_active = True
            supplier.save()
        
        supplier_users.append({
            'user': user,
            'supplier': supplier
        })
        
        print_success(f"Supplier account created: {data['name']} ({data['username']})")
        print(f"  Email: {data['email']}")
        print(f"  Password: {data['password']}")
    
    return supplier_users

def customer_create_orders(customer_users):
    """Customers login and create orders (simulated)"""
    print_header("PHASE 3: CUSTOMERS CREATING ORDERS")
    print_info("Simulating customers logging in and creating orders...")
    
    products = [
        {'type': 'iPhone 15 Pro Max 256GB', 'quantity': 1, 'unit_price': Decimal('45000.00')},
        {'type': 'Samsung Galaxy S24 Ultra 512GB', 'quantity': 1, 'unit_price': Decimal('38000.00')},
        {'type': 'MacBook Pro 16" M3 Pro', 'quantity': 1, 'unit_price': Decimal('85000.00')},
        {'type': 'iPad Pro 12.9" 256GB', 'quantity': 1, 'unit_price': Decimal('12000.00')},
        {'type': 'Dell XPS 15 Laptop', 'quantity': 1, 'unit_price': Decimal('55000.00')},
        {'type': 'Sony WH-1000XM5 Headphones', 'quantity': 2, 'unit_price': Decimal('8500.00')},
        {'type': 'Apple Watch Ultra 2', 'quantity': 1, 'unit_price': Decimal('15000.00')}
    ]
    
    orders = []
    for i, customer_data in enumerate(customer_users):
        customer = customer_data['customer']
        product = products[i]
        
        order = Order.objects.create(
            customer=customer,
            product_type=product['type'],
            quantity=product['quantity'],
            unit_price=product['unit_price'],
            delivery_date=datetime.now().date() + timedelta(days=7),
            status='pending'
        )
        
        orders.append(order)
        print_success(f"Order #{order.id} created by {customer.name}: {product['type']}")
        print(f"  Customer: {customer.name} ({customer_data['user'].username})")
        print(f"  Product: {product['type']}")
        print(f"  Quantity: {product['quantity']}")
        print(f"  Total: {order.total_amount} EGP")
    
    return orders

def ai_analyze_and_send_to_suppliers(orders, customer_users, supplier_users):
    """AI analyzes orders and sends to all suppliers"""
    print_header("PHASE 4: AI ANALYZING ORDERS & SENDING TO SUPPLIERS")
    
    # Create mapping of customer to user
    customer_to_user = {data['customer'].id: data['user'] for data in customer_users}
    
    product_requests = []
    for order in orders:
        # Get customer's user account
        customer_user = customer_to_user.get(order.customer.id)
        if not customer_user:
            print_warning(f"No user account found for customer {order.customer.name}, skipping")
            continue
        
        # Create product request (store order ID in metadata for linking)
        request = ProductRequest.objects.create(
            title=f"{order.product_type} - Order #{order.id}",
            description=f"Request for {order.product_type}",
            quantity=order.quantity,
            delivery_deadline=order.delivery_date,
            requester=customer_user,
            status='submitted',
            metadata={'order_id': order.id}
        )
        
        product_requests.append({'request': request, 'order': order})
        print_success(f"Product Request created: {request.title}")
    
    # AI sends to all suppliers (create offers)
    print_info("AI sending requests to all suppliers...")
    all_offers = []
    
    for req_data in product_requests:
        request = req_data['request']
        order = req_data['order']
        offers_for_request = []
        for supplier_data in supplier_users:
            supplier = supplier_data['supplier']
            supplier_user = supplier_data['user']
            
            # Generate varied offers based on order total
            base_price = order.total_amount
            price_variation = Decimal(str(float(base_price) * 0.9 + (hash(str(supplier.id)) % 1000)))
            delivery_days = 5 + (hash(str(supplier.id)) % 5)
            
            offer = SupplierOffer.objects.create(
                request=request,
                supplier=supplier_user,
                price=price_variation,
                delivery_date=datetime.now().date() + timedelta(days=delivery_days),
                notes=f"Offer from {supplier.name}",
                status='pending'
            )
            
            offers_for_request.append(offer)
            all_offers.append(offer)
        
        print_success(f"Created {len(offers_for_request)} offers for: {request.title}")
    
    print_success(f"Total offers created: {len(all_offers)} (7 orders × 7 suppliers)")
    return product_requests

def ai_evaluate_and_assign(product_requests, supplier_users):
    """AI evaluates offers and assigns best supplier"""
    print_header("PHASE 5: AI EVALUATING OFFERS & ASSIGNING SUPPLIERS")
    
    ai_service = OrderAnalysisAI()
    
    for req_data in product_requests:
        request = req_data['request']
        order = req_data['order']
        offers = SupplierOffer.objects.filter(request=request)
        
        if not offers.exists():
            print_warning(f"No offers found for {request.title}")
            continue
        
        # Simple AI evaluation: pick best price with rating consideration
        best_offer = None
        best_score = 0
        
        # Get supplier objects for rating lookup
        supplier_ratings = {}
        for offer in offers:
            supplier_user = offer.supplier
            try:
                supplier = Supplier.objects.get(email=supplier_user.email)
                supplier_ratings[supplier_user.id] = float(supplier.rating)
            except Supplier.DoesNotExist:
                supplier_ratings[supplier_user.id] = 3.0  # Default rating
        
        for offer in offers:
            # Score = (rating/5) * 0.4 + (1 - normalized_price) * 0.6
            # Lower price = higher score
            max_price = max([float(o.price) for o in offers])
            min_price = min([float(o.price) for o in offers])
            price_range = max_price - min_price if max_price != min_price else 1
            
            normalized_price = (float(offer.price) - min_price) / price_range
            rating = supplier_ratings.get(offer.supplier.id, 3.0)
            rating_score = rating / 5.0
            score = (rating_score * 0.4) + ((1 - normalized_price) * 0.6)
            
            if score > best_score:
                best_score = score
                best_offer = offer
        
        if best_offer:
            recommended_supplier_user = best_offer.supplier
            
            # Get supplier object
            try:
                recommended_supplier = Supplier.objects.get(email=recommended_supplier_user.email)
            except Supplier.DoesNotExist:
                print_warning(f"Could not find supplier for user {recommended_supplier_user.username}")
                continue
            
            # Update request
            request.recommended_supplier = recommended_supplier_user
            request.status = 'ai_recommended'
            request.ai_recommendation = {
                'supplier_id': recommended_supplier.id,
                'supplier_name': recommended_supplier.name,
                'price': float(best_offer.price),
                'score': best_score,
                'explanation': f'Best combination of price ({best_offer.price} EGP) and rating ({recommended_supplier.rating})'
            }
            request.save()
            
            # Update the related order
            order.supplier = recommended_supplier
            order.status = 'in-preparation'
            order.save()
            
            print_success(f"AI recommended: {recommended_supplier.name} for {request.title}")
            print(f"  Price: {best_offer.price} EGP")
            print(f"  Score: {best_score:.3f}")
        else:
            print_warning(f"Could not determine best offer for {request.title}")

def final_summary():
    """Print final summary"""
    print_header("FINAL SUMMARY")
    
    customers_count = Customer.objects.count()
    suppliers_count = Supplier.objects.count()
    orders_count = Order.objects.count()
    requests_count = ProductRequest.objects.count()
    offers_count = SupplierOffer.objects.count()
    recommended_count = ProductRequest.objects.filter(status='ai_recommended').count()
    
    print(f"System State:")
    print(f"  Customers: {customers_count}")
    print(f"  Suppliers: {suppliers_count}")
    print(f"  Orders: {orders_count}")
    print(f"  Product Requests: {requests_count}")
    print(f"  Supplier Offers: {offers_count}")
    print(f"  AI Recommendations: {recommended_count}")
    
    print(f"\n{Colors.BOLD}Login Credentials:{Colors.ENDC}")
    print(f"\n{Colors.OKCYAN}Master Admin:{Colors.ENDC}")
    print(f"  Username: SherifRosas")
    print(f"  Password: 01224576070#MoonLand")
    
    print(f"\n{Colors.OKCYAN}Customers (all use same password):{Colors.ENDC}")
    print(f"  Password: Customer123!@#")
    for i in range(1, 8):
        print(f"  customer{i}_* (check script for full usernames)")
    
    print(f"\n{Colors.OKCYAN}Suppliers (all use same password):{Colors.ENDC}")
    print(f"  Password: Supplier123!@#")
    for i in range(1, 8):
        print(f"  supplier{i}_* (check script for full usernames)")
    
    print(f"\n{Colors.WARNING}Next Steps (Manual):{Colors.ENDC}")
    print("  1. Login as suppliers to confirm assigned orders")
    print("  2. Update order statuses through delivery")
    print("  3. Have customers confirm receipt")

def main():
    """Main test execution"""
    print_header("COMPREHENSIVE TEST SCENARIO - CORRECT WORKFLOW")
    print("Following the correct workflow:")
    print("  1. Admin creates user accounts")
    print("  2. Customers login and create orders")
    print("  3. AI sends to suppliers")
    print("  4. Suppliers submit offers")
    print("  5. AI picks best offer")
    print("Starting now...")
    
    # Phase 1: Verify master admin
    master_admin = verify_master_admin()
    if not master_admin:
        print_error("Test aborted - could not create/verify master admin")
        return
    
    # Phase 2: Admin creates accounts
    print_header("PHASE 2: ADMIN CREATING USER ACCOUNTS")
    subadmin = admin_create_subadmin(master_admin)
    customer_users = admin_create_customer_accounts(master_admin)
    supplier_users = admin_create_supplier_accounts(master_admin)
    
    # Phase 3: Customers create orders
    orders = customer_create_orders(customer_users)
    
    # Phase 4: AI sends to suppliers
    product_requests = ai_analyze_and_send_to_suppliers(orders, customer_users, supplier_users)
    
    # Phase 5: AI evaluates and assigns
    ai_evaluate_and_assign(product_requests, supplier_users)
    
    # Final summary
    final_summary()
    
    print_header("AUTOMATED PHASES COMPLETED")
    print_success("Test scenario setup complete!")
    print_warning("Continue with manual steps as outlined above")

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
