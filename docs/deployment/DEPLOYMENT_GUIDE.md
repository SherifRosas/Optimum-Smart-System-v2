# Deployment Guide

Complete guide for deploying Optimum Smart System to production.

## Current Deployment Status

✅ **Frontend:** Live on Vercel  
✅ **Backend:** Live on PythonAnywhere

## Deployment Architecture

```
Frontend (Vercel) → Backend API (PythonAnywhere) → Database (SQLite/PostgreSQL)
```

## Frontend Deployment (Vercel)

### Prerequisites

- Vercel account
- GitHub repository connected

### Steps

1. **Connect Repository to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Set Root Directory to `optimum-frontend`

2. **Configure Environment Variables**
   ```
   VITE_API_URL=https://sherifrosas.pythonanywhere.com/api
   VITE_WS_URL=wss://sherifrosas.pythonanywhere.com/ws
   ```

3. **Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Vercel will auto-deploy on every push to `main` branch
   - Preview deployments for pull requests

### Custom Domain (Optional)

1. Add domain in Vercel dashboard
2. Update CORS settings in backend
3. Update environment variables if needed

## Backend Deployment (PythonAnywhere)

### Prerequisites

- PythonAnywhere account
- Domain configured

### Steps

1. **Upload Code**
   ```bash
   # Clone repository on PythonAnywhere
   git clone <repository-url>
   cd Optimum-Smart-System-v/optimum-backend
   ```

2. **Set Up Virtual Environment**
   ```bash
   python3.9 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Configure Environment Variables**
   ```bash
   # In PythonAnywhere dashboard, go to Web app → Environment variables
   DJANGO_ENV=production
   DEBUG=False
   SECRET_KEY=your-production-secret-key
   ALLOWED_HOSTS=sherifrosas.pythonanywhere.com
   CORS_ALLOWED_ORIGINS=https://optimum-smart-system-navy.vercel.app
   ADMIN_EMAIL=sherifrosas.ai@gmail.com
   ```

4. **Database Setup**
   ```bash
   python manage.py migrate
   python manage.py collectstatic --noinput
   ```

5. **Configure WSGI File**
   - Use the provided `pythonanywhere_wsgi.py`
   - Update path if needed

6. **Reload Web App**
   - Click "Reload" in PythonAnywhere dashboard

## Alternative Backend Deployment Options

### Railway

1. **Create Railway Project**
   ```bash
   railway login
   railway init
   ```

2. **Configure Environment Variables**
   - Set all required env vars in Railway dashboard

3. **Deploy**
   ```bash
   railway up
   ```

### Render

1. **Create Web Service**
   - Connect GitHub repository
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `gunicorn optimum_system.wsgi:application`

2. **Configure Environment Variables**
   - Add all required env vars

3. **Deploy**
   - Render auto-deploys on push

## Environment Variables Checklist

### Backend (Production)

- [ ] `DJANGO_ENV=production`
- [ ] `DEBUG=False`
- [ ] `SECRET_KEY` (strong, random)
- [ ] `ALLOWED_HOSTS` (comma-separated)
- [ ] `CORS_ALLOWED_ORIGINS` (comma-separated)
- [ ] `DATABASE_URL` (if using PostgreSQL)
- [ ] `ADMIN_EMAIL`
- [ ] `SENTRY_DSN` (optional)

### Frontend (Production)

- [ ] `VITE_API_URL` (production API URL)
- [ ] `VITE_WS_URL` (production WebSocket URL)

## Post-Deployment Checklist

- [ ] Test API endpoints
- [ ] Test authentication flow
- [ ] Verify CORS is working
- [ ] Check admin panel access
- [ ] Test WebSocket connections
- [ ] Monitor error logs
- [ ] Set up monitoring (Sentry, etc.)
- [ ] Configure backups
- [ ] Update documentation

## Troubleshooting

### CORS Errors

- Verify `CORS_ALLOWED_ORIGINS` includes frontend URL
- Check that credentials are allowed
- Ensure backend allows the origin

### Database Errors

- Run migrations: `python manage.py migrate`
- Check database connection
- Verify DATABASE_URL format

### Static Files Not Loading

- Run: `python manage.py collectstatic`
- Check STATIC_ROOT path
- Verify WhiteNoise configuration

### 500 Errors

- Check error logs
- Verify SECRET_KEY is set
- Check DEBUG=False in production
- Verify ALLOWED_HOSTS

## Security Checklist

- [ ] `DEBUG=False` in production
- [ ] Strong `SECRET_KEY`
- [ ] HTTPS enabled
- [ ] Secure cookies enabled
- [ ] CORS properly configured
- [ ] Database credentials secure
- [ ] Environment variables not in code
- [ ] Admin password changed

## Monitoring

### Recommended Tools

- **Sentry:** Error tracking
- **Vercel Analytics:** Frontend analytics
- **PythonAnywhere Logs:** Backend logs

## Backup Strategy

1. **Database Backups**
   - Regular SQLite backups
   - Or PostgreSQL automated backups

2. **Code Backups**
   - Git repository (primary)
   - Regular exports

3. **Configuration Backups**
   - Document all environment variables
   - Keep secure backup of SECRET_KEY

## Rollback Procedure

1. **Frontend (Vercel)**
   - Go to deployment history
   - Click "Promote to Production"

2. **Backend (PythonAnywhere)**
   - Revert to previous commit
   - Reload web app

## Support

For issues, check:
- [Troubleshooting Guide](../development/TROUBLESHOOTING.md)
- [API Documentation](../api/README.md)
- Project README.md
