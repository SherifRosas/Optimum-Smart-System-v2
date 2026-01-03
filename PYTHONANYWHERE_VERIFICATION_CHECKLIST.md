# PythonAnywhere Backend Setup Verification Checklist

## ✅ Verification Steps

### 1. WSGI File Configuration (`/var/www/sherifrissas_pythonanywhere_com_wsgi.py`)

**Required Content:**
```python
import os, sys

# Set environment variables BEFORE importing Django
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
os.environ['DJANGO_ENV'] = 'production'
os.environ['ALLOWED_HOSTS'] = 'sherifrissas.pythonanywhere.com'
os.environ['SECRET_KEY'] = 'tm2sx6p8*lxe&&9e31rh^rc_mr$795459*z=19)!qvmk@#^_k8'

# Add backend path to Python path
path = '/home/SherifRissas/Optimum-Smart-System-v/optimum-backend'
if path not in sys.path:
    sys.path.append(path)

# Use production settings directly
os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings.production'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

**Checklist:**
- [ ] `SECRET_KEY` is set with the correct value
- [ ] `ALLOWED_HOSTS` is set to `sherifrissas.pythonanywhere.com`
- [ ] `CORS_ALLOWED_ORIGINS` includes all Vercel URLs (production + preview)
- [ ] `DJANGO_SETTINGS_MODULE` is set to `optimum_system.settings.production`
- [ ] `path` variable points to `/home/SherifRissas/Optimum-Smart-System-v/optimum-backend`

### 2. PythonAnywhere Web App Configuration

**In PythonAnywhere Dashboard → Web Tab:**

**Source code:**
- [ ] Should be: `/home/SherifRissas/Optimum-Smart-System-v/optimum-backend`

**Working directory:**
- [ ] Should be: `/home/SherifRissas/Optimum-Smart-System-v/optimum-backend`

**Virtualenv:**
- [ ] Should be: `/home/SherifRissas/Optimum-Smart-System-v/optimum-backend/venv`

**WSGI configuration file:**
- [ ] Should be: `/var/www/sherifrissas_pythonanywhere_com_wsgi.py`

### 3. Virtual Environment Dependencies

**Verify all required packages are installed:**
```bash
cd ~/Optimum-Smart-System-v/optimum-backend
source venv/bin/activate
pip list | grep -E "(Django|djangorestframework|django-cors-headers|django-filter|django-ratelimit|djangorestframework-simplejwt)"
```

**Required packages:**
- [ ] Django (5.2.9 or compatible)
- [ ] djangorestframework
- [ ] django-cors-headers
- [ ] django-filter
- [ ] django-ratelimit
- [ ] djangorestframework-simplejwt
- [ ] drf-spectacular
- [ ] openai
- [ ] gunicorn
- [ ] whitenoise

### 4. Database Migrations

**Verify migrations are applied:**
```bash
cd ~/Optimum-Smart-System-v/optimum-backend
source venv/bin/activate
python manage.py migrate
```

**Expected output:**
- [ ] Should show "No migrations to apply" or successfully apply any pending migrations

### 5. Django System Check

**Run Django system check:**
```bash
cd ~/Optimum-Smart-System-v/optimum-backend
source venv/bin/activate
python manage.py check
```

**Expected output:**
- [ ] Should show "System check identified no issues (0 silenced)."

### 6. Test WSGI Application

**After reloading the web app, check error logs:**
- [ ] No `ValueError: SECRET_KEY environment variable must be set in production!`
- [ ] No `DisallowedHost` errors
- [ ] No `ModuleNotFoundError` errors
- [ ] Application loads successfully

### 7. Test API Endpoint

**Test a simple API endpoint:**
```bash
curl https://sherifrissas.pythonanywhere.com/api/
```

**Expected:**
- [ ] Returns API documentation or valid JSON response
- [ ] No CORS errors in browser console (if testing from frontend)
- [ ] No 500 Internal Server Error

### 8. CORS Configuration

**Verify CORS is working:**
- [ ] Frontend can make requests to backend API
- [ ] No CORS errors in browser console
- [ ] `Access-Control-Allow-Origin` header is present in API responses

## 🔧 Quick Fix Commands

If verification fails, use these commands:

### Reload Web App
1. Go to PythonAnywhere Dashboard → Web tab
2. Click the green "Reload" button

### Check Error Logs
```bash
# View recent error log
tail -50 /var/log/sherifrissas.pythonanywhere.com.error.log
```

### Verify Environment Variables in WSGI
```bash
# View WSGI file
cat /var/www/sherifrissas_pythonanywhere_com_wsgi.py
```

### Test Django Setup Locally (in console)
```bash
cd ~/Optimum-Smart-System-v/optimum-backend
source venv/bin/activate
export DJANGO_ENV=production
export ALLOWED_HOSTS=sherifrissas.pythonanywhere.com
export SECRET_KEY='tm2sx6p8*lxe&&9e31rh^rc_mr$795459*z=19)!qvmk@#^_k8'
export CORS_ALLOWED_ORIGINS='https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
export DJANGO_SETTINGS_MODULE=optimum_system.settings.production
python manage.py check
```

## ✅ Success Criteria

All of these should be true:
- ✅ No `SECRET_KEY` errors in error logs
- ✅ No `DisallowedHost` errors
- ✅ Django system check passes
- ✅ API endpoints respond correctly
- ✅ CORS headers are present
- ✅ Frontend can communicate with backend

## 📝 Notes

- The `SECRET_KEY` is sensitive - never commit it to version control
- The WSGI file is the only place where `SECRET_KEY` should be set for PythonAnywhere
- After making changes to the WSGI file, always reload the web app
- If you see persistent errors, check the error log for specific details
