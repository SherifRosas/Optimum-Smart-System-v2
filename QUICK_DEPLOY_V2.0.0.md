# ⚡ Quick Deploy v2.0.0 - Step-by-Step

**Fast deployment guide for Optimum Smart System v2.0.0**

---

## 🎯 Prerequisites Check

Before starting, make sure you have:
- [ ] GitHub repository access
- [ ] Vercel account (free tier works)
- [ ] PythonAnywhere account (free tier works)
- [ ] Code committed to GitHub

---

## 🚀 Part 1: Deploy Frontend to Vercel (15 minutes)

### Step 1: Create Vercel Project

1. **Go to:** https://vercel.com/dashboard
2. **Click:** "Add New..." → "Project"
3. **Import** your GitHub repository
4. **Configure:**
   - **Project Name:** `optimum-smart-system-v2` (or your choice)
   - **Framework:** Vite (auto-detected)
   - **Root Directory:** `optimum-frontend/frontend` ⚠️ **CRITICAL**
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
   - **Install Command:** `npm install --legacy-peer-deps --force`

### Step 2: Add Environment Variables

**Before deploying, add these:**

1. **Click "Environment Variables"** (or add after first deploy)
2. **Add:**
   ```
   VITE_API_URL = https://YOUR-USERNAME.pythonanywhere.com/api
   ```
   Replace `YOUR-USERNAME` with your PythonAnywhere username

3. **Optional but recommended:**
   ```
   VITE_WS_URL = wss://YOUR-USERNAME.pythonanywhere.com/ws
   ```

4. **Select environments:** Production, Preview, Development

### Step 3: Deploy

1. **Click "Deploy"**
2. **Wait for build** (2-5 minutes)
3. **Note your Vercel URL:** `https://your-project.vercel.app`

✅ **Frontend deployed!** Save your Vercel URL for backend configuration.

---

## 🐍 Part 2: Deploy Backend to PythonAnywhere (20 minutes)

### Step 1: Access PythonAnywhere

1. **Go to:** https://www.pythonanywhere.com/
2. **Log in** (or create account)
3. **Open Bash Console** (Consoles tab → Bash)

### Step 2: Clone Repository

```bash
cd ~
git clone https://github.com/YOUR-USERNAME/Optimum-Smart-System.git Optimum-Smart-System-v2
cd Optimum-Smart-System-v2/optimum-backend
```

**Replace `YOUR-USERNAME` with your GitHub username.**

### Step 3: Set Up Python Environment

```bash
# Create virtual environment
python3.10 -m venv venv
# (or python3.9, python3.11 - check available versions)

# Activate it
source venv/bin/activate

# Upgrade pip
pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt
```

**If you get "Disk quota exceeded":**
```bash
pip install --no-cache-dir -r requirements.txt
```

### Step 4: Set Up Database

```bash
# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser
# Follow prompts to create admin account
```

### Step 5: Generate Secret Key

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

**Copy the output** - you'll need it in the next step.

### Step 6: Configure Web App

1. **Go to "Web" tab** in PythonAnywhere dashboard
2. **Click "Add a new web app"** (or edit existing)

3. **Configure:**
   - **Source code:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend`
   - **Working directory:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend`

4. **Click on WSGI configuration file** link

5. **Replace entire content with:**

```python
import os
import sys

# Set environment variables BEFORE importing Django
os.environ['DJANGO_ENV'] = 'production'
os.environ['DEBUG'] = 'False'
os.environ['SECRET_KEY'] = 'PASTE-YOUR-SECRET-KEY-HERE'
os.environ['ALLOWED_HOSTS'] = 'YOUR-USERNAME.pythonanywhere.com'
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://YOUR-VERCEL-URL.vercel.app'
os.environ['DATABASE_URL'] = 'sqlite:///home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/db.sqlite3'

# Set project path
path = '/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

**Replace:**
- `YOUR-USERNAME` → Your PythonAnywhere username (3 places)
- `PASTE-YOUR-SECRET-KEY-HERE` → The secret key from Step 5
- `YOUR-VERCEL-URL.vercel.app` → Your Vercel URL from Part 1

6. **Save the file**

### Step 7: Configure Static Files

1. **In Web tab, scroll to "Static files"**
2. **Add mapping:**
   - **URL:** `/static/`
   - **Directory:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/staticfiles/`

### Step 8: Collect Static Files

**In Bash Console:**
```bash
cd ~/Optimum-Smart-System-v2/optimum-backend
source venv/bin/activate
python manage.py collectstatic --noinput
```

### Step 9: Reload Web App

1. **Go to "Web" tab**
2. **Click green "Reload" button**
3. **Wait 30-60 seconds**

✅ **Backend deployed!**

---

## ✅ Part 3: Verify Everything Works

### Test Backend

1. **Visit:** `https://YOUR-USERNAME.pythonanywhere.com/api/`
   - Should see API response or documentation

2. **Visit:** `https://YOUR-USERNAME.pythonanywhere.com/admin/`
   - Should see Django admin login
   - Login with superuser credentials

### Test Frontend

1. **Visit your Vercel URL:** `https://your-project.vercel.app`
   - Should see Role Selection page
   - Try logging in
   - Check browser console for errors

### Test Integration

1. **Open browser DevTools** (F12)
2. **Go to Network tab**
3. **Try to login or fetch data**
4. **Check for CORS errors:**
   - If you see CORS errors, verify `CORS_ALLOWED_ORIGINS` in WSGI file includes your Vercel URL
   - Reload PythonAnywhere web app after fixing

---

## 🐛 Common Issues & Quick Fixes

### Vercel Build Fails

**Error: "Module not found"**
- Check root directory is `optimum-frontend/frontend`
- Verify `package.json` exists

**Error: "Build timeout"**
- Try deploying again
- Check build logs for specific errors

### PythonAnywhere Issues

**Error: "No module named 'optimum_system'"**
- Check path in WSGI file is correct
- Verify virtual environment is activated

**Error: "Disk quota exceeded"**
- Free tier has limited space
- Use `--no-cache-dir` for pip installs
- Remove old projects if needed

**CORS Errors**
- Verify `CORS_ALLOWED_ORIGINS` in WSGI file includes your Vercel URL
- URL must include `https://`
- Reload web app after changes

**Static Files 404**
- Run `python manage.py collectstatic --noinput`
- Verify static files mapping in Web tab

---

## 📋 Quick Reference

### Your Deployment URLs

- **Frontend:** `https://your-project.vercel.app`
- **Backend API:** `https://YOUR-USERNAME.pythonanywhere.com/api`
- **Admin Panel:** `https://YOUR-USERNAME.pythonanywhere.com/admin/`

### Important Paths (PythonAnywhere)

- **Project:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend`
- **WSGI File:** `/var/www/YOUR_USERNAME_pythonanywhere_com_wsgi.py`

### Quick Commands (PythonAnywhere)

```bash
# Activate venv
source venv/bin/activate

# Run migrations
python manage.py migrate

# Collect static
python manage.py collectstatic --noinput

# Create superuser
python manage.py createsuperuser
```

---

## 🎉 Success!

If everything works:
- ✅ Frontend loads at Vercel URL
- ✅ Backend API responds
- ✅ Login works
- ✅ No CORS errors

**Your Optimum Smart System v2.0.0 is live! 🚀**

---

## 📚 Need More Help?

- **Detailed Vercel Guide:** `DEPLOY_V2.0.0_VERCEL.md`
- **Detailed PythonAnywhere Guide:** `DEPLOY_V2.0.0_PYTHONANYWHERE.md`
- **Full Checklist:** `DEPLOY_V2.0.0_CHECKLIST.md`

---

**Ready to deploy? Start with Part 1! 🚀**
