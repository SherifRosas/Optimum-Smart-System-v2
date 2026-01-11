#!/usr/bin/env python
"""
Script to create an admin user for Optimum Smart System
Run this from the backend directory: python create_admin.py
"""
import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth.models import User
from authentication.models import UserProfile

def create_admin_user():
    username = 'admin'
    email = 'admin@optimum.com'
    password = 'admin123'  # Change this to a secure password
    
    # Check if user already exists
    if User.objects.filter(username=username).exists():
        print(f"User '{username}' already exists!")
        user = User.objects.get(username=username)
        user.set_password(password)
        user.save()
        print(f"Password updated for user '{username}'")
    else:
        # Create user
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            is_staff=True,
            is_superuser=True
        )
        print(f"Superuser '{username}' created successfully!")
    
    # Create or update UserProfile
    profile, created = UserProfile.objects.get_or_create(
        user=user,
        defaults={
            'role': 'ADMIN',
            'status': 'ACTIVE'
        }
    )
    
    if not created:
        profile.role = 'ADMIN'
        profile.status = 'ACTIVE'
        profile.save()
        print(f"UserProfile updated for '{username}'")
    else:
        print(f"UserProfile created for '{username}'")
    
    print("\n" + "="*50)
    print("Login Credentials:")
    print("="*50)
    print(f"Username: {username}")
    print(f"Password: {password}")
    print("="*50)
    print("\nIMPORTANT: Change the password after first login!")
    print("="*50)

if __name__ == '__main__':
    create_admin_user()
