import os
import django
import sys

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "optimum_system.settings")
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

username = "admin"
password = "password123"

with open("result.txt", "w") as f:
    try:
        if User.objects.filter(username=username).exists():
            f.write(f"User {username} exists. Deleting...\n")
            User.objects.filter(username=username).delete()
        
        User.objects.create_superuser(username, "admin@example.com", password)
        f.write(f"SUCCESS: Created superuser '{username}' with password '{password}'\n")
        f.write(f"Total Users: {User.objects.count()}\n")
    except Exception as e:
        f.write(f"ERROR: {e}\n")
