# PythonAnywhere Fresh Setup Guide

## 🚀 Complete Setup from Scratch

Follow these steps to set up your PythonAnywhere web app correctly.

---

## Step 1: Verify Your Code is Ready

### On PythonAnywhere (Bash Console):

```bash
# Navigate to your project
cd ~/Optimum-Smart-System-v/optimum-backend

# Pull latest code (with CORS fix)
git pull origin master

# Verify you're in the right directory
pwd
# Should show: /home/SherifRissas/Optimum-Smart-System-v/optimum-backend
```

---

## Step 2: Create Virtual Environment

```bash
cd ~/Optimum-Smart-System-v/optimum-backend

# Create venv
python3.10 -m venv venv

# Activate it
source venv/bin/activate

# Upgrade pip
pip install --upgrade pip --no-cache-dir

# Install minimal production packages
pip install "Django>=4.2,<5.0" --no-cache-dir
pip install djangorestframework --no-cache-dir
pip install django-cors-headers --no-cache-dir
pip install djangorestframework-simplejwt --no-cache-dir
pip install dj-database-url --no-cache-dir
pip install whitenoise --no-cache-dir
pip install gunicorn --no-cache-dir
pip install python-dotenv --no-cache-dir
pip install django-environ --no-cache-dir
pip install drf-spectacular --no-cache-dir
pip install openai --no-cache-dir
pip install requests --no-cache-dir
pip install Pillow --no-cache-dir

# Verify installation
python -c "import django; print(django.get_version())"
```

---

## Step 3: Create New Web App

1. **Go to PythonAnywhere Dashboard**
2. **Click "Web" tab**
3. **Click "Add a new web app"**
4. **Select domain:** `sherifrissas.pythonanywhere.com`
5. **Click "Next"**
6. **Select "Manual configuration"**
7. **Select Python version:** `3.10`
8. **Click "Next"**

---

## Step 4: Configure Web App Settings

### Source code:
```
/home/SherifRissas/Optimum-Smart-System-v/optimum-backend
```

### Working directory:
```
/home/SherifRissas/Optimum-Smart-System-v/optimum-backend
```

### Virtualenv:
```
/home/SherifRissas/Optimum-Smart-System-v/optimum-backend/venv
```

---

## Step 5: Configure WSGI File

1. **Click on WSGI configuration file** (`/var/www/sherifrissas_pythonanywhere_com_wsgi.py`)
2. **Delete all content**
3. **Paste this exact code:**

```python
import os, sys

# Set environment variables BEFORE importing Django
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
os.environ['DJANGO_ENV'] = 'production'
os.environ['ALLOWED_HOSTS'] = 'sherifrissas.pythonanywhere.com'

# Add backend path to Python path
path = '/home/SherifRissas/Optimum-Smart-System-v/optimum-backend'
if path not in sys.path:
    sys.path.append(path)

# Use production settings directly
os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings.production'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

4. **Click "Save"**

---

## Step 6: Set Environment Variables (Optional but Recommended)

In the Web tab, you can add environment variables. For now, the WSGI file sets them, but you can also add:

- `DJANGO_ENV=production`
- `ALLOWED_HOSTS=sherifrissas.pythonanywhere.com`
- `CORS_ALLOWED_ORIGINS=https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app`

---

## Step 7: Run Migrations (First Time Setup)

In Bash console:

```bash
cd ~/Optimum-Smart-System-v/optimum-backend
source venv/bin/activate

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser
```

---

## Step 8: Collect Static Files

```bash
# Still in venv
python manage.py collectstatic --noinput
```

---

## Step 9: Reload Web App

1. **Go to Web tab**
2. **Click green "Reload" button**
3. **Wait 20-30 seconds**

---

## Step 10: Test Your Setup

### Test 1: Check if site loads
Visit: `https://sherifrissas.pythonanywhere.com/`

### Test 2: Check API
Visit: `https://sherifrissas.pythonanywhere.com/api/`

### Test 3: Check CORS from Vercel
1. Open your Vercel site
2. Hard refresh: `Ctrl+Shift+R`
3. Check browser console (F12)
4. CORS errors should be **GONE** ✅

---

## ✅ Verification Checklist

- [ ] Virtualenv created and packages installed
- [ ] Web app created with correct paths
- [ ] WSGI file configured correctly
- [ ] Migrations run
- [ ] Static files collected
- [ ] Web app reloaded
- [ ] Site accessible
- [ ] API accessible
- [ ] CORS working from Vercel

---

## 🐛 Troubleshooting

### Error: "No module named 'django'"
- **Fix:** Check virtualenv path is correct in Web tab
- **Fix:** Verify venv was created: `ls -la ~/Optimum-Smart-System-v/optimum-backend/venv/`

### Error: "ModuleNotFoundError"
- **Fix:** Install missing package: `pip install <package-name> --no-cache-dir`
- **Fix:** Reload web app after installing

### Error: "DisallowedHost"
- **Fix:** Check `ALLOWED_HOSTS` in WSGI file
- **Fix:** Should be: `sherifrissas.pythonanywhere.com`

### CORS still not working
- **Fix:** Verify WSGI file has correct CORS URLs
- **Fix:** Check error log in Web tab
- **Fix:** Make sure web app was reloaded after WSGI changes

---

## 📝 Important Notes

1. **Paths are critical:** Make sure all paths use `Optimum-Smart-System-v` (with `-v`)
2. **Virtualenv must exist:** The venv must be created before reloading
3. **WSGI file:** Must be saved and web app reloaded for changes to take effect
4. **CORS URLs:** Update WSGI file when you get new Vercel preview URLs

---

**Ready to start? Begin with Step 1!** 🚀
