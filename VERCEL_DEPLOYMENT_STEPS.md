# 🚀 Vercel Deployment - Step-by-Step Walkthrough

**Follow these steps in order to deploy your frontend to Vercel.**

---

## Step 1: Go to Vercel Dashboard

1. **Open your browser**
2. **Go to:** https://vercel.com/dashboard
3. **Log in** (or sign up if you don't have an account)

**✅ Ready?** Let me know when you're logged in!

---

## Step 2: Create New Project

1. **Click the "Add New..." button** (top right)
2. **Select "Project"** from the dropdown
3. **You'll see a list of your GitHub repositories**

**✅ Ready?** Can you see your `Optimum-Smart-System` repository?

---

## Step 3: Import Repository

1. **Find and click on:** `Optimum-Smart-System` (or `SherifRosas/Optimum-Smart-System`)
2. **Click "Import"** button

**✅ Ready?** You should now see the project configuration screen.

---

## Step 4: Configure Project Settings

**⚠️ IMPORTANT: These settings are critical!**

### Project Name
- **Field:** Project Name
- **Value:** `optimum-smart-system-v2` (or your preferred name)
- **Note:** This will be part of your URL

### Framework Preset
- **Should auto-detect:** `Vite`
- **If not:** Select "Vite" from dropdown

### Root Directory
- **⚠️ CRITICAL:** Click "Edit" next to Root Directory
- **Value:** `optimum-frontend/frontend`
- **This is the most important setting!**

### Build Command
- **Should be:** `npm run build`
- **If different:** Change to `npm run build`

### Output Directory
- **Should be:** `dist`
- **If different:** Change to `dist`

### Install Command
- **Should be:** `npm install`
- **Optional:** You can use `npm install --legacy-peer-deps --force` if you have dependency issues

**✅ Ready?** Double-check the Root Directory is `optimum-frontend/frontend`!

---

## Step 5: Environment Variables (Before First Deploy)

**⚠️ You can add these now OR after the first deploy (recommended: after first deploy to see if it works)**

### Option A: Add Now (Before Deploy)
1. **Scroll down to "Environment Variables"** section
2. **Click "Add"** for each variable:

   **Variable 1:**
   - **Key:** `VITE_API_URL`
   - **Value:** `https://YOUR-USERNAME.pythonanywhere.com/api`
   - **Replace `YOUR-USERNAME`** with your PythonAnywhere username
   - **Example:** `https://sherifrissas.pythonanywhere.com/api`
   - **Environments:** Check ✅ Production, ✅ Preview, ✅ Development

   **Variable 2 (Optional but Recommended):**
   - **Key:** `VITE_WS_URL`
   - **Value:** `wss://YOUR-USERNAME.pythonanywhere.com/ws`
   - **Replace `YOUR-USERNAME`** with your PythonAnywhere username
   - **Example:** `wss://sherifrissas.pythonanywhere.com/ws`
   - **Environments:** Check ✅ Production, ✅ Preview, ✅ Development

### Option B: Add After First Deploy (Recommended)
- Deploy first to make sure everything works
- Then add environment variables
- Redeploy to apply them

**✅ Ready?** If you don't have PythonAnywhere URL yet, skip this and add later!

---

## Step 6: Deploy!

1. **Scroll to bottom of page**
2. **Click "Deploy" button**
3. **Wait for build** (2-5 minutes)

**✅ Ready?** Click Deploy and watch the build logs!

---

## Step 7: Monitor Build

**You'll see:**
- Installing dependencies...
- Building...
- Deploying...

**If build succeeds:**
- ✅ You'll see "Ready" status
- ✅ You'll get a URL like: `https://optimum-smart-system-v2.vercel.app`

**If build fails:**
- Check the error message
- Common issues:
  - Wrong root directory
  - Missing dependencies
  - Build errors in code

**✅ Ready?** What do you see in the build logs?

---

## Step 8: Test Your Deployment

1. **Click on your deployment URL**
2. **You should see:**
   - Role Selection page (main landing page)
   - No console errors (check DevTools F12)

**✅ Ready?** Does the page load correctly?

---

## Step 9: Add Environment Variables (If Not Done Earlier)

**If you skipped Step 5, do this now:**

1. **Go to:** Project Settings → Environment Variables
2. **Add the variables** (see Step 5)
3. **Redeploy:**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

**✅ Ready?** Environment variables added?

---

## Step 10: Verify Everything Works

### Test Checklist:
- [ ] Page loads at Vercel URL
- [ ] Role Selection page shows
- [ ] No console errors
- [ ] Can navigate (if backend is ready)
- [ ] API calls work (if backend is deployed)

**✅ Ready?** Everything working?

---

## 🎉 Success!

**Your frontend is now deployed to Vercel!**

**Next Steps:**
1. Deploy backend to PythonAnywhere
2. Update CORS settings in backend
3. Test full integration

---

## 🐛 Troubleshooting

### Build Fails: "Cannot find module"
- **Fix:** Check Root Directory is `optimum-frontend/frontend`
- **Fix:** Verify `package.json` exists in that directory

### Build Fails: "Module not found"
- **Fix:** Check dependencies in `package.json`
- **Fix:** Try `npm install --legacy-peer-deps --force` in install command

### Page Shows 404
- **Fix:** Check `vercel.json` has rewrite rules
- **Fix:** Verify Output Directory is `dist`

### API Calls Fail (CORS)
- **Fix:** Deploy backend first
- **Fix:** Add backend URL to backend CORS settings
- **Fix:** Add `VITE_API_URL` environment variable

---

**Ready to start? Begin with Step 1!** 🚀
