# 🚀 Deploy to Vercel - Quick Guide

## ✅ Pre-Deployment Checklist

- [x] Fixed API URL typo (`sherifrissas` → `sherifrosas`)
- [x] Updated `vercel.json` to point to correct directory (`optimum-frontend/frontend`)
- [x] Build verified locally (✅ successful)

## 📋 Deployment Steps

### Step 1: Commit and Push Changes

```bash
# Add all changes
git add .

# Commit
git commit -m "fix: Update API URL and Vercel configuration for deployment"

# Push to GitHub
git push origin master
```

### Step 2: Configure Vercel Dashboard

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: `Optimum-Smart-System-v`

2. **Verify Root Directory**
   - Go to **Settings → General**
   - Ensure **Root Directory** is set to: `optimum-frontend/frontend`
   - If not set, change it and click "Save"

3. **Set Environment Variables**
   - Go to **Settings → Environment Variables**
   - Add these variables (for **Production**, **Preview**, and **Development**):
   
   ```
   VITE_API_URL=https://sherifrosas.pythonanywhere.com/api
   VITE_WS_URL=wss://sherifrosas.pythonanywhere.com/ws
   ```
   
   - Click "Save" for each variable
   - Make sure to select all three environments (Production, Preview, Development)

4. **Verify Build Settings**
   - Go to **Settings → General**
   - Verify:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build` (or auto-detected)
     - **Output Directory:** `dist`
     - **Install Command:** `npm install --legacy-peer-deps` (or auto-detected)

### Step 3: Trigger Deployment

**Option A: Automatic (Recommended)**
- Vercel will automatically deploy when you push to GitHub
- Check the **Deployments** tab in Vercel dashboard

**Option B: Manual**
- Go to **Deployments** tab
- Click **"Redeploy"** on the latest deployment
- Or use Vercel CLI:
  ```bash
  npm i -g vercel
  vercel login
  vercel --prod
  ```

### Step 4: Verify Deployment

1. **Check Build Logs**
   - Go to **Deployments** → Click on the latest deployment
   - Review build logs for any errors

2. **Test the Live Site**
   - Visit your Vercel deployment URL
   - Open browser console (F12)
   - Verify API calls are going to: `https://sherifrosas.pythonanywhere.com/api`
   - Test login and core functionality

3. **Check CORS**
   - If you see CORS errors, verify backend CORS settings include your Vercel URL
   - Backend CORS is configured in: `optimum-backend/optimum_system/settings/production.py`

## 🔧 Current Configuration

**Root Directory:** `optimum-frontend/frontend`  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Framework:** Vite

**Environment Variables Required:**
- `VITE_API_URL=https://sherifrosas.pythonanywhere.com/api`
- `VITE_WS_URL=wss://sherifrosas.pythonanywhere.com/ws`

## ⚠️ Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure TypeScript errors are resolved (strict mode is relaxed)

### API Connection Issues
- Verify environment variables are set correctly
- Check browser console for API URL being used
- Verify backend CORS settings include Vercel URL

### 404 Errors on Routes
- Verify `vercel.json` has the rewrite rule for SPA routing
- Check that `outputDirectory` is set to `dist`

## 📝 Notes

- Environment variables must be set **before** building
- Changes to environment variables require a **new deployment**
- Variables are injected at **build time** (not runtime)
- Use `VITE_` prefix for Vite projects

## ✅ Success Criteria

Deployment is successful when:
- ✅ Build completes without errors
- ✅ Site loads at Vercel URL
- ✅ API calls go to production backend
- ✅ Login and core features work
- ✅ No CORS errors in console

---

**Ready to deploy?** Run the git commands in Step 1, then configure Vercel Dashboard in Step 2!
