# 🐛 Bug Fixes - Deployment Configuration

## Issues Identified and Fixed

### Bug 1: Platform-Specific Dependency in Wrong Section ✅ FIXED

**Problem:**
- `@rollup/rollup-linux-x64-gnu` was added to `devDependencies`
- This is a Linux-specific native binary that would cause `npm install` to fail on Windows development machines
- Would break the build process before deployment even begins

**Solution:**
- Moved `@rollup/rollup-linux-x64-gnu` to `optionalDependencies` section
- `optionalDependencies` are platform-aware and will:
  - Install on Linux (Vercel build environment) ✅
  - Skip gracefully on Windows (local development) ✅
  - Not cause installation failures on unsupported platforms

**File Changed:**
- `optimum-frontend/frontend/package.json`

**Before:**
```json
"devDependencies": {
  "@rollup/rollup-linux-x64-gnu": "^4.27.0",
  // ... other deps
}
```

**After:**
```json
"optionalDependencies": {
  "@rollup/rollup-linux-x64-gnu": "^4.27.0"
},
"devDependencies": {
  // ... other deps (without rollup)
}
```

---

### Bug 2: Dangerous --force Flag ✅ FIXED

**Problem:**
- `--force` flag was combined with `--legacy-peer-deps`
- `--force` overrides npm's resolution logic and can:
  - Force installation of incompatible package versions
  - Defeat the purpose of `--legacy-peer-deps`
  - Result in unstable builds with missing or broken dependencies
  - Cause production issues that are hard to debug

**Solution:**
- Removed `--force` flag from install commands
- Using only `--legacy-peer-deps` for stable dependency resolution
- This maintains compatibility while avoiding forced overrides

**Files Changed:**
- `vercel.json`
- `optimum-frontend/frontend/vercel.json` (already correct)

**Before:**
```json
"installCommand": "npm install --legacy-peer-deps --force"
```

**After:**
```json
"installCommand": "npm install --legacy-peer-deps"
```

---

## Verification

✅ **Local Build Test:**
- `npm install` works on Windows (rollup module skipped gracefully)
- `npm run build` completes successfully
- No installation errors

✅ **Expected Vercel Behavior:**
- `npm install` on Linux will install `@rollup/rollup-linux-x64-gnu` (optional dependency)
- Build will complete successfully
- No forced dependency overrides

---

## Commit Details

**Commit:** `eb008c0e`  
**Message:** "fix: Move rollup native dependency to optionalDependencies and remove --force flag"

**Changes:**
- `optimum-frontend/frontend/package.json` - Moved rollup to optionalDependencies
- `vercel.json` - Removed --force flag

---

## Why These Fixes Matter

1. **Cross-Platform Compatibility:**
   - Developers can work on Windows/Mac without installation failures
   - Vercel (Linux) gets the required native module automatically

2. **Stable Dependency Resolution:**
   - No forced overrides that could break production
   - `--legacy-peer-deps` handles peer dependency issues safely
   - Predictable builds across environments

3. **Best Practices:**
   - Using `optionalDependencies` for platform-specific binaries is the npm standard
   - Avoiding `--force` prevents hidden compatibility issues

---

**Status:** ✅ Fixed and Deployed  
**Next:** Vercel will automatically redeploy with these fixes

