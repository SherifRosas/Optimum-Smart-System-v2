# 🚀 Deployment Status & Instructions

**Date:** December 2024  
**Status:** Local servers starting | Deployment ready

---

## ✅ Local Development Status

### Servers Started
- **Backend:** Starting on http://localhost:8000
- **Frontend:** Starting on http://localhost:3000
- **Admin Panel:** http://localhost:8000/admin/

### Setup Completed
- ✅ Dependencies installed
- ✅ Database migrations applied
- ✅ Environment configured
- ✅ Servers launched in separate windows

### Access URLs
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Admin Panel:** http://localhost:8000/admin/

**Note:** If servers don't respond immediately, wait 10-15 seconds for them to fully start.

---

## 📦 Production Deployment

### Current Production Status

**Frontend:** ✅ Live on Vercel
- URL: https://optimum-smart-system-navy.vercel.app
- Auto-deploys on push to main branch

**Backend:** ✅ Live on PythonAnywhere
- URL: https://sherifrosas.pythonanywhere.com
- API: https://sherifrosas.pythonanywhere.com/api

---

## 🔄 Deploying Updates

### Frontend Deployment (Vercel)

**Automatic Deployment:**
1. Push changes to GitHub main branch
2. Vercel automatically builds and deploys
3. Preview deployments for PRs

**Manual Deployment:**
```bash
cd optimum-frontend
npm run build
# Then push to trigger Vercel deployment
```

**Environment Variables (Vercel Dashboard):**
```
VITE_API_URL=https://sherifrosas.pythonanywhere.com/api
VITE_WS_URL=wss://sherifrosas.pythonanywhere.com/ws
```

**Build Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: `optimum-frontend`

---

### Backend Deployment (PythonAnywhere)

**Steps:**

1. **SSH into PythonAnywhere**
   ```bash
   ssh username@ssh.pythonanywhere.com
   ```

2. **Navigate to project**
   ```bash
   cd ~/Optimum-Smart-System-v/optimum-backend
   ```

3. **Pull latest changes**
   ```bash
   git pull origin main
   ```

4. **Activate virtual environment**
   ```bash
   source venv/bin/activate
   ```

5. **Install/Update dependencies**
   ```bash
   pip install -r requirements.txt
   ```

6. **Run migrations**
   ```bash
   python manage.py migrate
   ```

7. **Collect static files**
   ```bash
   python manage.py collectstatic --noinput
   ```

8. **Reload web app**
   - Go to PythonAnywhere Dashboard
   - Click "Web" tab
   - Click "Reload" button for your web app

**Environment Variables (PythonAnywhere Dashboard):**
```
DJANGO_ENV=production
DEBUG=False
SECRET_KEY=your-production-secret-key-here
ALLOWED_HOSTS=sherifrosas.pythonanywhere.com
CORS_ALLOWED_ORIGINS=https://optimum-smart-system-navy.vercel.app
ADMIN_EMAIL=sherifrosas.ai@gmail.com
```

---

## 🔐 Security Checklist

Before deploying to production:

- [ ] Change `SECRET_KEY` to a strong random value
- [ ] Set `DEBUG=False` in production
- [ ] Update `ALLOWED_HOSTS` with production domain
- [ ] Configure `CORS_ALLOWED_ORIGINS` with frontend URL
- [ ] Use strong database credentials
- [ ] Enable HTTPS (automatic on Vercel/PythonAnywhere)
- [ ] Review and update admin credentials
- [ ] Set up monitoring (Sentry recommended)
- [ ] Configure backup strategy

---

## 🧪 Pre-Deployment Testing

### Local Testing
```bash
# Backend tests
cd optimum-backend
pytest

# Frontend tests
cd optimum-frontend
npm test
npm run type-check
npm run build
```

### Production Testing Checklist
- [ ] Test authentication flow
- [ ] Test API endpoints
- [ ] Test WebSocket connections
- [ ] Verify CORS configuration
- [ ] Test admin panel access
- [ ] Verify static files loading
- [ ] Test on mobile devices
- [ ] Check error handling

---

## 📊 Monitoring

### Recommended Tools
- **Sentry** - Error tracking (already configured)
- **Vercel Analytics** - Frontend analytics
- **PythonAnywhere Logs** - Backend logs

### Check Logs
**Vercel:**
- Dashboard → Project → Logs

**PythonAnywhere:**
- Dashboard → Web → Error log / Server log

---

## 🔄 Rollback Procedure

### Frontend (Vercel)
1. Go to Vercel Dashboard
2. Select project
3. Go to "Deployments"
4. Find previous working deployment
5. Click "..." → "Promote to Production"

### Backend (PythonAnywhere)
1. SSH into PythonAnywhere
2. Navigate to project directory
3. `git checkout <previous-commit-hash>`
4. Run migrations if needed: `python manage.py migrate`
5. Reload web app in dashboard

---

## 🆘 Troubleshooting

### Common Issues

**Backend not responding:**
- Check PythonAnywhere web app is running
- Check error logs in dashboard
- Verify environment variables
- Check database connection

**Frontend build fails:**
- Check Vercel build logs
- Verify environment variables
- Check for TypeScript errors: `npm run type-check`
- Verify all dependencies installed

**CORS errors:**
- Verify `CORS_ALLOWED_ORIGINS` includes frontend URL
- Check backend CORS middleware is enabled
- Verify frontend API URL is correct

**Database errors:**
- Run migrations: `python manage.py migrate`
- Check database connection string
- Verify database exists and is accessible

---

## 📝 Deployment Notes

### Recent Changes
- Settings refactored to modular structure
- Environment variables configured
- CI/CD pipeline added
- Documentation organized

### Next Steps
1. Complete TypeScript migration
2. Expand test coverage
3. Set up monitoring
4. Generate API documentation

---

## 🔗 Quick Links

- **Frontend:** https://optimum-smart-system-navy.vercel.app
- **Backend API:** https://sherifrosas.pythonanywhere.com/api
- **Admin Panel:** https://sherifrosas.pythonanywhere.com/admin/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **PythonAnywhere Dashboard:** https://www.pythonanywhere.com/user/sherifrosas/webapps/

---

**Last Updated:** December 2024  
**Maintained By:** Development Team

