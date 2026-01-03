# CORS Troubleshooting Guide

## Current Issue
CORS errors persist even after updating WSGI file. The error shows:
- **Origin:** `https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app`
- **Backend:** `https://sherifrissas.pythonanywhere.com`

## Step-by-Step Verification

### 1. Verify WSGI File Content

Your WSGI file should be at: `/var/www/sherifrissas_pythonanywhere_com_wsgi.py`

**Exact content should be:**
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

### 2. Check Settings Module

**IMPORTANT:** The WSGI file sets `DJANGO_SETTINGS_MODULE = 'optimum_system.settings'`

This means Django will use `optimum_system/settings.py`, which should then load the correct environment settings based on `DJANGO_ENV`.

**Verify `optimum_system/settings.py` loads production settings when `DJANGO_ENV=production`**

### 3. Check PythonAnywhere Error Log

1. Go to **Web tab** → **Error log**
2. Look for any errors related to:
   - CORS settings
   - Environment variables
   - Import errors

### 4. Alternative: Check if Settings File Uses Environment Variable

If the settings file isn't reading the environment variable correctly, we may need to check which settings file is actually being used.

## Quick Test: Add Direct CORS Setting

If environment variable isn't working, try adding CORS directly in the WSGI file (temporary test):

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
from django.conf import settings

# Force CORS settings (temporary test)
import django
django.setup()

# This is a workaround - check if settings are loaded correctly
application = get_wsgi_application()
```

## Better Solution: Check Settings File

The issue might be that `optimum_system/settings.py` doesn't properly route to production settings. Let's verify:

1. **Check `optimum_system/settings.py`:**
   - It should check `DJANGO_ENV` and load the appropriate settings file
   - If `DJANGO_ENV=production`, it should load `settings.production`

2. **If settings.py doesn't exist or doesn't route correctly:**
   - We may need to change WSGI to use `optimum_system.settings.production` directly

## Recommended Fix

Change the WSGI file to use production settings directly:

```python
import os, sys

# Set environment variables before importing Django
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
os.environ['DJANGO_ENV'] = 'production'
path = '/home/SherifRissas/Optimum-Smart-System-v/optimum-backend'
if path not in sys.path:
    sys.path.append(path)

# Use production settings directly
os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings.production'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

**Key change:** `'optimum_system.settings.production'` instead of `'optimum_system.settings'`

## After Making Changes

1. **Save the WSGI file**
2. **Reload the web app** (green button in Web tab)
3. **Wait 15-20 seconds**
4. **Check error log** for any issues
5. **Test from Vercel** - hard refresh (Ctrl+Shift+R)
