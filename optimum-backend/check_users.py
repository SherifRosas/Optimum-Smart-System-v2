import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "optimum_system.settings")
django.setup()

from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()

print(f"📂 Database Path: {settings.DATABASES['default']['NAME']}")
print("👥 Existing Users:")
users = User.objects.all()
if not users:
    print("   (No users found!)")
else:
    for u in users:
        print(f"   - ID: {u.id} | Username: '{u.username}' | Email: '{u.email}' | Active: {u.is_active} | Superuser: {u.is_superuser}")
        if u.check_password("waelsobhe159357"):
            print("     ✅ Password 'waelsobhe159357' Matches!")
        else:
            print("     ❌ Password 'waelsobhe159357' DOES NOT MATCH.")

