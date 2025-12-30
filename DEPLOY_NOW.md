# 🚀 Quick Deployment Guide - Deploy Now!

## ✅ Pre-Deployment Status

- ✅ Frontend build successful (tested locally)
- ✅ Backend ready for deployment
- ✅ Advanced frontend with cyberpunk theme configured

---

## 📦 Step 1: Deploy Frontend to Vercel

### Option A: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: Deploy advanced frontend with cyberpunk theme"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - **IMPORTANT:** Set Root Directory to: `optimum-frontend/frontend`

3. **Configure Build Settings:**
   - Framework: Vite (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install --legacy-peer-deps`

4. **Set Environment Variables:**
   In Vercel Dashboard → Settings → Environment Variables, add:
   ```
   VITE_API_URL=https://sherifrosas.pythonanywhere.com/api
   VITE_WS_URL=wss://sherifrosas.pythonanywhere.com/ws
   ```
   - Apply to: Production, Preview, Development (all three)

5. **Deploy:**
   - Click "Deploy"
   - Wait ~2-3 minutes for build

### Option B: Manual Deployment via Vercel CLI

```bash
cd optimum-frontend/frontend
npm install -g vercel
vercel --prod
```

---

## 🐍 Step 2: Deploy Backend to PythonAnywhere

### 2.1 Upload Code

**Using Git (Recommended):**
```bash
# On PythonAnywhere Bash Console
cd ~
git clone https://github.com/YOUR_USERNAME/Optimum-Smart-System-v.git
cd Optimum-Smart-System-v/optimum-backend
```

**Or upload via Files tab:**
1. Go to PythonAnywhere → Files
2. Upload `optimum-backend` folder

### 2.2 Install Dependencies

```bash
cd ~/Optimum-Smart-System-v/optimum-backend
pip3.11 install --user -r requirements.txt
```

### 2.3 Set Environment Variables

In PythonAnywhere → Web → Web app → Environment variables:
```
SECRET_KEY=your-secure-secret-key-here
DEBUG=False
ALLOWED_HOSTS=sherifrosas.pythonanywhere.com
DJANGO_ENV=production
CORS_ALLOWED_ORIGINS=https://your-vercel-url.vercel.app
```

**Generate SECRET_KEY:**
```bash
python -c "import secrets; print(secrets.token_urlsafe(50))"
```

### 2.4 Run Migrations

```bash
cd ~/Optimum-Smart-System-v/optimum-backend
python3.11 manage.py migrate
python3.11 manage.py collectstatic --noinput
```

### 2.5 Configure WSGI File

Go to PythonAnywhere → Web → WSGI configuration file:

```python
import sys
import os

path = '/home/sherifrosas/Optimum-Smart-System-v/optimum-backend'
if path not in sys.path:
    sys.path.insert(0, path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

**Replace `sherifrosas` with your PythonAnywhere username!**

### 2.6 Reload Web App

Click the green "Reload" button in PythonAnywhere Web tab.

---

## ✅ Step 3: Verify Deployment

### Backend Verification:
- ✅ Health: `https://sherifrosas.pythonanywhere.com/health/`
- ✅ API: `https://sherifrosas.pythonanywhere.com/api/`
- ✅ Admin: `https://sherifrosas.pythonanywhere.com/admin/`

### Frontend Verification:
- ✅ Visit your Vercel URL
- ✅ Check browser console (F12) for errors
- ✅ Test login/registration
- ✅ Verify API connection

---

## 🔧 Quick Commands Reference

### Backend (PythonAnywhere):
```bash
cd ~/Optimum-Smart-System-v/optimum-backend
python3.11 manage.py migrate
python3.11 manage.py collectstatic --noinput
python3.11 manage.py createsuperuser
```

### Frontend (Local Build Test):
```bash
cd optimum-frontend/frontend
npm run build
```

---

## 🆘 Troubleshooting

**Frontend build fails:**
- Check Vercel build logs
- Verify Root Directory is `optimum-frontend/frontend`
- Ensure environment variables are set

**Backend 500 error:**
- Check PythonAnywhere error logs
- Verify environment variables
- Run: `python3.11 manage.py check --deploy`

**CORS errors:**
- Add Vercel URL to `CORS_ALLOWED_ORIGINS` in backend
- Reload PythonAnywhere web app

---

**Ready to deploy! 🚀**

