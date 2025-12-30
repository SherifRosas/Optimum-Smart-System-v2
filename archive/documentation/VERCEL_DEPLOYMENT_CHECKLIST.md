# ✅ Vercel Deployment Checklist

## Status: Code Pushed to GitHub ✅

**Repository:** https://github.com/SherifRosas/Optimum-Smart-System  
**Branch:** master  
**Latest Commit:** `06a1e60c` - fix: Update API URL and Vercel configuration for deployment

---

## 📋 Step-by-Step Vercel Configuration

### Step 1: Connect Repository to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Sign in with your GitHub account

2. **Import Project**
   - Click **"Add New..."** → **"Project"**
   - Select **"Import Git Repository"**
   - Find and select: `SherifRosas/Optimum-Smart-System`
   - Click **"Import"**

---

### Step 2: Configure Project Settings

1. **Project Name**
   - Use: `optimum-smart-system` (or your preferred name)

2. **Root Directory** ⚠️ **CRITICAL**
   - Click **"Edit"** next to Root Directory
   - Set to: `optimum-frontend/frontend`
   - This tells Vercel where your Vite project is located
   - Click **"Continue"**

3. **Framework Preset**
   - Should auto-detect: **Vite**
   - If not, select **"Vite"** manually

4. **Build and Output Settings**
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install --legacy-peer-deps` (recommended)
   - These should match your `vercel.json` configuration

---

### Step 3: Set Environment Variables ⚠️ **REQUIRED**

1. **Go to Project Settings**
   - After importing, click **"Settings"** tab
   - Navigate to **"Environment Variables"**

2. **Add Production Variables**
   Click **"Add New"** and add these variables:

   **Variable 1:**
   - **Name:** `VITE_API_URL`
   - **Value:** `https://sherifrosas.pythonanywhere.com/api`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

   **Variable 2:**
   - **Name:** `VITE_WS_URL`
   - **Value:** `wss://sherifrosas.pythonanywhere.com/ws`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **"Save"**

3. **Verify Variables**
   - You should see both variables listed
   - Make sure they're enabled for all three environments

---

### Step 4: Deploy

1. **Automatic Deployment**
   - After configuring, Vercel will automatically start deploying
   - You'll see a build log in real-time

2. **Monitor Build**
   - Watch the build logs for any errors
   - Build should complete in 1-3 minutes
   - Look for: `✓ built in X.XXs`

3. **Deployment Success**
   - You'll see: **"Ready"** status
   - Vercel will provide a deployment URL (e.g., `https://optimum-smart-system-xxx.vercel.app`)

---

### Step 5: Verify Deployment

1. **Test the Live Site**
   - Open the deployment URL in your browser
   - Open Developer Console (F12)
   - Check Network tab for API calls

2. **Verify API Connection**
   - API calls should go to: `https://sherifrosas.pythonanywhere.com/api`
   - NOT `http://localhost:8000/api`
   - Check console for any CORS errors

3. **Test Core Features**
   - ✅ Page loads without errors
   - ✅ Login page accessible
   - ✅ API calls working
   - ✅ No console errors

---

### Step 6: Update Backend CORS (If Needed)

If you see CORS errors, verify backend CORS settings:

**File:** `optimum-backend/optimum_system/settings/production.py`

Make sure your Vercel URL is in `CORS_ALLOWED_ORIGINS`:
```python
CORS_ALLOWED_ORIGINS = [
    "https://your-vercel-url.vercel.app",
    # ... other origins
]
```

---

## 🔧 Configuration Summary

**Root Directory:** `optimum-frontend/frontend`  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Framework:** Vite  
**Install Command:** `npm install --legacy-peer-deps`

**Environment Variables:**
- `VITE_API_URL=https://sherifrosas.pythonanywhere.com/api`
- `VITE_WS_URL=wss://sherifrosas.pythonanywhere.com/ws`

---

## ⚠️ Troubleshooting

### Build Fails
- **Check:** Build logs in Vercel dashboard
- **Common Issues:**
  - Missing dependencies → Check `package.json`
  - TypeScript errors → Check `tsconfig.json` (strict mode is relaxed)
  - Wrong root directory → Verify `optimum-frontend/frontend`

### API Not Connecting
- **Check:** Environment variables are set correctly
- **Check:** Browser console shows correct API URL
- **Check:** Backend CORS settings include Vercel URL

### 404 on Routes
- **Check:** `vercel.json` has rewrite rules for SPA
- **Check:** Output directory is `dist`

### Environment Variables Not Working
- **Remember:** Variables must start with `VITE_` for Vite projects
- **Remember:** Changes require a new deployment
- **Check:** Variables are enabled for the correct environment

---

## ✅ Success Criteria

Your deployment is successful when:
- ✅ Build completes without errors
- ✅ Site loads at Vercel URL
- ✅ API calls go to production backend (`sherifrosas.pythonanywhere.com`)
- ✅ Login and core features work
- ✅ No CORS errors in console
- ✅ No 404 errors on routes

---

## 📝 Next Steps After Deployment

1. **Set Up Custom Domain** (Optional)
   - Add your domain in Vercel Settings → Domains
   - Update DNS records as instructed

2. **Enable Automatic Deployments**
   - Already enabled by default
   - Every push to `master` will trigger a new deployment

3. **Set Up Preview Deployments**
   - Already enabled by default
   - Pull requests get preview URLs automatically

4. **Monitor Performance**
   - Check Vercel Analytics (if enabled)
   - Monitor error logs in Vercel dashboard

---

**Ready to deploy?** Follow the steps above in order! 🚀

