# 🚀 Deploy Optimum Smart System v2.0.0 - New Vercel Project

**Version:** 2.0.0  
**Release Date:** January 1, 2026  
**Status:** Production Ready

---

## 📋 Prerequisites

- GitHub account with repository access
- Vercel account (free tier works)
- Backend API URL (PythonAnywhere or other)

---

## 🎯 Step 1: Create New Vercel Project

### Option A: Via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Navigate to: https://vercel.com/dashboard
   - Click **"Add New..."** → **"Project"**

2. **Import Repository**
   - Select your GitHub repository: `Optimum-Smart-System` (or `Optimum-Smart-System-v`)
   - Click **"Import"**

3. **Configure Project**
   - **Project Name:** `optimum-smart-system-v2` (or your preferred name)
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `optimum-frontend/frontend` ⚠️ **IMPORTANT**
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install --legacy-peer-deps --force`

4. **Click "Deploy"** (we'll add environment variables after)

---

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Navigate to frontend directory
cd optimum-frontend/frontend

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

---

## ⚙️ Step 2: Configure Environment Variables

### Required Environment Variables

1. **Go to Project Settings**
   - In Vercel Dashboard, select your project
   - Go to **Settings** → **Environment Variables**

2. **Add the following variables:**

   | Variable | Value | Environments |
   |----------|-------|--------------|
   | `VITE_API_URL` | `https://YOUR-BACKEND.pythonanywhere.com/api` | Production, Preview, Development |
   | `VITE_WS_URL` | `wss://YOUR-BACKEND.pythonanywhere.com/ws` | Production, Preview, Development |

   **⚠️ Important:** Replace `YOUR-BACKEND` with your actual PythonAnywhere username.

   **Example (replace with your actual username):**
   ```
   VITE_API_URL=https://your-username.pythonanywhere.com/api
   VITE_WS_URL=wss://your-username.pythonanywhere.com/ws
   ```
   
   **Note:** For the Optimum Smart System project, the backend is deployed at `sherifrissas.pythonanywhere.com`, but you should use your own PythonAnywhere username.

3. **Save Changes**

---

## 🔧 Step 3: Verify Vercel Configuration

### Check `vercel.json` exists in `optimum-frontend/frontend/`

The file should contain:
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps --force",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

If it doesn't exist, create it in `optimum-frontend/frontend/vercel.json`

---

## 🚀 Step 4: Deploy

### Automatic Deployment (Recommended)

1. **Push to GitHub** (if using Git integration)
   ```bash
   git add .
   git commit -m "Deploy v2.0.0 to Vercel"
   git push origin master
   ```
   - Vercel will automatically deploy on push

### Manual Deployment

1. **Go to Deployments tab**
2. **Click "Redeploy"** on the latest deployment
3. **Or trigger new deployment** from Git

---

## ✅ Step 5: Verify Deployment

1. **Check Build Logs**
   - Go to **Deployments** tab
   - Click on the latest deployment
   - Review build logs for errors

2. **Test the Application**
   - Visit your Vercel URL: `https://your-project.vercel.app`
   - Should see the **Role Selection** page (main landing page)
   - Test login functionality
   - Verify API calls work (check browser console)

3. **Check Environment Variables**
   - Verify `VITE_API_URL` is correctly set
   - Check network requests in browser DevTools

---

## 🔗 Step 6: Configure Custom Domain (Optional)

1. **Go to Settings → Domains**
2. **Add your custom domain**
3. **Follow DNS configuration instructions**
4. **Wait for SSL certificate** (automatic)

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Module not found"**
- Check `package.json` dependencies
- Verify `node_modules` are installed
- Try: `npm install --legacy-peer-deps --force`

**Error: "Cannot find module"**
- Verify root directory is `optimum-frontend/frontend`
- Check file paths in imports

### API Calls Fail (CORS)

**Error: "CORS policy blocked"**
- Verify backend `CORS_ALLOWED_ORIGINS` includes your Vercel URL
- Check `VITE_API_URL` is correct
- Ensure backend is running

### Environment Variables Not Working

**Variables not accessible**
- Ensure variables use `VITE_` prefix
- Redeploy after adding variables
- Check variable is set for correct environment (Production/Preview/Development)

### Routing Issues

**404 on refresh**
- Verify `vercel.json` has rewrite rules
- Check `outputDirectory` is `dist`
- Ensure SPA routing is configured

---

## 📝 Post-Deployment Checklist

- [ ] Build completed successfully
- [ ] Environment variables configured
- [ ] Role Selection page loads at root (`/`)
- [ ] Login functionality works
- [ ] API calls succeed (check Network tab)
- [ ] WebSocket connection works (if applicable)
- [ ] No console errors
- [ ] Mobile responsive design works
- [ ] Custom domain configured (if applicable)

---

## 🔄 Updating Deployment

### To update the deployment:

1. **Make changes locally**
2. **Test locally** (`npm run dev`)
3. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin master
   ```
4. **Vercel auto-deploys** (if Git integration enabled)
5. **Or manually redeploy** from Vercel Dashboard

---

## 📊 Monitoring

### View Deployment Analytics

1. **Go to Analytics tab** (Vercel Pro required)
2. **Check Performance metrics**
3. **Review Error logs**

### View Logs

1. **Go to Deployments tab**
2. **Click on deployment**
3. **View Build Logs** and **Function Logs**

---

## 🔐 Security Notes

- ✅ Environment variables are encrypted
- ✅ HTTPS is automatic
- ✅ No sensitive data in code
- ⚠️ Keep `SECRET_KEY` and API keys secure
- ⚠️ Never commit `.env` files

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Version 2.0.0 - Ready for Production! 🚀**
