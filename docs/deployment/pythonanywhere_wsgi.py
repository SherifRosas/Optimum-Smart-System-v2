"""
PythonAnywhere WSGI Configuration File

This file should be copied to:
/var/www/sherifrissas_pythonanywhere_com_wsgi.py

Or configured in PythonAnywhere Web App settings:
- WSGI configuration file: /var/www/sherifrissas_pythonanywhere_com_wsgi.py
- Source code: /home/sherifrissas/optimum-backend
"""

import sys
import os

# Add the project directory to the Python path
path = '/home/sherifrissas/optimum-backend'
if path not in sys.path:
    sys.path.insert(0, path)

# Set the Django settings module
os.environ['DJANGO_SETTINGS_MODULE'] = 'optimum_system.settings'

# Import Django's WSGI application
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()



