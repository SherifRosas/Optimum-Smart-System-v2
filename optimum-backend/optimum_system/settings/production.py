"""
Production settings for optimum_system project.

These settings are used when DJANGO_ENV=production.
All sensitive values should come from environment variables.
"""

from .base import *
import os

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG', 'False').lower() == 'true'

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')
if not SECRET_KEY:
    raise ValueError('SECRET_KEY environment variable must be set in production!')

# Allowed hosts for production
_allowed_hosts_env = os.environ.get('ALLOWED_HOSTS')
if _allowed_hosts_env:
    ALLOWED_HOSTS = [h.strip() for h in _allowed_hosts_env.split(',') if h.strip()]
else:
    # SECURITY: ALLOWED_HOSTS must be set via environment variable in production
    # This prevents unauthorized host header attacks
    raise ValueError(
        'ALLOWED_HOSTS environment variable must be set in production! '
        'Example: ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com'
    )

# CORS settings for production
# SECURITY: Only production domains should be in the fallback list.
# Preview/branch deployment URLs (containing -git- or hash patterns) are temporary,
# publicly accessible, and should NEVER be trusted in production CORS/CSRF settings.
# Use CORS_ALLOWED_ORIGINS environment variable to add preview URLs if needed for testing.
_cors_origins_env = os.environ.get('CORS_ALLOWED_ORIGINS')
if _cors_origins_env:
    CORS_ALLOWED_ORIGINS = [origin.strip() for origin in _cors_origins_env.split(',') if origin.strip()]
else:
    # Only production domains - no preview/branch deployment URLs
    # Preview URLs should be added via CORS_ALLOWED_ORIGINS environment variable if needed
    CORS_ALLOWED_ORIGINS = [
        "https://optimum-smart-system.vercel.app",
        "https://optimum-smart-system-navy.vercel.app",
        # Add other production domains here - NOT preview/branch deployments
    ]

CORS_ALLOW_CREDENTIALS = True

# Database - PostgreSQL for production
DATABASE_URL = os.environ.get('DATABASE_URL')
if DATABASE_URL and 'postgresql' in DATABASE_URL:
    # Parse DATABASE_URL (format: postgresql://user:password@host:port/dbname)
    try:
        import dj_database_url
        DATABASES = {
            'default': dj_database_url.config(
                default=DATABASE_URL,
                conn_max_age=600,  # 10 minutes connection pooling
            )
        }
    except ImportError:
        # Fallback if dj-database-url not installed
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': BASE_DIR / 'db.sqlite3',
            }
        }
else:
    # Fallback to SQLite if DATABASE_URL not set (not recommended for production)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# Session Security (strict for production)
SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = 'Lax'

# CSRF Protection (strict for production)
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True
CSRF_TRUSTED_ORIGINS = CORS_ALLOWED_ORIGINS

# JWT Settings - use production SECRET_KEY
SIMPLE_JWT['SIGNING_KEY'] = SECRET_KEY

# Additional Security Headers
SECURE_SSL_REDIRECT = os.environ.get('SECURE_SSL_REDIRECT', 'False').lower() == 'true'
SECURE_HSTS_SECONDS = 31536000 if SECURE_SSL_REDIRECT else 0
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# Sentry Error Monitoring (optional)
if os.environ.get('SENTRY_DSN'):
    import sentry_sdk
    from sentry_sdk.integrations.django import DjangoIntegration
    
    sentry_sdk.init(
        dsn=os.environ.get('SENTRY_DSN'),
        integrations=[DjangoIntegration()],
        traces_sample_rate=0.1,
        send_default_pii=False,
        environment='production',
    )

# Logging for production
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
        'level': 'WARNING',
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'WARNING',
            'propagate': False,
        },
    },
}

