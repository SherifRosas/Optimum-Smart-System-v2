# 🔄 Restart Dev Server

## Issue
Vite is still trying to load `.js` files even though they've been renamed to `.jsx`. This is a caching issue.

## Solution

### 1. Stop Current Dev Server
Press `Ctrl+C` in the terminal where `npm run dev` is running

### 2. Clear All Caches
```powershell
cd optimum-frontend
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .vite -ErrorAction SilentlyContinue
```

### 3. Restart Dev Server
```powershell
npm run dev
```

### 4. Hard Refresh Browser
- Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or open DevTools → Network tab → Check "Disable cache" → Refresh

## Why This Happens

Vite caches module resolution. When files are renamed, the cache still references the old names. Clearing the cache forces Vite to rebuild the module graph.

## Expected Result

After restarting:
- ✅ All imports resolve to `.jsx` files
- ✅ No more 404 errors
- ✅ App loads successfully

**Restart the dev server now!** 🔄


