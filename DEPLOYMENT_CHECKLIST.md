# 🚀 Deployment Checklist - Optimum Smart System

**Date:** _______________  
**Deployed By:** _______________

---

## Pre-Deployment Verification

### Code Quality
- [ ] All tests passed locally
- [ ] No console errors in browser
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Build succeeds locally: `npm run build`
- [ ] All pages functional
- [ ] All user roles working

### Database
- [ ] Migrations are up to date
- [ ] No pending migrations
- [ ] Database backup created (if applicable)
- [ ] Test data cleaned (if needed)

### Configuration
- [ ] Environment variables documented
- [ ] `.env` files not committed to git
- [ ] Production settings configured
- [ ] CORS settings correct
- [ ] Security settings enabled (DEBUG=False, etc.)

---

## Backend Deployment (PythonAnywhere)

### Pre-Deployment
- [ ] Code pushed to GitHub
- [ ] All changes committed
- [ ] Production settings verified

### Deployment Steps
- [ ] SSH into PythonAnywhere
- [ ] Navigate to project directory
- [ ] Pull latest code: `git pull origin master`
- [ ] Activate virtual environment
- [ ] Install/update dependencies: `pip install -r requirements.txt`
- [ ] Run migrations: `python manage.py migrate`
- [ ] Collect static files: `python manage.py collectstatic --noinput`
- [ ] Set environment variables in PythonAnywhere dashboard:
  - [ ] `SECRET_KEY`
  - [ ] `DEBUG=False`
  - [ ] `ALLOWED_HOSTS`
  - [ ] `DATABASE_URL` (if applicable)
  - [ ] `CORS_ALLOWED_ORIGINS`
- [ ] Reload web app in PythonAnywhere dashboard
- [ ] Verify health endpoint: https://your-username.pythonanywhere.com/health/

### Post-Deployment Verification
- [ ] Backend API responds
- [ ] Health endpoint returns 200
- [ ] Login endpoint works
- [ ] No server errors in logs
- [ ] Static files served correctly

---

## Frontend Deployment (Vercel)

### Pre-Deployment
- [ ] Code pushed to GitHub
- [ ] All changes committed
- [ ] Build succeeds locally
- [ ] No build warnings/errors

### Vercel Configuration
- [ ] Project connected to GitHub repository
- [ ] Root directory set: `optimum-frontend/frontend`
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Install command: `npm install --legacy-peer-deps --force`
- [ ] Framework: Vite

### Environment Variables
Set in Vercel Dashboard → Settings → Environment Variables:

- [ ] `VITE_API_URL=https://your-username.pythonanywhere.com/api`
- [ ] `VITE_WS_URL=wss://your-username.pythonanywhere.com/ws`
- [ ] Variables applied to: Production, Preview, Development

### Deployment
- [ ] Trigger deployment (automatic on push or manual)
- [ ] Monitor build logs
- [ ] Build completes successfully
- [ ] Deployment shows "Ready" status
- [ ] Deployment URL accessible

### Post-Deployment Verification
- [ ] Frontend loads at Vercel URL
- [ ] No console errors
- [ ] Frontend connects to production backend
- [ ] Login works
- [ ] All pages load
- [ ] API calls work
- [ ] WebSocket connection works (if applicable)

---

## Integration Testing (Production)

### Authentication
- [ ] Login works in production
- [ ] Logout works
- [ ] Session persists
- [ ] Protected routes work

### User Roles
- [ ] Master admin can login
- [ ] Sub-admin can login
- [ ] Supplier can login
- [ ] Customer can login
- [ ] Role-based access control works

### Order Management
- [ ] Customer can create order
- [ ] Order appears in admin view
- [ ] Order status updates work
- [ ] Order assignment works

### All Pages
- [ ] Dashboard loads
- [ ] Orders page loads
- [ ] User management loads (admin)
- [ ] All role-specific pages load
- [ ] Navigation works

### Real-time Features
- [ ] WebSocket connects
- [ ] Real-time updates work
- [ ] Real-time messaging works

### Performance
- [ ] Page load times acceptable
- [ ] No performance warnings
- [ ] Mobile responsiveness works
- [ ] Cross-browser compatibility verified

---

## Post-Deployment Tasks

### Monitoring
- [ ] Set up error monitoring (if applicable)
- [ ] Verify logging works
- [ ] Check server resources

### Documentation
- [ ] Update deployment documentation
- [ ] Document any deployment-specific notes
- [ ] Update production URLs in documentation

### Communication
- [ ] Notify team of deployment
- [ ] Share production URLs
- [ ] Document any known issues

---

## Rollback Plan (If Needed)

If deployment fails:
- [ ] Revert to previous deployment in Vercel
- [ ] Revert code changes in GitHub
- [ ] Restore database backup (if applicable)
- [ ] Document issues for next attempt

---

## Deployment Sign-off

**Deployed By:** _______________  
**Date:** _______________  
**Time:** _______________  
**Status:** [ ] SUCCESS [ ] PARTIAL [ ] FAILED

**Production URLs:**
- Frontend: https://your-project.vercel.app
- Backend: https://your-username.pythonanywhere.com/api
- Admin: https://your-username.pythonanywhere.com/admin/

**Notes:**
```
[Document any deployment-specific notes, issues, or configurations]
```

---

**Deployment Complete! 🎉**


