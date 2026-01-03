# PythonAnywhere WSGI File - Updated Version

## Copy this entire content to your WSGI file:

```python
import os, sys

# Set environment variables before importing Django
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
os.environ['DJANGO_ENV'] = 'production'
path = '/home/SherifRissas/Optimum-Smart-System-v/optimum-backend'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

## What Changed:

**Added the new Vercel preview URL:**
- `https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app`

## How to Apply:

1. **Go to PythonAnywhere Dashboard**
2. **Click on "Web" tab**
3. **Click on your web app** (sherifrissas.pythonanywhere.com)
4. **Find "WSGI configuration file"** section
5. **Click the file path** (usually `/var/www/sherifrissas_pythonanywhere_com_wsgi.py`)
6. **Replace the entire content** with the code above
7. **Click "Save"**
8. **Go back to Web tab**
9. **Click the green "Reload" button**

## After Reloading:

1. **Wait 10-15 seconds** for the web app to reload
2. **Refresh your Vercel site**
3. **Check browser console** - CORS errors should be gone!

---

## Important Notes:

- **Preview URLs are temporary** - Each Vercel preview deployment gets a unique URL
- **Production URL:** Once you get your production domain (like `optimum-smart-system-v2.vercel.app`), add that instead
- **Security:** Preview URLs are publicly accessible, so only add them temporarily for testing

---

## Current URLs in CORS:

1. ✅ `https://optimum-smart-system.vercel.app` (Production)
2. ✅ `https://optimum-smart-system-navy.vercel.app` (Production)
3. ✅ `https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app` (Preview)
4. ✅ `https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app` (New Preview)
