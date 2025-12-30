#!/usr/bin/env python
"""Fix admin user permissions and password"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

# Get or create admin user
admin, created = User.objects.get_or_create(
    username='admin',
    defaults={
        'email': 'admin@example.com',
        'is_superuser': True,
        'is_staff': True,
        'is_active': True
    }
)

# Ensure admin has correct permissions
admin.is_superuser = True
admin.is_staff = True
admin.is_active = True
admin.set_password('admin123')
admin.save()

print('SUCCESS: Admin user fixed!')
print(f'Username: {admin.username}')
print(f'Email: {admin.email}')
print(f'Password: admin123')
print(f'Is superuser: {admin.is_superuser}')
print(f'Is staff: {admin.is_staff}')
print(f'Is active: {admin.is_active}')

