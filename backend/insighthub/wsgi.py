"""
WSGI config for project_name project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/stable/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# Replace 'project_name' with your actual Django project folder name
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'insighthub.settings')

application = get_wsgi_application()
