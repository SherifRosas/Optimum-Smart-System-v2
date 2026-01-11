#!/usr/bin/env python
"""Verify admin accounts exist and can log in"""
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth import get_user_model
from authentication.models import UserProfile

User = get_user_model()

# Admin accounts to verify
admin_accounts = [
    {
        'username': 'Sherif Rosas',
        'email': 'sherifrosas.ai@gmail.com',  # Corrected: gmail.com (not gmai.com)
        'password': '777930#sh',
        'description': 'Main Admin'
    },
    {
        'username': 'Wael Sobhe',
        'email': None,  # Will use default
        'password': 'WaelSobhe#159357',
        'description': 'Second Admin'
    }
]

print('=' * 60)
print('VERIFYING ADMIN ACCOUNTS')
print('=' * 60)

for account in admin_accounts:
    username = account['username']
    email = account.get('email') or f'{username.lower().replace(" ", ".")}@optimum.com'
    password = account['password']
    description = account['description']
    
    print(f'\n[{description}]')
    print(f'Username: {username}')
    print(f'Email: {email}')
    
    try:
        # Check if user exists
        user = User.objects.filter(username=username).first()
        
        if user:
            print(f'[OK] User exists')
            print(f'  - Email: {user.email}')
            print(f'  - Is Active: {user.is_active}')
            print(f'  - Is Superuser: {user.is_superuser}')
            print(f'  - Is Staff: {user.is_staff}')
            
            # Check profile
            try:
                profile = UserProfile.objects.get(user=user)
                print(f'  - Role: {profile.role}')
                print(f'  - Status: {profile.status}')
            except UserProfile.DoesNotExist:
                print(f'  [WARNING] Profile does not exist - creating...')
                profile = UserProfile.objects.create(
                    user=user,
                    role=UserProfile.RoleChoices.ADMIN,
                    status=UserProfile.StatusChoices.ACTIVE
                )
                print(f'  [OK] Profile created')
            
            # Verify password
            if user.check_password(password):
                print(f'  [OK] Password is correct')
            else:
                print(f'  [WARNING] Password does not match - updating...')
                user.set_password(password)
                user.save()
                print(f'  [OK] Password updated')
            
            # Ensure admin privileges
            if not user.is_superuser or not user.is_staff:
                print(f'  [WARNING] Admin privileges missing - updating...')
                user.is_superuser = True
                user.is_staff = True
                user.is_active = True
                user.save()
                print(f'  [OK] Admin privileges granted')
            
            # Update email if different
            if user.email != email:
                print(f'  [WARNING] Email mismatch - updating...')
                user.email = email
                user.save()
                print(f'  [OK] Email updated')
                
        else:
            print(f'[CREATE] User does not exist - creating...')
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password,
                is_superuser=True,
                is_staff=True,
                is_active=True
            )
            print(f'[OK] User created')
            
            # Create profile
            profile = UserProfile.objects.create(
                user=user,
                role=UserProfile.RoleChoices.ADMIN,
                status=UserProfile.StatusChoices.ACTIVE
            )
            print(f'[OK] Profile created')
            
    except Exception as e:
        print(f'[ERROR] Error: {str(e)}')

print('\n' + '=' * 60)
print('VERIFICATION COMPLETE')
print('=' * 60)
print('\nYou can now test login with these credentials:')
print('1. Main Admin: Username "Sherif Rosas", Password "777930#sh"')
print('2. Second Admin: Username "Wael Sobhe", Password "WaelSobhe#159357"')
print('=' * 60)
