"""
v2.0 Advanced Settings - Enable when migrating to Railway/Render
This file contains all v2.0 features (WebSocket, Celery, Redis)
"""
from .settings import *

# Only import if not on PythonAnywhere
import os
ON_PYTHONANYWHERE = 'pythonanywhere.com' in os.environ.get('HTTP_HOST', '') or \
                    'pythonanywhere.com' in os.environ.get('SERVER_NAME', '')

if ON_PYTHONANYWHERE:
    raise ImportError(
        "v2.0 settings not compatible with PythonAnywhere. "
        "Use settings.py for PythonAnywhere, or migrate to Railway/Render for v2.0 features."
    )

# Add v2.0 apps
INSTALLED_APPS.extend([
    'channels',
    'django_celery_beat',
    'django_celery_results',
    'health_check',
    'health_check.cache',
    'health_check.db',
    'axes',  # Security: login attempt tracking
    'drf_spectacular',  # OpenAPI/Swagger schema generation
    'drf_spectacular_sidecar',  # Swagger UI static files
])

# Add Axes middleware
MIDDLEWARE.insert(
    MIDDLEWARE.index('django.contrib.auth.middleware.AuthenticationMiddleware') + 1,
    'axes.middleware.AxesMiddleware'
)

# Enable ASGI
ASGI_APPLICATION = 'optimum_system.asgi.application'

# Database Configuration (PostgreSQL for local/production)
DATABASE_URL = os.environ.get('DATABASE_URL')
if DATABASE_URL and DATABASE_URL.startswith('postgresql://'):
    import dj_database_url
    DATABASES = {
        'default': dj_database_url.parse(DATABASE_URL, conn_max_age=600)
    }
else:
    # Fallback to SQLite if DATABASE_URL not provided
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ.get('DB_NAME', 'optimum_db'),
            'USER': os.environ.get('DB_USER', 'optimum_user'),
            'PASSWORD': os.environ.get('DB_PASSWORD', 'optimum_pass'),
            'HOST': os.environ.get('DB_HOST', 'localhost'),
            'PORT': os.environ.get('DB_PORT', '5432'),
        }
    }

# Redis Configuration
REDIS_URL = os.environ.get('REDIS_URL', 'redis://localhost:6379/0')

# Cache Configuration (Redis)
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': REDIS_URL,
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
            'SOCKET_CONNECT_TIMEOUT': 5,
            'SOCKET_TIMEOUT': 5,
            'COMPRESSOR': 'django_redis.compressors.zlib.ZlibCompressor',
            'IGNORE_EXCEPTIONS': True,
        },
        'KEY_PREFIX': 'optimum',
        'TIMEOUT': 300,
    }
}

# Session backend (Redis)
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
SESSION_CACHE_ALIAS = 'default'

# Channels Configuration (WebSocket)
redis_host = 'localhost'
redis_port = 6379
if REDIS_URL and REDIS_URL.startswith('redis://'):
    redis_parts = REDIS_URL.replace('redis://', '').split('/')[0]
    if ':' in redis_parts:
        redis_host, redis_port_str = redis_parts.split(':')
        try:
            redis_port = int(redis_port_str)
        except ValueError:
            redis_port = 6379
    else:
        redis_host = redis_parts

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            'hosts': [(redis_host, redis_port)],
        },
    },
}

# Celery Configuration
CELERY_BROKER_URL = REDIS_URL
CELERY_RESULT_BACKEND = 'django-db'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = TIME_ZONE
CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'
CELERY_TASK_TRACK_STARTED = True
CELERY_TASK_TIME_LIMIT = 30 * 60
CELERY_TASK_SOFT_TIME_LIMIT = 25 * 60
CELERY_WORKER_PREFETCH_MULTIPLIER = 1

# REST Framework - Add OpenAPI/Swagger
REST_FRAMEWORK.update({
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
})

# OpenAPI/Swagger Documentation
SPECTACULAR_SETTINGS = {
    'TITLE': 'Optimum Smart System API',
    'DESCRIPTION': 'Advanced order management system with AI capabilities',
    'VERSION': '2.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    'COMPONENT_SPLIT_REQUEST': True,
    'SCHEMA_PATH_PREFIX': '/api/',
    'SWAGGER_UI_DIST': 'SIDECAR',  # Use sidecar for Swagger UI
    'SWAGGER_UI_FAVICON_HREF': 'SIDECAR',
    'REDOC_UI_DIST': 'SIDECAR',  # Use sidecar for ReDoc
}

# Axes (Brute Force Protection)
AXES_ENABLED = not DEBUG
AXES_FAILURE_LIMIT = 5
AXES_COOLOFF_TIME = 1
AXES_LOCKOUT_CALLABLE = 'axes.lockout.database_lockout'
AXES_RESET_ON_SUCCESS = True

# Content Security Policy
CSP_DEFAULT_SRC = ["'self'"]
CSP_SCRIPT_SRC = ["'self'", "'unsafe-inline'"]
CSP_STYLE_SRC = ["'self'", "'unsafe-inline'"]
CSP_IMG_SRC = ["'self'", "data:", "https:"]

# Sentry Error Monitoring (if SENTRY_DSN is set)
SENTRY_DSN = os.environ.get('SENTRY_DSN')
if SENTRY_DSN:
    import sentry_sdk
    from sentry_sdk.integrations.django import DjangoIntegration
    from sentry_sdk.integrations.celery import CeleryIntegration
    
    sentry_sdk.init(
        dsn=SENTRY_DSN,
        integrations=[
            DjangoIntegration(),
            CeleryIntegration(),
        ],
        traces_sample_rate=0.1,
        send_default_pii=True,
        environment='production' if not DEBUG else 'development',
    )

# CORS Configuration - Add localhost for local development
CORS_ALLOWED_ORIGINS.extend([
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3002",
    "http://127.0.0.1:3002",
])

# Logging Configuration
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'INFO',
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
        'optimum_system': {
            'handlers': ['console'],
            'level': 'DEBUG' if DEBUG else 'INFO',
            'propagate': False,
        },
    },
}

