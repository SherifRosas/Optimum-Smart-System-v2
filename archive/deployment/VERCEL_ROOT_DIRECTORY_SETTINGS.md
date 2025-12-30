# Vercel Root Directory Settings Guide

## ✅ Recommended Settings

### Root Directory
```
optimum-frontend/frontend
```
✅ **Correct!** This points to your actual Vite project.

---

### Option 1: "Include files outside the root directory in the Build Step"

**What it does:**
- Allows Vercel to access files from parent directories during build
- Useful if your build needs files from `optimum-frontend/` or root

**For your project:**
- ❌ **Leave UNCHECKED** (default)
- Your Vite project in `optimum-frontend/frontend/` is self-contained
- All dependencies are in `frontend/package.json`
- No need to access files outside the root directory

**When to CHECK it:**
- If you share code between `optimum-frontend/` and `frontend/`
- If build scripts need files from parent directories
- If you have shared config files at the root

---

### Option 2: "Skip deployments when there are no changes to the root directory or its dependencies"

**What it does:**
- Only deploys when files in `optimum-frontend/frontend/` change
- Skips deployment if only backend or other directories change
- Saves build minutes and speeds up workflow

**For your project:**
- ✅ **RECOMMENDED: CHECK this**
- You only want to deploy when frontend code changes
- Backend changes (`optimum-backend/`) shouldn't trigger frontend deployments
- More efficient and faster

**When to UNCHECK it:**
- If you want to deploy on every commit (even backend changes)
- If you have shared configs that affect frontend
- If you want to test deployment pipeline on every change

---

## 🎯 Final Recommended Configuration

```
Root Directory: optimum-frontend/frontend
☐ Include files outside the root directory in the Build Step (UNCHECKED)
☑ Skip deployments when there are no changes to the root directory (CHECKED)
```

## 📝 Why These Settings?

1. **Root Directory**: Points to your actual Vite project
2. **Include files outside**: Not needed - your project is self-contained
3. **Skip deployments**: Saves time and build minutes - only deploy when frontend changes

## 🚀 After Setting This Up

1. **Add Environment Variables** (if not already done):
   - `VITE_API_URL=https://sherifrissas.pythonanywhere.com/api`
   - `VITE_WS_URL=wss://sherifrissas.pythonanywhere.com/ws`

2. **Redeploy** to apply the new root directory setting

3. **Test** - The deployment should now build from the correct directory

---

## ⚠️ Important Notes

- After changing Root Directory, Vercel will use `optimum-frontend/frontend/vercel.json` (if it exists)
- The root `vercel.json` will be ignored when Root Directory is set
- Make sure `optimum-frontend/frontend/vercel.json` exists (we created it earlier)





