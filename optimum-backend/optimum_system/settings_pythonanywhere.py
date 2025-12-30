"""
PythonAnywhere-specific settings
Automatically disables v2.0 features that don't work on PythonAnywhere free tier
"""
import os
from .settings import *

# Detect if running on PythonAnywhere
ON_PYTHONANYWHERE = 'pythonanywhere.com' in os.environ.get('HTTP_HOST', '') or \
                    'pythonanywhere.com' in os.environ.get('SERVER_NAME', '') or \
                    os.path.exists('/home/SherifRosas/.pythonanywhere')

if ON_PYTHONANYWHERE:
    print("🐍 PythonAnywhere detected - Disabling v2.0 features (WebSocket, Celery, Redis)")
    
    # Remove Channels from INSTALLED_APPS (WebSocket not supported)
    INSTALLED_APPS = [app for app in INSTALLED_APPS if app not in ['channels', 'django_celery_beat', 'django_celery_results']]
    
    # Disable ASGI (use WSGI only)
    ASGI_APPLICATION = None
    
    # Disable WebSocket/Channels
    CHANNEL_LAYERS = {}
    
    # Disable Celery (background tasks not supported)
    CELERY_BROKER_URL = None
    CELERY_RESULT_BACKEND = None
    
    # Use local memory cache instead of Redis
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
            'LOCATION': 'unique-snowflake',
        }
    }
    
    # Use database sessions instead of cache
    SESSION_ENGINE = 'django.contrib.sessions.backends.db'
    
    # Disable health check cache (not needed without Redis)
    INSTALLED_APPS = [app for app in INSTALLED_APPS if app != 'health_check.cache']
    
    print("✅ PythonAnywhere configuration applied - Basic REST API only")


















