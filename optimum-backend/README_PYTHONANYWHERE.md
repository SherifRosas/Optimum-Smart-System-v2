# 🐍 PythonAnywhere Quick Reference

## Current Deployment

- **URL**: https://sherifrosas.pythonanywhere.com
- **Dashboard**: https://www.pythonanywhere.com/user/SherifRosas/webapps/
- **Status**: ✅ Working (Basic REST API)

## Quick Commands

### Update Code:
```bash
cd optimum-backend
git pull origin main
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput
```

### Reload Web App:
1. Go to [Web tab](https://www.pythonanywhere.com/user/SherifRosas/webapps/)
2. Click **"Reload"** button

## What Works ✅
- REST API endpoints
- JWT Authentication
- Database operations
- Admin panel
- Static files

## What Doesn't Work ❌
- WebSocket (needs ASGI - not supported)
- Celery (background tasks - not supported)
- Redis (not available on free tier)

## Files
- `settings.py` - Current (PythonAnywhere compatible)
- `settings_v2.py` - For Railway/Render (v2.0 features)

## Need Help?
See [PYTHONANYWHERE_DEPLOYMENT.md](PYTHONANYWHERE_DEPLOYMENT.md) for detailed instructions.










