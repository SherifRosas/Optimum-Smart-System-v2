# PythonAnywhere WSGI File - FINAL VERSION

## ⚠️ CRITICAL: Use This Exact Configuration

The issue is that the settings module needs to explicitly use production settings. Use this version:

```python
import os, sys

# Set environment variables BEFORE importing Django
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
os.environ['DJANGO_ENV'] = 'production'

# Add backend path to Python path
path = '/home/SherifRissas/Optimum-Smart-System-v/optimum-backend'
if path not in sys.path:
    sys.path.append(path)

# IMPORTANT: Use production settings directly
os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings.production'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

## 🔑 Key Changes

1. **Direct production settings:** `'optimum_system.settings.production'` instead of `'optimum_system.settings'`
2. **Environment variable set first:** `CORS_ALLOWED_ORIGINS` is set before Django imports
3. **DJANGO_ENV set:** Ensures production mode is active

## 📋 Step-by-Step Instructions

1. **Go to PythonAnywhere Dashboard**
2. **Click "Web" tab**
3. **Click on your web app** (sherifrissas.pythonanywhere.com)
4. **Find "WSGI configuration file"** section
5. **Click the file path** (usually `/var/www/sherifrissas_pythonanywhere_com_wsgi.py`)
6. **Select ALL content** (Ctrl+A / Cmd+A)
7. **Delete it**
8. **Paste the code above** (the complete WSGI file)
9. **Click "Save"** (bottom of page)
10. **Go back to Web tab**
11. **Click the green "Reload" button**
12. **Wait 20-30 seconds** for reload to complete

## ✅ Verification Steps

### 1. Check Error Log
- Go to **Web tab** → **Error log**
- Should show no errors
- If there are errors, copy them and check

### 2. Test CORS
- Open your Vercel site
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Open browser console (F12)
- CORS errors should be **GONE**

### 3. Verify Environment Variable
If you want to double-check, you can add a test endpoint to verify CORS settings are loaded, but the reload should be enough.

## 🐛 If Still Not Working

### Check 1: File Storage Full
Your dashboard shows "File storage: 100% full". This might prevent saving. Try:
- Delete old files/logs
- Clear PythonAnywhere cache
- Then try saving again

### Check 2: Settings File Path
Verify the path is correct:
- Should be: `/home/SherifRissas/Optimum-Smart-System-v/optimum-backend`
- Check case: `SherifRissas` (capital S, capital R)

### Check 3: Reload Actually Happened
- After clicking "Reload", wait at least 20 seconds
- Check the web app status - should show "reloaded" or timestamp
- Try reloading again if unsure

### Check 4: Test Direct API Call
Try accessing the API directly from browser:
```
https://sherifrissas.pythonanywhere.com/api/orders/
```
- Should return JSON (or authentication error, not CORS error)
- If you see CORS error, the settings aren't applied

## 📝 Current CORS URLs (for reference)

1. `https://optimum-smart-system.vercel.app`
2. `https://optimum-smart-system-navy.vercel.app`
3. `https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app`
4. `https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app` ← **Your new Vercel URL**

## 🚨 Important Note About File Storage

Your PythonAnywhere account shows **100% file storage used**. This might prevent:
- Saving files
- Reloading web apps
- Creating new files

**Recommendation:** Free up some space before trying to save the WSGI file.
