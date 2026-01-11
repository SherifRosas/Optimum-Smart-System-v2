#!/usr/bin/env python
"""
Create or update user with email and password.

SECURITY WARNING: This script should use environment variables for sensitive data.
Usage:
    USER_EMAIL=user@example.com USER_USERNAME=username USER_PASSWORD=securepassword python create_user.py
"""
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth import get_user_model
from authentication.models import UserProfile

User = get_user_model()

# User details - MUST be provided via environment variables for security
email = os.environ.get('USER_EMAIL')
username = os.environ.get('USER_USERNAME')
password = os.environ.get('USER_PASSWORD')

# Validate required environment variables
if not email or not username or not password:
    print('=' * 50)
    print('❌ ERROR: Missing required environment variables!')
    print('=' * 50)
    print('Usage:')
    print('  USER_EMAIL=user@example.com USER_USERNAME=username USER_PASSWORD=securepassword python create_user.py')
    print('')
    print('Required environment variables:')
    print('  - USER_EMAIL: User email address')
    print('  - USER_USERNAME: Username')
    print('  - USER_PASSWORD: User password (will be hashed)')
    print('=' * 50)
    sys.exit(1)

# Get or create user
user, created = User.objects.get_or_create(
    email__iexact=email,
    defaults={
        'username': username,
        'email': email,
        'is_active': True
    }
)

# If user exists, update username if needed
if not created:
    user.username = username
    user.email = email

# Set password
user.set_password(password)
user.is_active = True
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
    print('✅ User CREATED successfully!')
else:
    print('✅ User UPDATED successfully!')
print('=' * 50)
print(f'Username: {user.username}')
print(f'Email: {user.email}')
# SECURITY: Do not print password
print(f'Password: [REDACTED - password has been set]')
print(f'Role: {profile.role}')
print(f'Status: {profile.status}')
print(f'Is Active: {user.is_active}')
print('=' * 50)

