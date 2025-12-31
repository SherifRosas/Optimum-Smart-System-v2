#!/usr/bin/env python
"""Create admin user with specified username and password"""
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth import get_user_model
from authentication.models import UserProfile

User = get_user_model()

# Admin user details - Load from environment variables for security
# Required environment variables:
#   ADMIN_USERNAME - Username for the admin user
#   ADMIN_PASSWORD - Password for the admin user
# Optional environment variables:
#   ADMIN_EMAIL - Email for the admin user (defaults to username@optimum.com)

username = os.environ.get('ADMIN_USERNAME')
password = os.environ.get('ADMIN_PASSWORD')
email = os.environ.get('ADMIN_EMAIL')

# Validate required environment variables
if not username:
    print('[ERROR] ADMIN_USERNAME environment variable is required!')
    print('Usage: ADMIN_USERNAME=your_username ADMIN_PASSWORD=your_password python create_admin_user.py')
    sys.exit(1)

if not password:
    print('[ERROR] ADMIN_PASSWORD environment variable is required!')
    print('Usage: ADMIN_USERNAME=your_username ADMIN_PASSWORD=your_password python create_admin_user.py')
    sys.exit(1)

# Set default email if not provided
if not email:
    email = f'{username}@optimum.com'

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
print(f'Password: [REDACTED - Set via ADMIN_PASSWORD environment variable]')
print(f'Role: {profile.role}')
print(f'Status: {profile.status}')
print(f'Is Active: {user.is_active}')
print(f'Is Superuser: {user.is_superuser}')
print(f'Is Staff: {user.is_staff}')
print('=' * 50)
print('\n[INFO] To use this script, set environment variables:')
print('  ADMIN_USERNAME=your_username')
print('  ADMIN_PASSWORD=your_password')
print('  ADMIN_EMAIL=your_email@example.com  (optional)')
print('=' * 50)
