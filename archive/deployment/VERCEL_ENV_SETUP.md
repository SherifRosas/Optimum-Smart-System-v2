# Vercel Environment Variables Setup

## 🔧 Configure Vercel Environment Variables

To make the deployed version match your local setup, you need to set environment variables in Vercel.

### Steps:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: `Optimum-Smart-System`

2. **Navigate to Settings → Environment Variables**

3. **Add these environment variables:**

   ```
   VITE_API_URL=https://sherifrissas.pythonanywhere.com/api
   VITE_WS_URL=wss://sherifrissas.pythonanywhere.com/ws
   ```

4. **Select Environment:**
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. **Save and Redeploy**
   - After adding variables, trigger a new deployment
   - Or wait for the next push to auto-deploy

### Alternative: Use Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Add environment variables
vercel env add VITE_API_URL production
# Enter: https://sherifrissas.pythonanywhere.com/api

vercel env add VITE_WS_URL production
# Enter: wss://sherifrissas.pythonanywhere.com/ws

# Redeploy
vercel --prod
```

## 🔍 Verify Configuration

After deployment, check the browser console to see which API URL is being used:
- Should show: `https://sherifrissas.pythonanywhere.com/api`
- Not: `http://localhost:8000/api`

## 📝 Current API Configuration

The frontend uses this logic:
1. **First**: Check `VITE_API_URL` environment variable
2. **Second**: If production build, use PythonAnywhere URL
3. **Third**: If localhost, use `http://localhost:8000/api`

## ⚠️ Important Notes

- Environment variables must be set **before** building
- Changes require a **new deployment**
- Variables are injected at **build time** (not runtime)
- Use `VITE_` prefix for Vite projects (not `REACT_APP_`)





