
import os
import django
from django.utils.text import slugify

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth.models import User
from authentication.models import UserProfile
from customers.models import Customer
from suppliers.models import Supplier

def create_customer_users():
    customers = Customer.objects.all()
    print("### Customer Login Credentials\n")
    print("| # | Customer Name | Username | Password |")
    print("|---|---|---|---|")
    
    for i, customer in enumerate(customers, 1):
        username = slugify(customer.name).replace("-", "")
        if len(username) < 3:
            username = f"user{username}"
            
        # Ensure unique username
        original_username = username
        counter = 1
        while User.objects.filter(username=username).exists():
            # Check if it's the same user (optional, but for now we assume new or update)
            # Actually, let's just reset the password if user exists
            user = User.objects.get(username=username)
            if not hasattr(user, 'profile') or user.profile.role != 'PRODUCT_REQUESTER':
                 username = f"{original_username}{counter}"
                 counter += 1
            else:
                break
        
        password = "password123"
        
        # Create or Get User
        user, created = User.objects.get_or_create(username=username)
        user.set_password(password)
        user.save()
        
        # Create or Update Profile
        profile, _ = UserProfile.objects.get_or_create(user=user)
        profile.role = 'PRODUCT_REQUESTER'
        profile.phone_number = customer.phone_number
        profile.status = 'ACTIVE'
        profile.save()
        
        print(f"| {i} | {customer.name} | `{username}` | `{password}` |")

if __name__ == '__main__':
    create_customer_users()
