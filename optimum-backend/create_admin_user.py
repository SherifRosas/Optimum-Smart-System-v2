#!/usr/bin/env python
"""Create admin user with specified username and password"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth import get_user_model
from authentication.models import UserProfile

User = get_user_model()

# Admin user details
username = 'Optimumoptimum959'
password = '9599599'
email = 'optimum959@optimum.com'  # Default email if not provided

# Get or create user
user, created = User.objects.get_or_create(
    username=username,
    defaults={
        'email': email,
        'is_active': True,
        'is_superuser': True,
        'is_staff': True
    }
)

# If user exists, update details
if not created:
    user.email = email
    user.is_active = True
    user.is_superuser = True
    user.is_staff = True

# Set password
user.set_password(password)
user.save()

# Create or update profile with ADMIN role
profile, profile_created = UserProfile.objects.get_or_create(
    user=user,
    defaults={
        'role': UserProfile.RoleChoices.ADMIN,
        'status': UserProfile.StatusChoices.ACTIVE,
    }
)

# Ensure profile has ADMIN role
if not profile_created:
    profile.role = UserProfile.RoleChoices.ADMIN
    profile.status = UserProfile.StatusChoices.ACTIVE
    profile.save()

print('=' * 50)
if created:
    print('[SUCCESS] Admin user CREATED successfully!')
else:
    print('[SUCCESS] Admin user UPDATED successfully!')
print('=' * 50)
print(f'Username: {user.username}')
print(f'Email: {user.email}')
print(f'Password: {password}')
print(f'Role: {profile.role}')
print(f'Status: {profile.status}')
print(f'Is Active: {user.is_active}')
print(f'Is Superuser: {user.is_superuser}')
print(f'Is Staff: {user.is_staff}')
print('=' * 50)
