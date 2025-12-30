# 🔧 Optional Dependencies + --force Flag Fix

## Issue Verified ✅

**Problem:** Removing `--force` flag while using `optionalDependencies` will cause the same build failure that the original fix was meant to solve.

## Root Cause

According to npm bug report #4828 (https://github.com/npm/cli/issues/4828), npm has a known issue where **optional dependencies are not always installed correctly**, even when they should be for the current platform.

## Solution

### 1. Use `optionalDependencies` (Correct Location)
**File:** `optimum-frontend/frontend/package.json`

```json
"optionalDependencies": {
  "@rollup/rollup-linux-x64-gnu": "^4.27.0"
}
```

**Why:** This is the correct location for platform-specific native binaries:
- ✅ Installs on Linux (Vercel build environment)
- ✅ Skips gracefully on Windows/Mac (local development)
- ✅ No installation failures on unsupported platforms

### 2. Use `--force` Flag (Required Workaround)
**Files:** `vercel.json`, `optimum-frontend/frontend/vercel.json`

```json
"installCommand": "npm install --legacy-peer-deps --force"
```

**Why:** The `--force` flag is **specifically required** to work around npm's bug with optional dependencies:
- Forces npm to install optional dependencies even when the bug would skip them
- Without `--force`, the optional dependency may not install on Linux, causing:
  ```
  Error: Cannot find module @rollup/rollup-linux-x64-gnu
  ```

## Why This Combination is Necessary

1. **`optionalDependencies`** - Correct semantic location for platform-specific binaries
2. **`--force`** - Required workaround for npm bug #4828 that prevents optional dependencies from installing

**Both are needed together:**
- `optionalDependencies` alone → May fail due to npm bug
- `--force` alone → Would force install on all platforms (breaks Windows)
- `optionalDependencies` + `--force` → ✅ Works correctly on all platforms

## Trade-offs

**Using `--force` is acceptable here because:**
- It's specifically to work around a documented npm bug
- It only affects optional dependencies (platform-specific)
- The alternative (build failures) is worse
- This is a known workaround recommended in the npm community

## Alternative Solutions (Not Recommended)

1. **Put in `devDependencies`** - ❌ Breaks Windows development
2. **Remove dependency entirely** - ❌ Build fails on Vercel
3. **Use postinstall script** - ⚠️ More complex, same result
4. **Wait for npm fix** - ⏳ Bug still exists as of 2024

## Verification

✅ **Local (Windows):**
- `npm install` skips `@rollup/rollup-linux-x64-gnu` (not for this platform)
- Build works with Windows rollup binary

✅ **Vercel (Linux):**
- `npm install --force` ensures `@rollup/rollup-linux-x64-gnu` installs
- Build completes successfully

---

**Status:** ✅ Fixed  
**Commit:** Restore `optionalDependencies` + `--force` flag  
**Reference:** npm/cli#4828

