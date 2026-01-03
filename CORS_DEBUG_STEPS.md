# CORS Debug Steps - Verify WSGI Configuration

## 🔍 Step 1: Verify WSGI File Was Saved

1. **Go to PythonAnywhere Dashboard → Web tab**
2. **Click on your web app**
3. **Click on WSGI configuration file** (`/var/www/sherifrissas_pythonanywhere_com_wsgi.py`)
4. **Check if the file contains:**

```python
os.environ['CORS_ALLOWED_ORIGINS'] = 'https://optimum-smart-system.vercel.app,https://optimum-smart-system-navy.vercel.app,https://optimum-smart-system-git-master-sherifrosas-projects.vercel.app,https://optimum-smart-system-v2-olg01dwo8-sherifrosas-projects.vercel.app'
```

**Question:** Does the WSGI file contain this line with your Vercel URL?

## 🔍 Step 2: Check Error Log

1. **Go to Web tab → Error log**
2. **Look for any errors related to:**
   - CORS settings
   - Import errors
   - Settings module errors

**Question:** What errors (if any) do you see in the error log?

## 🔍 Step 3: Verify Web App Was Reloaded

1. **Go to Web tab**
2. **Check the "Last reloaded" timestamp**
3. **It should show a recent time (within last few minutes)**

**Question:** When was the web app last reloaded?

## 🔍 Step 4: Test Direct API Call

Try accessing the API directly from your browser:

```
https://sherifrissas.pythonanywhere.com/api/orders/
```

**What happens:**
- ✅ If you see JSON (or authentication error): CORS might be working, but there's another issue
- ❌ If you see CORS error: Settings aren't being applied

## 🔍 Step 5: Alternative - Check Settings File Directly

The issue might be that the settings file isn't reading the environment variable correctly. Let's verify the production settings file is being used.

**Can you check:**
1. Does `optimum_system/settings/production.py` exist?
2. Does it have the code to read `CORS_ALLOWED_ORIGINS` from environment?

## 🚨 Quick Test: Add CORS Directly in Settings

If environment variable isn't working, we can try adding CORS directly in the production settings file (temporary test).
