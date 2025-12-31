# 🚀 Deployment Instructions - Command Center v2.0

**Version:** 2.0.0  
**Date:** December 31, 2025  
**Status:** Ready for Production

---

## 📋 Pre-Deployment Checklist

- [x] Command Center theme applied and tested
- [x] Role Selection page (main page) working
- [x] Login page styled correctly
- [x] Command Center dashboard functional
- [x] All unnecessary files archived
- [x] `.gitignore` updated
- [x] Environment variables documented

---

## 🎯 Deployment Targets

### Frontend: Vercel
- **Repository:** GitHub repository
- **Build Command:** `cd optimum-frontend/frontend && npm install && npm run build`
- **Output Directory:** `optimum-frontend/frontend/dist`
- **Root Directory:** `optimum-frontend/frontend`

### Backend: PythonAnywhere
- **Repository:** GitHub repository
- **Python Version:** 3.9+
- **WSGI File:** `optimum-backend/optimum_system/wsgi.py`
- **Static Files:** `optimum-backend/staticfiles/`

---

## 🔧 Environment Variables Setup

### Frontend (Vercel)
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add:
   ```
   VITE_API_URL=https://your-username.pythonanywhere.com/api
   VITE_WS_URL=wss://your-username.pythonanywhere.com/ws
   ```
   **Note:** Replace `your-username` with your actual PythonAnywhere username.

### Backend (PythonAnywhere)
1. Go to PythonAnywhere Dashboard → Web App → Environment Variables
2. Add:
   ```
   DJANGO_ENV=production
   DEBUG=False
   SECRET_KEY=[your-production-secret-key]
   ALLOWED_HOSTS=your-username.pythonanywhere.com
   CORS_ALLOWED_ORIGINS=https://[your-vercel-url]
   DATABASE_URL=[your-postgresql-url]
   ```
   **Note:** Replace `your-username` with your actual PythonAnywhere username.

---

## 📦 Deployment Steps

### Step 1: Commit Current Version
```bash
git add .
git commit -m "v2.0.0: Command Center theme, deployment ready"
git tag v2.0.0
git push origin main
git push origin v2.0.0
```

### Step 2: Deploy Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set Root Directory: `optimum-frontend/frontend`
3. Set Build Command: `npm run build`
4. Set Output Directory: `dist`
5. Add environment variables
6. Deploy

### Step 3: Deploy Backend (PythonAnywhere)
1. Clone repository: `git clone [repo-url]`
2. Navigate: `cd optimum-backend`
3. Install dependencies: `pip3.9 install --user -r requirements.txt`
4. Run migrations: `python3.9 manage.py migrate`
5. Collect static: `python3.9 manage.py collectstatic --noinput`
6. Configure WSGI file to point to `optimum-backend/optimum_system/wsgi.py`
7. Reload web app

### Step 4: Verify Deployment
- [ ] Frontend loads at Vercel URL
- [ ] Role Selection page displays correctly
- [ ] Login page works
- [ ] API calls succeed
- [ ] Command Center dashboard loads
- [ ] Real-time features work

---

## 🗄️ Files Excluded from Deployment

The following are archived and excluded via `.gitignore`:
- `archive/` - All archived files
- Development scripts (`.ps1`, `.bat`, `.sh` in root)
- Test documentation files
- Screenshots and images
- Old theme files

---

## ✅ Post-Deployment

1. Test all user flows
2. Verify API connectivity
3. Check real-time features
4. Monitor error logs
5. Update DNS if needed

---

## 📞 Support

- **Documentation:** See `README.md` and `AI_ROADMAP.md`
- **Issues:** Check deployment logs in Vercel/PythonAnywhere
- **Backup:** All code is in GitHub repository

---

**Ready to Deploy! 🚀**
