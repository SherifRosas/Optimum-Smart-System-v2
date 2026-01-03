# Debugging 400 Bad Request Error

## 🔍 How to Debug

### Step 1: Check Browser Network Tab

1. **Open DevTools (F12)**
2. **Go to Network tab**
3. **Check "Preserve log"** (so errors don't disappear)
4. **Try to login**
5. **Click on the failed request** (should be red)
6. **Check these tabs:**

#### Request Headers:
- Should have: `Content-Type: application/json`
- Should have: `Origin: https://optimum-smart-system-v2-git-master-sherifrosas-projects.vercel.app`

#### Request Payload:
Should look like:
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

#### Response:
- **Status Code:** Should show `400`
- **Response Body:** Click "Response" tab to see the error message

### Step 2: Check Console Logs

Look for:
- `Login API error:` - This will show the full error
- `Error response:` - This will show the backend's error message

### Step 3: Common Causes

#### 1. Missing Username or Password
**Error message:** `"Username/Email and password are required"`

**Fix:** Make sure both fields are filled in

#### 2. Wrong Content-Type
**Error message:** May not be clear, but request fails

**Fix:** Should be `application/json` (check Network tab)

#### 3. CSRF Token Issue
**Error message:** `"CSRF verification failed"`

**Fix:** This shouldn't happen with JWT, but check backend settings

#### 4. Rate Limiting
**Error message:** `"Too many requests"` (429, not 400)

**Fix:** Wait a few minutes and try again

#### 5. Request Body Format
**Error message:** Various validation errors

**Fix:** Check that request payload matches expected format

## 🔧 Quick Fixes

### Fix 1: Check API URL

The frontend might be using the wrong API URL. Check:

1. **Open Console (F12)**
2. **Type:** `localStorage.getItem('access_token')` (should be null before login)
3. **Check Network tab** - see what URL the login request is going to
4. **Should be:** `https://sherifrissas.pythonanywhere.com/api/auth/login/`

### Fix 2: Verify Request Format

The backend expects:
```json
{
  "username": "string",
  "password": "string"
}
```

Make sure the frontend is sending exactly this format.

### Fix 3: Check Backend Error Logs

In PythonAnywhere:
1. Go to **Web tab** → **Error log**
2. Look for recent errors when you try to login
3. The error message will tell you what's wrong

## 📋 What to Share

If the error persists, share:

1. **Network tab screenshot** showing:
   - Request URL
   - Request Headers
   - Request Payload
   - Response (error message)

2. **Console logs** showing:
   - Any error messages
   - `Login API error:` output

3. **Backend error log** (from PythonAnywhere) showing:
   - Any errors when login is attempted

## ✅ Expected Behavior

**Successful Login:**
- Status: `200 OK`
- Response:
```json
{
  "success": true,
  "message": "Login successful",
  "user": { ... },
  "profile": { ... },
  "tokens": {
    "access": "...",
    "refresh": "..."
  }
}
```

**Failed Login (Wrong Credentials):**
- Status: `401 Unauthorized`
- Response:
```json
{
  "success": false,
  "error": "Invalid username or password"
}
```

**Bad Request (400):**
- Usually means:
  - Missing required fields
  - Invalid request format
  - Validation error
