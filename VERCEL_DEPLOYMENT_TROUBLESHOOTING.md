# Vercel Deployment Troubleshooting Guide

## Issue: Frontend Not Running on Vercel

If the frontend at https://optimum-smart-system-navy.vercel.app/ is not displaying correctly, follow these steps:

## 1. Check Vercel Deployment Logs

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `Optimum-Smart-System`
3. Click on the latest deployment
4. Review the **Build Logs** and **Runtime Logs** for errors

### Common Build Errors:
- **Module not found**: Check if all dependencies are in `package.json`
- **Build timeout**: Increase build timeout in Vercel settings
- **Memory issues**: Check if build uses too much memory

## 2. Verify Vercel Configuration

### Root `vercel.json` (should be in repository root):
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps --force",
  "framework": "vite",
  "rootDirectory": "optimum-frontend/frontend",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Key Points:
- ✅ `rootDirectory` must be set to `optimum-frontend/frontend`
- ✅ `outputDirectory` must be `dist` (Vite's default output)
- ✅ `rewrites` must route all paths to `/index.html` for SPA routing

## 3. Check Browser Console

1. Open https://optimum-smart-system-navy.vercel.app/ in your browser
2. Open Developer Tools (F12)
3. Check the **Console** tab for JavaScript errors
4. Check the **Network** tab to see if assets are loading (status 200)

### Common Console Errors:
- **404 errors**: Assets not found - check `outputDirectory` in `vercel.json`
- **CORS errors**: API configuration issue
- **Module errors**: Build configuration issue

## 4. Verify Build Output

The built `dist/index.html` should contain:
```html
<script type="module" crossorigin src="/assets/index-XXXXX.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-XXXXX.css">
```

If it still references `/src/main.tsx`, the build didn't complete correctly.

## 5. Environment Variables

Check if these are set in Vercel Dashboard:
- `VITE_API_URL` (optional, defaults to production API)
- `VITE_WS_URL` (optional, defaults to production WebSocket)

### To Set Environment Variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables for **Production**, **Preview**, and **Development** environments
3. Redeploy after adding variables

## 6. Force Redeploy

After making changes:
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click the **"..."** menu on the latest deployment
3. Select **"Redeploy"**
4. Wait for the build to complete

## 7. Clear Browser Cache

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Or clear cache: Browser Settings → Clear browsing data → Cached images and files

## 8. Check Network/DNS

- Try accessing from a different network
- Check if DNS is resolving correctly: `nslookup optimum-smart-system-navy.vercel.app`
- Try using a VPN if your network blocks Vercel

## 9. Verify Git Integration

1. Check if Vercel is connected to the correct GitHub repository
2. Verify the branch is set to `master` (or your default branch)
3. Ensure `vercel.json` is committed to the repository

## 10. Test Local Build

Before deploying, test the build locally:
```bash
cd optimum-frontend/frontend
npm install --legacy-peer-deps --force
npm run build
npm run preview
```

Visit `http://localhost:4173` and verify the app works correctly.

## Recent Fixes Applied

1. ✅ Removed unused `ReactNode` import from `App.tsx`
2. ✅ Added error handling to `main.tsx` for better debugging
3. ✅ Optimized `requestAnimationFrame` usage in `DigitalCounter`
4. ✅ Fixed `index.html` to use correct Vite entry point
5. ✅ Fixed favicon type attribute

## Next Steps

1. **Check Vercel deployment logs** for the latest build
2. **Review browser console** for JavaScript errors
3. **Verify environment variables** are set correctly
4. **Force a redeploy** after verifying configuration

## Still Not Working?

If the issue persists:
1. Share the Vercel build logs
2. Share browser console errors
3. Verify the deployment URL is correct
4. Check if the build completes successfully in Vercel

---

**Last Updated:** December 2024  
**Status:** Active troubleshooting

