# ✅ Deployment Checklist - Version 2.0.0

**Quick reference checklist for deploying Optimum Smart System v2.0.0**

---

## 🎯 Pre-Deployment

- [ ] Code is committed and pushed to GitHub
- [ ] Version 2.0.0 is tagged (optional but recommended)
- [ ] All tests pass locally
- [ ] Environment variables documented
- [ ] Backend API URL ready

---

## 🚀 Vercel Deployment (Frontend)

### Setup
- [ ] Create new Vercel project
- [ ] Connect GitHub repository
- [ ] Set root directory: `optimum-frontend/frontend`
- [ ] Verify build command: `npm run build`
- [ ] Verify output directory: `dist`

### Environment Variables
- [ ] `VITE_API_URL` set to backend URL
- [ ] `VITE_WS_URL` set to WebSocket URL (optional)
- [ ] Variables set for Production, Preview, and Development

### Configuration
- [ ] `vercel.json` exists and is correct
- [ ] Framework preset: Vite
- [ ] Install command: `npm install --legacy-peer-deps --force`

### Deployment
- [ ] Initial deployment successful
- [ ] Build logs show no errors
- [ ] Application accessible at Vercel URL

### Verification
- [ ] Role Selection page loads at root (`/`)
- [ ] Login functionality works
- [ ] API calls succeed (check Network tab)
- [ ] No console errors
- [ ] Mobile responsive design works

---

## 🐍 PythonAnywhere Deployment (Backend)

### Setup
- [ ] PythonAnywhere account ready
- [ ] Repository cloned to PythonAnywhere
- [ ] Virtual environment created
- [ ] Dependencies installed (`pip install -r requirements.txt`)

### Database
- [ ] Database configured (SQLite or PostgreSQL)
- [ ] Migrations run (`python manage.py migrate`)
- [ ] Superuser created (optional)

### Configuration
- [ ] WSGI file configured with environment variables
- [ ] `SECRET_KEY` generated and set
- [ ] `ALLOWED_HOSTS` set correctly
- [ ] `CORS_ALLOWED_ORIGINS` includes Vercel URL
- [ ] `DATABASE_URL` configured

### Static Files
- [ ] Static files collected (`python manage.py collectstatic`)
- [ ] Static files mapping configured in Web tab
- [ ] Media files mapping configured (if needed)

### Web App
- [ ] Web app created/configured
- [ ] Source code path set correctly
- [ ] Working directory set correctly
- [ ] WSGI configuration file set

### Deployment
- [ ] Web app reloaded
- [ ] No errors in error log
- [ ] API endpoint accessible

### Verification
- [ ] API responds at `/api/`
- [ ] Admin panel accessible at `/admin/`
- [ ] CORS configured correctly
- [ ] Frontend can connect to backend
- [ ] No CORS errors in browser console

---

## 🔗 Integration Testing

### Frontend ↔ Backend
- [ ] Frontend can authenticate with backend
- [ ] API calls work from frontend
- [ ] WebSocket connection works (if applicable)
- [ ] File uploads work (if applicable)
- [ ] Real-time features work (if applicable)

### Cross-Origin
- [ ] No CORS errors
- [ ] Cookies/sessions work (if applicable)
- [ ] CSRF protection configured

---

## 🔐 Security Checklist

### Frontend (Vercel)
- [ ] No sensitive data in code
- [ ] Environment variables encrypted
- [ ] HTTPS enabled (automatic on Vercel)

### Backend (PythonAnywhere)
- [ ] `DEBUG=False` in production
- [ ] Strong `SECRET_KEY` used
- [ ] `ALLOWED_HOSTS` restricted
- [ ] `CORS_ALLOWED_ORIGINS` restricted to frontend only
- [ ] `CSRF_TRUSTED_ORIGINS` matches CORS settings
- [ ] Database credentials secure
- [ ] No secrets in Git repository

---

## 📊 Post-Deployment

### Monitoring
- [ ] Error logs reviewed
- [ ] Performance checked
- [ ] User access tested

### Documentation
- [ ] Deployment URLs documented
- [ ] Environment variables documented
- [ ] Access credentials secured

### Backup
- [ ] Database backup created (if applicable)
- [ ] Configuration backed up
- [ ] Deployment notes saved

---

## 🆘 Troubleshooting Reference

### Common Issues

**Vercel Build Fails**
- Check `package.json` dependencies
- Verify root directory is correct
- Check build logs for specific errors

**PythonAnywhere Import Errors**
- Verify path in WSGI file
- Check virtual environment is activated
- Ensure dependencies are installed

**CORS Errors**
- Verify `CORS_ALLOWED_ORIGINS` includes frontend URL
- Check URL format (must include `https://`)
- Reload web app after changes

**Static Files 404**
- Run `collectstatic` command
- Verify static files mapping
- Check directory permissions

---

## 📝 Quick Commands

### Vercel
```bash
# Deploy via CLI
cd optimum-frontend/frontend
vercel --prod
```

### PythonAnywhere
```bash
# Activate venv
source venv/bin/activate

# Run migrations
python manage.py migrate

# Collect static
python manage.py collectstatic --noinput

# Reload (via Web tab in dashboard)
```

---

## 📚 Documentation

- **Vercel Guide:** `DEPLOY_V2.0.0_VERCEL.md`
- **PythonAnywhere Guide:** `DEPLOY_V2.0.0_PYTHONANYWHERE.md`
- **Version Info:** `VERSION_2.0.0.md`

---

**Version 2.0.0 Deployment Checklist** ✅
