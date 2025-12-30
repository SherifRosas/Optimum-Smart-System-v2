# 🔧 Vercel Environment Variables Fix

## Issue
Your Vercel environment variables are using the wrong prefix. This is a **Vite** project, not a Create React App project, so environment variables must use the `VITE_` prefix, not `REACT_APP_`.

## Required Environment Variables

### For Vite Projects (Current Setup)
The frontend expects these environment variables:

1. **`VITE_API_URL`** (Required)
   - Value: `https://sherifrosas.pythonanywhere.com/api`
   - This is the API base URL for production

2. **`VITE_WS_URL`** (Optional)
   - Value: `wss://sherifrosas.pythonanywhere.com/ws`
   - This is the WebSocket URL for real-time features
   - If not set, defaults to the production WebSocket URL

## Steps to Fix in Vercel Dashboard

1. **Go to Vercel Dashboard**
   - Navigate to: https://vercel.com/dashboard
   - Select your project: `Optimum-Smart-System`

2. **Go to Settings → Environment Variables**

3. **Add/Update Variables:**

   **Add `VITE_API_URL`:**
   - Key: `VITE_API_URL`
   - Value: `https://sherifrosas.pythonanywhere.com/api`
   - Environments: Select **Production**, **Preview**, and **Development**

   **Add `VITE_WS_URL` (Optional but Recommended):**
   - Key: `VITE_WS_URL`
   - Value: `wss://sherifrosas.pythonanywhere.com/ws`
   - Environments: Select **Production**, **Preview**, and **Development**

4. **Remove or Keep Old Variables:**
   - `REACT_APP_API_URL` - **Can be removed** (not used by Vite)
   - `GOOGLE_CLIENT_SECRET` - Keep if used by backend
   - `GOOGLE_CLIENT_ID` - Keep if used by backend
   - `NEXTAUTH_URL` - Keep if used by backend
   - `DATABASE_URL` - Keep if used by backend
   - `NEXTAUTH_SECRET` - Keep if used by backend

5. **Redeploy After Changes:**
   - After adding/updating variables, go to **Deployments**
   - Click **"..."** on the latest deployment
   - Select **"Redeploy"**
   - This ensures the new environment variables are used

## How It Works

The frontend code in `optimum-frontend/frontend/src/config/api.ts` uses:

```typescript
baseURL: import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD 
    ? 'https://sherifrosas.pythonanywhere.com/api'
    : 'http://localhost:8000/api'),
```

- If `VITE_API_URL` is set, it uses that value
- If not set in production, it falls back to the hardcoded production URL
- If not set in development, it uses `http://localhost:8000/api`

## Verification

After redeploying, check the browser console:
1. Open https://optimum-smart-system-navy.vercel.app/
2. Open Developer Tools (F12)
3. Check the **Console** tab
4. Look for API calls - they should use the correct URL

## Summary

**Current (Wrong):**
- ❌ `REACT_APP_API_URL` - Not used by Vite

**Required (Correct):**
- ✅ `VITE_API_URL` - Required for API calls
- ✅ `VITE_WS_URL` - Optional for WebSocket connections

---

**Last Updated:** December 2024  
**Status:** Action Required - Update Vercel Environment Variables

