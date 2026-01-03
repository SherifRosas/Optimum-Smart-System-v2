# 🚀 Deploy Optimum Smart System v2.0.0 - New PythonAnywhere Deployment

**Version:** 2.0.0  
**Release Date:** January 1, 2026  
**Status:** Production Ready

---

## 📋 Prerequisites

- PythonAnywhere account (free tier or paid)
- GitHub account with repository access
- Domain name (optional, PythonAnywhere provides free subdomain)

---

## 🎯 Step 1: Set Up New PythonAnywhere Account/Project

### Option A: New PythonAnywhere Account

1. **Create Account**
   - Go to: https://www.pythonanywhere.com/
   - Sign up for free account (or upgrade to paid)

2. **Access Dashboard**
   - Log in to your account
   - You'll see the dashboard with various tabs

### Option B: Use Existing Account (New Project)

- Use a different directory path for the new deployment

---

## 🔧 Step 2: Clone Repository

### Via Bash Console

1. **Open Bash Console**
   - Click **"Consoles"** tab
   - Click **"Bash"** to open a new console

2. **Navigate to Home Directory**
   ```bash
   cd ~
   ```

3. **Clone Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Optimum-Smart-System.git Optimum-Smart-System-v2
   ```
   Replace `YOUR-USERNAME` with your GitHub username.

   **Or if using the `-v` version:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Optimum-Smart-System.git Optimum-Smart-System-v
   ```

4. **Navigate to Backend**
   ```bash
   cd ~/Optimum-Smart-System-v2/optimum-backend
   # or
   cd ~/Optimum-Smart-System-v/optimum-backend
   ```

---

## 🐍 Step 3: Set Up Python Environment

### Create Virtual Environment

1. **In Bash Console:**
   ```bash
   cd ~/Optimum-Smart-System-v2/optimum-backend
   # or
   cd ~/Optimum-Smart-System-v/optimum-backend
   
   # Create virtual environment
   python3.10 -m venv venv
   # or python3.9, python3.11, etc. (check available versions)
   ```

2. **Activate Virtual Environment**
   ```bash
   source venv/bin/activate
   ```

3. **Upgrade pip**
   ```bash
   pip install --upgrade pip
   ```

4. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

   **Note:** If you hit disk quota issues, you may need to:
   - Upgrade to paid account, or
   - Remove old projects, or
   - Use `--no-cache-dir` flag:
     ```bash
     pip install --no-cache-dir -r requirements.txt
     ```

---

## 🗄️ Step 4: Set Up Database

### For SQLite (Free Tier - Default)

1. **Run Migrations**
   ```bash
   python manage.py migrate
   ```

2. **Create Superuser** (optional)
   ```bash
   python manage.py createsuperuser
   ```

### For PostgreSQL (Paid Tier - Recommended)

1. **Create Database**
   - Go to **"Databases"** tab
   - Click **"Create database"**
   - Note the database credentials

2. **Update Environment Variables** (see Step 5)
   - Set `DATABASE_URL` with PostgreSQL connection string

3. **Run Migrations**
   ```bash
   python manage.py migrate
   ```

---

## ⚙️ Step 5: Configure Environment Variables

### Option A: Via WSGI File (Recommended for PythonAnywhere)

1. **Go to Web Tab**
   - Click **"Web"** tab in dashboard
   - Click **"Add a new web app"** (if first time)
   - Or edit existing web app

2. **Edit WSGI Configuration File**
   - Click on the WSGI configuration file link
   - It will be something like: `/var/www/YOUR_USERNAME_pythonanywhere_com_wsgi.py`

3. **Replace Content with:**
   ```python
   import os
   import sys

   # Set environment variables BEFORE importing Django
   os.environ['DJANGO_ENV'] = 'production'
   os.environ['DEBUG'] = 'False'
   os.environ['SECRET_KEY'] = 'YOUR-SECRET-KEY-HERE'  # Generate a secure key
   os.environ['ALLOWED_HOSTS'] = 'YOUR-USERNAME.pythonanywhere.com'
   os.environ['CORS_ALLOWED_ORIGINS'] = 'https://YOUR-VERCEL-URL.vercel.app,https://YOUR-CUSTOM-DOMAIN.com'
   os.environ['DATABASE_URL'] = 'sqlite:///home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/db.sqlite3'
   # Or for PostgreSQL:
   # os.environ['DATABASE_URL'] = 'postgresql://USER:PASSWORD@HOST/DBNAME'

   # Set project path
   path = '/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend'
   # or
   # path = '/home/YOUR-USERNAME/Optimum-Smart-System-v/optimum-backend'
   
   if path not in sys.path:
       sys.path.append(path)

   os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings'

   from django.core.wsgi import get_wsgi_application
   application = get_wsgi_application()
   ```

4. **Replace Placeholders:**
   - `YOUR-USERNAME` → Your PythonAnywhere username
   - `YOUR-SECRET-KEY-HERE` → Generate a secure Django secret key
   - `YOUR-VERCEL-URL.vercel.app` → Your Vercel frontend URL
   - `YOUR-CUSTOM-DOMAIN.com` → Your custom domain (if any)

### Option B: Via .env File (Alternative)

1. **Create .env file**
   ```bash
   cd ~/Optimum-Smart-System-v2/optimum-backend
   nano .env
   ```

2. **Add environment variables:**
   ```env
   DJANGO_ENV=production
   DEBUG=False
   SECRET_KEY=your-secret-key-here
   ALLOWED_HOSTS=YOUR-USERNAME.pythonanywhere.com
   CORS_ALLOWED_ORIGINS=https://YOUR-VERCEL-URL.vercel.app
   DATABASE_URL=sqlite:///home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/db.sqlite3
   ```

3. **Update WSGI file** to load .env:
   ```python
   from dotenv import load_dotenv
   load_dotenv('/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/.env')
   ```

---

## 🌐 Step 6: Configure Web App

1. **Go to Web Tab**
   - Click **"Web"** tab

2. **Configure Web App:**
   - **Source code:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend`
   - **Working directory:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend`
   - **WSGI configuration file:** (auto-detected or specify manually)

3. **Static Files Configuration:**
   - Click **"Static files"** section
   - Add mapping:
     - **URL:** `/static/`
     - **Directory:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/staticfiles/`

4. **Media Files Configuration** (if needed):
   - Add mapping:
     - **URL:** `/media/`
     - **Directory:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/media/`

---

## 📦 Step 7: Collect Static Files

1. **In Bash Console:**
   ```bash
   cd ~/Optimum-Smart-System-v2/optimum-backend
   source venv/bin/activate
   python manage.py collectstatic --noinput
   ```

---

## 🔄 Step 8: Reload Web App

1. **Go to Web Tab**
2. **Click green "Reload" button**
3. **Wait for reload** (may take 30-60 seconds)

---

## ✅ Step 9: Verify Deployment

1. **Test API Endpoint**
   - Visit: `https://YOUR-USERNAME.pythonanywhere.com/api/`
   - Should see API response or documentation

2. **Test Admin Panel**
   - Visit: `https://YOUR-USERNAME.pythonanywhere.com/admin/`
   - Login with superuser credentials

3. **Check Logs**
   - Go to **"Web"** tab
   - Click **"Error log"** link
   - Review for any errors

4. **Test CORS**
   - From your Vercel frontend, make an API call
   - Check browser console for CORS errors
   - If CORS errors, verify `CORS_ALLOWED_ORIGINS` in WSGI file

---

## 🔐 Step 10: Generate Secure Secret Key

**Never use the example secret key!**

1. **Generate Secret Key:**
   ```bash
   python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
   ```

2. **Update WSGI file** with the generated key

3. **Reload web app**

---

## 🐛 Troubleshooting

### Import Errors

**Error: "No module named 'optimum_system'"**
- Verify `path` in WSGI file is correct
- Check virtual environment is activated
- Ensure you're in the correct directory

### Static Files Not Loading

**404 on static files**
- Run `python manage.py collectstatic --noinput`
- Verify static files mapping in Web tab
- Check static files directory exists

### CORS Errors

**"Access-Control-Allow-Origin" error**
- Verify `CORS_ALLOWED_ORIGINS` includes your Vercel URL
- Check URL format (must include `https://`)
- Reload web app after changes

### Database Errors

**"OperationalError: no such table"**
- Run migrations: `python manage.py migrate`
- Check database path in `DATABASE_URL`
- Verify database file permissions

### Disk Quota Exceeded

**"Disk quota exceeded"**
- Free tier has limited space
- Remove old projects/files
- Upgrade to paid tier
- Use `--no-cache-dir` for pip installs

### Module Not Found

**"ModuleNotFoundError"**
- Activate virtual environment: `source venv/bin/activate`
- Install dependencies: `pip install -r requirements.txt`
- Check Python version compatibility

---

## 📝 Post-Deployment Checklist

- [ ] Repository cloned successfully
- [ ] Virtual environment created and activated
- [ ] Dependencies installed
- [ ] Database migrations run
- [ ] Superuser created (optional)
- [ ] Environment variables configured in WSGI file
- [ ] Static files collected
- [ ] Web app configured
- [ ] Static files mapping added
- [ ] Web app reloaded
- [ ] API endpoint accessible
- [ ] Admin panel accessible
- [ ] CORS configured correctly
- [ ] No errors in error log
- [ ] Frontend can connect to backend

---

## 🔄 Updating Deployment

### To update the deployment:

1. **Pull Latest Changes**
   ```bash
   cd ~/Optimum-Smart-System-v2/optimum-backend
   git pull origin master
   ```

2. **Activate Virtual Environment**
   ```bash
   source venv/bin/activate
   ```

3. **Install New Dependencies** (if any)
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Migrations** (if any)
   ```bash
   python manage.py migrate
   ```

5. **Collect Static Files** (if changed)
   ```bash
   python manage.py collectstatic --noinput
   ```

6. **Reload Web App**
   - Go to **"Web"** tab
   - Click **"Reload"** button

---

## 📊 Monitoring

### View Error Logs

1. **Go to Web Tab**
2. **Click "Error log"** link
3. **Review errors** and fix as needed

### View Server Logs

1. **Go to Consoles Tab**
2. **Open Bash console**
3. **Check application logs** (if configured)

---

## 🔐 Security Notes

- ✅ Use strong `SECRET_KEY` (never commit to Git)
- ✅ Set `DEBUG=False` in production
- ✅ Configure `ALLOWED_HOSTS` correctly
- ✅ Use HTTPS (automatic on PythonAnywhere)
- ✅ Restrict `CORS_ALLOWED_ORIGINS` to your frontend only
- ⚠️ Never commit `.env` files or secrets
- ⚠️ Keep WSGI file secure (contains secrets)

---

## 📚 Additional Resources

- [PythonAnywhere Documentation](https://help.pythonanywhere.com/)
- [Django Deployment Guide](https://docs.djangoproject.com/en/stable/howto/deployment/)
- [Django on PythonAnywhere](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/)

---

## 🎯 Quick Reference

### Important Paths
- **Project:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend`
- **Virtual Env:** `/home/YOUR-USERNAME/Optimum-Smart-System-v2/optimum-backend/venv`
- **WSGI File:** `/var/www/YOUR_USERNAME_pythonanywhere_com_wsgi.py`

### Common Commands
```bash
# Activate venv
source venv/bin/activate

# Run migrations
python manage.py migrate

# Collect static
python manage.py collectstatic --noinput

# Create superuser
python manage.py createsuperuser

# Django shell
python manage.py shell
```

---

**Version 2.0.0 - Ready for Production! 🚀**
