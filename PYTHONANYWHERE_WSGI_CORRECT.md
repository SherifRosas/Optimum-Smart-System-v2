# PythonAnywhere WSGI File - CORRECTED Version

## ⚠️ IMPORTANT: Exact URL to Add

Your Vercel preview URL is:
```
https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app
```

## Complete WSGI File Content

Copy this **ENTIRE** content to your PythonAnywhere WSGI file:

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

## 🔍 Verification Steps

1. **Check the WSGI file contains the exact URL:**
   - Look for: `optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app`
   - Make sure there are NO spaces or typos

2. **Verify the environment variable is set:**
   - The line should be: `os.environ['CORS_ALLOWED_ORIGINS'] = '...'`
   - All URLs should be comma-separated with NO spaces after commas

3. **Check the path is correct:**
   - Should be: `/home/SherifRissas/Optimum-Smart-System-v/optimum-backend`
   - Make sure the case matches exactly

## 🚀 How to Apply

1. **Go to PythonAnywhere Dashboard**
2. **Click "Web" tab**
3. **Click on your web app** (sherifrissas.pythonanywhere.com)
4. **Find "WSGI configuration file"** section
5. **Click the file path** (usually `/var/www/sherifrissas_pythonanywhere_com_wsgi.py`)
6. **Select ALL content** (Ctrl+A or Cmd+A)
7. **Delete it**
8. **Paste the code above** (the complete WSGI file)
9. **Click "Save"** (important!)
10. **Go back to Web tab**
11. **Click the green "Reload" button**
12. **Wait 15-20 seconds** for reload to complete

## ✅ After Reloading

1. **Check PythonAnywhere Error Log:**
   - Go to Web tab → Error log
   - Make sure there are no errors

2. **Test from Vercel:**
   - Refresh your Vercel site
   - Open browser console (F12)
   - CORS errors should be gone

## 🐛 If Still Not Working

### Check 1: Verify URL is in the list
```python
# In WSGI file, this line should contain your Vercel URL:
os.environ['CORS_ALLOWED_ORIGINS'] = '...,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
```

### Check 2: No trailing slashes
- ✅ Correct: `https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app`
- ❌ Wrong: `https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app/`

### Check 3: No spaces
- ✅ Correct: `url1,url2,url3`
- ❌ Wrong: `url1, url2, url3` (spaces after commas)

### Check 4: Reload the web app
- The web app MUST be reloaded after changing WSGI file
- Just saving is not enough!

## 📝 Current URLs in CORS (for reference):

1. `https://optimum-smart-system.vercel.app`
2. `https://optimum-smart-system-navy.vercel.app`
3. `https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app`
4. `https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app` ← **NEW ONE**
