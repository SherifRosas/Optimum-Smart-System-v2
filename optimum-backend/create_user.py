#!/usr/bin/env python
"""Create or update user with email and password"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth import get_user_model
from authentication.models import UserProfile

User = get_user_model()

# User details
email = 'sherifrosas.ai@gmail.com'
username = 'sherifrosas'  # or email.split('@')[0]
password = '777930#Sh'

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
print(f'Password: {password}')
print(f'Role: {profile.role}')
print(f'Status: {profile.status}')
print(f'Is Active: {user.is_active}')
print('=' * 50)

