# PythonAnywhere WSGI File - Complete with SECRET_KEY

## ✅ Ready to Copy-Paste

Copy this **ENTIRE** content to your PythonAnywhere WSGI file:

```python
import os, sys

# Set environment variables BEFORE importing Django
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
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

---

## 🚀 How to Apply

1. **Go to PythonAnywhere Dashboard**
2. **Click "Web" tab**
3. **Click on your web app** (sherifrissas.pythonanywhere.com)
4. **Find "WSGI configuration file"** section
5. **Click the file path** (`/var/www/sherifrissas_pythonanywhere_com_wsgi.py`)
6. **Select ALL content** (Ctrl+A / Cmd+A)
7. **Delete it**
8. **Paste the code above** (the complete WSGI file)
9. **Click "Save"** (bottom of page)
10. **Go back to Web tab**
11. **Click the green "Reload" button**
12. **Wait 20-30 seconds** for reload to complete

---

## ✅ Verification

After reloading, check:

1. **Error Log** (Web tab → Error log)
   - Should show no `SECRET_KEY` errors
   - Should show no import errors

2. **Test Site**
   - Visit: `https://sherifrissas.pythonanywhere.com/api/`
   - Should return API response (not error)

3. **Test from Vercel**
   - Open your Vercel frontend
   - Check browser console (F12)
   - CORS errors should be **GONE** ✅

---

## 🔒 Security Note

The SECRET_KEY is now set in the WSGI file. This is acceptable for PythonAnywhere, but in the future you could:
- Store it in a `.env` file (not committed to git)
- Use PythonAnywhere's environment variables feature
- Generate a new key if this one was exposed

---

**Ready? Copy the WSGI file content above and paste it into PythonAnywhere!** 🚀
