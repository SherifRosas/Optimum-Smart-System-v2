#!/usr/bin/env python
"""
Fix admin user role - Set admin user's role to ADMIN
"""
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from django.contrib.auth.models import User
from authentication.models import UserProfile

def fix_admin_role():
    try:
        # Get admin user
        admin_user = User.objects.get(username='admin')
        print(f"[OK] Found admin user: {admin_user.username}")
        print(f"     Email: {admin_user.email}")
        
        # Get or create profile
        profile, created = UserProfile.objects.get_or_create(user=admin_user)
        
        if created:
            print(f"[OK] Created new profile for admin user")
        else:
            print(f"[OK] Found existing profile")
        
        # Set role to ADMIN
        old_role = profile.role
        profile.role = UserProfile.RoleChoices.ADMIN
        profile.status = UserProfile.StatusChoices.ACTIVE
        profile.save()
        
        print(f"")
        print(f"[OK] Admin role updated!")
        print(f"     Old role: {old_role}")
        print(f"     New role: {profile.role}")
        print(f"     Status: {profile.status}")
        print(f"")
        print(f"[INFO] Now logout and login again to see Command Center!")
        
    except User.DoesNotExist:
        print(f"[ERROR] Admin user 'admin' not found!")
        print(f"        Create it first or use a different username")
        sys.exit(1)
    except Exception as e:
        print(f"[ERROR] {e}")
        sys.exit(1)

if __name__ == '__main__':
    fix_admin_role()
