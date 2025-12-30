# 🚀 Quick Deployment Guide - Deploy Now!

This guide will help you deploy the Optimum Smart System to production in **under 15 minutes**.

## 📁 Project Structure

```
Optimum-Smart-System/
├── optimum-backend/          # Django backend
│   ├── manage.py
│   ├── requirements.txt
│   └── optimum_system/
└── optimum-frontend/
    └── frontend/              # Vite React frontend (nested!)
        ├── package.json
        ├── src/
        └── dist/              # Build output
```

**Important:** The frontend is nested in `optimum-frontend/frontend/` - remember this for Vercel configuration!

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All tests pass locally (`cd optimum-backend && pytest`)
- [ ] Frontend builds successfully (`cd optimum-frontend/frontend && npm run build`)
- [ ] You have accounts for:
  - [ ] PythonAnywhere (backend) - [Sign up](https://www.pythonanywhere.com)
  - [ ] Vercel (frontend) - [Sign up](https://vercel.com)
  - [ ] GitHub (repository) - Your code is pushed

---

## 🔵 Step 1: Deploy Backend to PythonAnywhere

### 1.1 Upload Your Code

**Option A: Using Git (Recommended)**
```bash
# On PythonAnywhere Bash Console
cd ~
git clone https://github.com/YOUR_USERNAME/Optimum-Smart-System.git
cd Optimum-Smart-System/optimum-backend
```

**Option B: Using Files Tab**
1. Go to PythonAnywhere → Files tab
2. Navigate to `/home/sherifrissas/`
3. Upload the entire `optimum-backend` folder

### 1.2 Install Dependencies

```bash
cd ~/Optimum-Smart-System/optimum-backend
# Or if uploaded directly:
# cd ~/optimum-backend

pip3.11 install --user -r requirements.txt
```

### 1.3 Set Environment Variables

Go to **PythonAnywhere → Web → Web app → Environment variables** and add:

```
SECRET_KEY=your-very-secure-secret-key-here-generate-with-openssl-rand-hex-32
DEBUG=False
ALLOWED_HOSTS=sherifrissas.pythonanywhere.com
```

**Generate a secure SECRET_KEY:**
```bash
# On your local machine or PythonAnywhere console
python -c "import secrets; print(secrets.token_urlsafe(50))"
```

**Important Notes:**
- Replace `sherifrissas` with your actual PythonAnywhere username
- The `SECRET_KEY` should be a long random string (50+ characters)
- Never commit the `SECRET_KEY` to Git
- `DEBUG=False` is required for production security

### 1.4 Run Migrations

```bash
cd ~/Optimum-Smart-System/optimum-backend
# Or if uploaded directly:
# cd ~/optimum-backend

# Run database migrations
python3.11 manage.py migrate

# Collect static files (CSS, JS, images)
python3.11 manage.py collectstatic --noinput

# Create admin superuser (follow prompts)
python3.11 manage.py createsuperuser
```

**What each command does:**
- `migrate` - Creates/updates database tables
- `collectstatic` - Gathers all static files for serving
- `createsuperuser` - Creates an admin account (you'll be prompted for username/email/password)

### 1.5 Configure WSGI File

Go to **PythonAnywhere → Web → Web app → WSGI configuration file**

Replace the entire content with:

```python
import sys
import os

# Update this path to match your actual directory structure
path = '/home/sherifrissas/Optimum-Smart-System/optimum-backend'
# Or if uploaded directly (not using Git):
# path = '/home/sherifrissas/optimum-backend'

if path not in sys.path:
    sys.path.insert(0, path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

**Important:**
- Replace `sherifrissas` with your PythonAnywhere username
- The path must match where you uploaded/cloned the code
- After saving, you'll need to reload the web app

### 1.6 Reload Web App

Click the **green "Reload"** button in PythonAnywhere Web tab.

### 1.7 Verify Backend

Test these URLs:
- ✅ Health: `https://sherifrissas.pythonanywhere.com/health/`
- ✅ API Docs: `https://sherifrissas.pythonanywhere.com/api/docs/`
- ✅ Admin: `https://sherifrissas.pythonanywhere.com/admin/`

---

## 🟢 Step 2: Deploy Frontend to Vercel

### 2.1 Connect Repository

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository: `Optimum-Smart-System`

### 2.2 Configure Project Settings

**Method 1: Using Root Directory (Recommended)**

1. Go to **Vercel Dashboard → Your Project → Settings → General**
2. Scroll to **"Root Directory"** section
3. Click **"Edit"** and set to: `optimum-frontend/frontend`
4. Click **"Save"**
5. Vercel will auto-detect:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

**Method 2: Manual Configuration**

If Root Directory doesn't work, manually set:
- **Framework Preset:** Vite
- **Root Directory:** `optimum-frontend/frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install --legacy-peer-deps`

**Note:** The `--legacy-peer-deps` flag helps resolve dependency conflicts.

### 2.3 Set Environment Variables

1. Go to **Vercel → Your Project → Settings → Environment Variables**
2. Add these variables:

```
VITE_API_URL=https://sherifrissas.pythonanywhere.com/api
VITE_WS_URL=wss://sherifrissas.pythonanywhere.com/ws
```

3. For each variable:
   - **Value:** Enter the URL (replace `sherifrissas` with your PythonAnywhere username)
   - **Environment:** Select **Production**, **Preview**, and **Development** (check all three)
   - Click **"Save"**

**Important Notes:**
- ✅ This project uses **Vite**, so environment variables **must** be prefixed with `VITE_`
- ❌ Do **NOT** use `REACT_APP_` prefix (that's for Create React App)
- After adding variables, you need to **redeploy** for them to take effect
- The WebSocket URL uses `wss://` (secure WebSocket) for HTTPS connections

### 2.4 Deploy

Click **"Deploy"** and wait for the build to complete (~2-3 minutes).

### 2.5 Verify Frontend

1. ✅ Visit your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
2. ✅ Open browser DevTools (F12) → Console tab
3. ✅ Check for any errors
4. ✅ Verify environment variables are loaded:
   - In Console, type: `console.log(import.meta.env.VITE_API_URL)`
   - Should show your API URL
5. ✅ Test login/registration
6. ✅ Verify API connection works (check Network tab for API calls)

**Troubleshooting:**
- If environment variables show `undefined`, make sure you redeployed after adding them
- If API calls fail, check CORS settings in backend

---

## ✅ Step 3: Post-Deployment Verification

### Backend Checks

```bash
# Test health endpoint
curl https://sherifrissas.pythonanywhere.com/health/

# Test API endpoint
curl https://sherifrissas.pythonanywhere.com/api/orders/

# Check admin panel
# Visit: https://sherifrissas.pythonanywhere.com/admin/
```

### Frontend Checks

1. ✅ Open your Vercel URL
2. ✅ Register a new user
3. ✅ Login
4. ✅ Create an order
5. ✅ Check API calls in browser DevTools → Network tab

### CORS Verification

If you see CORS errors in the browser console:

1. **Get your Vercel domain:**
   - It will be something like: `https://your-project.vercel.app`
   - Or: `https://your-project-git-main-username.vercel.app`

2. **Update backend CORS settings:**
   ```bash
   # On PythonAnywhere, edit the settings file
   cd ~/Optimum-Smart-System/optimum-backend
   nano optimum_system/settings.py
   ```
   
   Find `CORS_ALLOWED_ORIGINS` and add your Vercel URL:
   ```python
   CORS_ALLOWED_ORIGINS = [
       "https://your-project.vercel.app",
       "https://your-project-git-main-username.vercel.app",
       # ... other origins
   ]
   ```

3. **Reload PythonAnywhere web app:**
   - Go to PythonAnywhere → Web tab
   - Click the green **"Reload"** button

4. **Alternative: Use environment variable:**
   - In PythonAnywhere environment variables, you can also set:
   ```
   CORS_ALLOWED_ORIGINS=https://your-project.vercel.app,https://another-domain.com
   ```

---

## 🔧 Troubleshooting

### Backend Issues

**500 Internal Server Error:**
```bash
# Check error logs
tail -f /var/log/sherifrissas.pythonanywhere.com.error.log

# Run Django checks
python3.11 manage.py check --deploy
```

**Static Files Not Loading:**
```bash
python3.11 manage.py collectstatic --noinput
```

**Database Errors:**
```bash
python3.11 manage.py migrate
python3.11 manage.py showmigrations
```

### Frontend Issues

**Build Fails:**
```bash
cd optimum-frontend/frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

**API Connection Failed:**
1. Verify environment variables in Vercel:
   - Go to Settings → Environment Variables
   - Ensure `VITE_API_URL` and `VITE_WS_URL` are set
   - Ensure they're applied to Production/Preview/Development
   - **Redeploy** after adding/updating variables

2. Check browser console:
   - Open DevTools (F12) → Console
   - Look for CORS errors or network errors
   - Verify API URL: `console.log(import.meta.env.VITE_API_URL)`

3. Check CORS settings:
   - Ensure your Vercel domain is in backend `CORS_ALLOWED_ORIGINS`
   - Reload PythonAnywhere web app after changes

4. Common mistakes:
   - ❌ Using `REACT_APP_` prefix (wrong - this is Vite, not CRA)
   - ❌ Forgetting to redeploy after adding env vars
   - ❌ Using `http://` instead of `https://` for production
   - ❌ Using `ws://` instead of `wss://` for WebSocket

**WebSocket Limitations on PythonAnywhere:**
- ⚠️ PythonAnywhere free tier doesn't support WebSockets
- If WebSocket features don't work, this is expected
- Consider upgrading to a paid plan or using Railway/Render for WebSocket support

---

## 🔐 Security Checklist

After deployment, verify:

- [ ] `DEBUG=False` in production (check PythonAnywhere env vars)
- [ ] `SECRET_KEY` is set in environment variables (not hardcoded)
- [ ] `ALLOWED_HOSTS` includes your PythonAnywhere domain
- [ ] HTTPS/SSL is enabled (automatic on PythonAnywhere/Vercel)
- [ ] CORS is configured correctly (only your frontend domain)
- [ ] Admin panel is accessible and secured with strong password
- [ ] No sensitive data in Git repository
- [ ] Environment variables are not exposed in frontend code
- [ ] API endpoints require authentication where needed

**Quick Security Check:**
```bash
# Test that DEBUG is False
curl https://sherifrissas.pythonanywhere.com/health/
# Should NOT show detailed error pages if something breaks

# Verify admin is protected
# Try accessing /admin/ - should require login
```

---

## 📊 Monitoring Setup

### 1. Uptime Monitoring

The GitHub Actions workflow (`.github/workflows/uptime-monitor.yml`) automatically monitors your backend every 5 minutes.

**To enable:**
- Ensure the workflow file exists in `.github/workflows/`
- Push to GitHub - it will run automatically
- Check Actions tab in GitHub to see monitoring status

### 2. Error Tracking (Optional)

**Set up Sentry for error tracking:**
1. Create account at [sentry.io](https://sentry.io)
2. Create a new Django project in Sentry
3. Copy the DSN (Data Source Name)
4. Add to PythonAnywhere environment variables:
   ```
   SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
   ```
5. Update `optimum-backend/optimum_system/settings.py` to use Sentry
6. Reload PythonAnywhere web app

### 3. PythonAnywhere Logs

**View error logs:**
```bash
# On PythonAnywhere console
tail -f /var/log/sherifrissas.pythonanywhere.com.error.log
```

**View access logs:**
```bash
tail -f /var/log/sherifrissas.pythonanywhere.com.access.log
```

---

## 🎉 You're Done!

Your system is now live:
- **Backend:** `https://sherifrissas.pythonanywhere.com`
- **Frontend:** `https://your-project.vercel.app`

### Next Steps:
1. Test all features end-to-end
2. Set up automated backups
3. Configure monitoring alerts
4. Share your deployment URL!

---

## 📞 Need Help?

- Check `DEPLOYMENT_GUIDE.md` for detailed instructions
- Review `DEPLOYMENT_STATUS.md` for current status
- Check PythonAnywhere error logs (see Monitoring section)
- Check Vercel deployment logs (in Vercel dashboard → Deployments)

## 📝 Quick Reference

### Backend URLs (PythonAnywhere)
- Health Check: `https://YOUR_USERNAME.pythonanywhere.com/health/`
- API Docs: `https://YOUR_USERNAME.pythonanywhere.com/api/docs/`
- Admin Panel: `https://YOUR_USERNAME.pythonanywhere.com/admin/`
- API Base: `https://YOUR_USERNAME.pythonanywhere.com/api/`

### Frontend URLs (Vercel)
- Production: `https://your-project.vercel.app`
- Preview: `https://your-project-git-branch-username.vercel.app`

### Common Commands

**Backend (PythonAnywhere Console):**
```bash
cd ~/Optimum-Smart-System/optimum-backend
python3.11 manage.py migrate
python3.11 manage.py collectstatic --noinput
python3.11 manage.py createsuperuser
```

**Frontend (Local Testing):**
```bash
cd optimum-frontend/frontend
npm install --legacy-peer-deps
npm run build
npm run dev  # For local development
```

---

## 🚨 Important Notes

### WebSocket Limitations
- ⚠️ **PythonAnywhere free tier does NOT support WebSockets**
- If your app uses real-time features (WebSocket), they won't work on PythonAnywhere
- Consider using Railway, Render, or Heroku for WebSocket support
- Or upgrade to PythonAnywhere paid plan

### Domain Names
- Replace `sherifrissas` with your actual PythonAnywhere username throughout this guide
- Your PythonAnywhere domain will be: `https://YOUR_USERNAME.pythonanywhere.com`
- Your Vercel domain will be provided after first deployment

### Environment Variables
- **Backend (PythonAnywhere):** Set in Web app → Environment variables
- **Frontend (Vercel):** Set in Settings → Environment variables
- **Must redeploy** after changing environment variables
- Frontend env vars must start with `VITE_` (Vite requirement)

---

*Last Updated: 2024*
*Ready to deploy in 15 minutes!*

**Need help?** Check the troubleshooting section above or review `DEPLOYMENT_GUIDE.md` for detailed instructions.

