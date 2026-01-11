"""
Django settings for optimum_system project.

This file now imports from the settings module based on DJANGO_ENV environment variable.
The actual settings are organized in optimum_system/settings/ directory:
- base.py: Common settings
- development.py: Development settings (default)
- production.py: Production settings
- test.py: Test settings

To use a specific environment, set DJANGO_ENV environment variable:
- DJANGO_ENV=development (default)
- DJANGO_ENV=production
- DJANGO_ENV=test

Or use --settings flag:
- python manage.py runserver --settings=optimum_system.settings.development
"""

import os

# Set default environment if not specified
os.environ.setdefault('DJANGO_ENV', 'development')

# Import from settings module
from .settings import *
