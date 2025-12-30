# Vercel Deployment Setup Guide

## 📁 Directory Structure

```
Optimum-Smart-System/          (GitHub root)
├── optimum-frontend/          (subdirectory)
│   └── frontend/              (nested subdirectory - THE Vite project)
│       ├── package.json       (actual project)
│       ├── src/               (source code)
│       └── dist/             (build output)
└── optimum-backend/           (subdirectory)
```

## ✅ Recommended: Set Root Directory in Vercel

**This is the cleanest approach:**

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project

2. **Settings → General**
   - Scroll to "Root Directory"
   - Set to: `optimum-frontend/frontend`
   - Click "Save"

3. **Vercel will automatically:**
   - Use `optimum-frontend/frontend/vercel.json`
   - Build from that directory
   - Output to `optimum-frontend/frontend/dist`

4. **Add Environment Variables** (Settings → Environment Variables):
   ```
   VITE_API_URL=https://sherifrissas.pythonanywhere.com/api
   VITE_WS_URL=wss://sherifrissas.pythonanywhere.com/ws
   ```

5. **Redeploy** - Vercel will use the new root directory

## 🔧 Alternative: Use Root vercel.json (Current Setup)

If you prefer to keep the root `vercel.json`:

- The current configuration uses build commands to navigate to the subdirectory
- This works but is more complex
- Root `vercel.json` handles the path navigation

## 🎯 Which Should You Use?

**Use Root Directory method if:**
- ✅ You want simpler configuration
- ✅ You want Vercel to auto-detect settings
- ✅ You prefer Vercel dashboard configuration

**Use build commands if:**
- ✅ You want everything in git
- ✅ You prefer configuration in code
- ✅ You have multiple projects in the repo

## 📝 Current Status

- ✅ Root `vercel.json` exists (uses build commands)
- ✅ `optimum-frontend/frontend/vercel.json` exists (for Root Directory method)
- ✅ Both methods will work

## 🚀 Quick Setup

**Fastest way:**
1. Set Root Directory to `optimum-frontend/frontend` in Vercel
2. Add environment variables
3. Redeploy

Done! 🎉





