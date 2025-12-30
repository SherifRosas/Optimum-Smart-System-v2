"""
Django settings module for Optimum Smart System.

This module uses environment-based settings loading.
Set DJANGO_ENV environment variable or use --settings flag to specify which settings to use.

Available settings modules:
- base: Common settings for all environments
- development: Development-specific settings (default)
- production: Production-specific settings  
- test: Test-specific settings

Usage:
  DJANGO_ENV=development python manage.py runserver
  DJANGO_ENV=production python manage.py runserver
  DJANGO_ENV=test pytest
"""

import os

# Determine which settings to load based on environment
ENV = os.environ.get('DJANGO_ENV', 'development').lower()

# Import base settings first
from .base import *

# Then import environment-specific settings
if ENV == 'production':
    from .production import *
elif ENV == 'test':
    from .test import *
else:
    from .development import *

