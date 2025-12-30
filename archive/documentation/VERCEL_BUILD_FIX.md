# 🔧 Vercel Build Fix - Rollup Native Module

## Issue
Build was failing with error:
```
Error: Cannot find module @rollup/rollup-linux-x64-gnu
```

This is a known npm bug with optional dependencies (https://github.com/npm/cli/issues/4828).

## Solution Applied

### 1. Added Explicit Rollup Dependency
**File:** `optimum-frontend/frontend/package.json`

Added `@rollup/rollup-linux-x64-gnu` to `devDependencies`:
```json
"devDependencies": {
  "@rollup/rollup-linux-x64-gnu": "^4.27.0",
  // ... other dependencies
}
```

### 2. Updated Install Command
**Files:** `vercel.json` and `optimum-frontend/frontend/vercel.json`

Changed from:
```json
"installCommand": "npm install --legacy-peer-deps"
```

To:
```json
"installCommand": "npm install --legacy-peer-deps --force"
```

The `--force` flag helps ensure optional dependencies are installed properly.

## Changes Committed

**Commit:** `84c45e22` - fix: Add rollup native dependency and update install command for Vercel build

**Files Changed:**
- `optimum-frontend/frontend/package.json`
- `optimum-frontend/frontend/vercel.json`
- `vercel.json`

## Next Steps

1. **Vercel will auto-redeploy** after detecting the new commit
2. **Monitor the build** in Vercel dashboard
3. **Verify** the build completes successfully

## Expected Result

The build should now:
- ✅ Install all dependencies including rollup native module
- ✅ Complete the Vite build successfully
- ✅ Deploy to Vercel

---

**Status:** ✅ Fix deployed  
**Action:** Vercel will automatically redeploy with the fix

