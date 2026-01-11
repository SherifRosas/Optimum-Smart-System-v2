"""
Health check endpoints for monitoring and observability.
Critical for long-term system reliability.
"""

from datetime import datetime, timedelta
from django.http import JsonResponse
from django.db import connection
from django.core.cache import cache
from django.conf import settings
import sys
import os
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    """
    Basic health check endpoint.
    Returns 200 if system is operational.
    """
    return JsonResponse({
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat(),
        'service': 'optimum-smart-system',
        'version': getattr(settings, 'VERSION', 'unknown')
    })


@api_view(['GET'])
@permission_classes([AllowAny])
def health_detailed(request):
    """
    Detailed health check with component status.
    Used by monitoring systems and load balancers.
    """
    health_status = {
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat(),
        'service': 'optimum-smart-system',
        'version': getattr(settings, 'VERSION', 'unknown'),
        'components': {}
    }

    # Database health
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            cursor.fetchone()
        health_status['components']['database'] = {
            'status': 'healthy',
            'response_time_ms': 0  # Could measure this
        }
    except Exception as e:
        health_status['status'] = 'degraded'
        health_status['components']['database'] = {
            'status': 'unhealthy',
            'error': str(e)
        }

    # Cache health
    try:
        cache.set('health_check', 'ok', 10)
        cache_result = cache.get('health_check')
        if cache_result == 'ok':
            health_status['components']['cache'] = {
                'status': 'healthy'
            }
        else:
            health_status['status'] = 'degraded'
            health_status['components']['cache'] = {
                'status': 'unhealthy',
                'error': 'Cache read/write failed'
            }
    except Exception as e:
        health_status['status'] = 'degraded'
        health_status['components']['cache'] = {
            'status': 'unhealthy',
            'error': str(e)
        }

    # Disk space check
    try:
        import shutil
        total, used, free = shutil.disk_usage('/')
        free_percent = (free / total) * 100
        health_status['components']['disk'] = {
            'status': 'healthy' if free_percent > 10 else 'warning',
            'free_percent': round(free_percent, 2),
            'free_gb': round(free / (1024**3), 2)
        }
        if free_percent < 10:
            health_status['status'] = 'degraded'
    except Exception as e:
        health_status['components']['disk'] = {
            'status': 'unknown',
            'error': str(e)
        }

    # Python version
    health_status['runtime'] = {
        'python_version': sys.version.split()[0],
        'django_version': getattr(settings, 'DJANGO_VERSION', 'unknown')
    }

    http_status = status.HTTP_200_OK if health_status['status'] == 'healthy' else status.HTTP_503_SERVICE_UNAVAILABLE
    return Response(health_status, status=http_status)


@api_view(['GET'])
@permission_classes([AllowAny])
def readiness_check(request):
    """
    Kubernetes-style readiness probe.
    Returns 200 only when system is ready to accept traffic.
    """
    try:
        # Check database
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
        
        # Check cache
        cache.set('readiness_check', 'ok', 5)
        if cache.get('readiness_check') != 'ok':
            return Response({
                'status': 'not_ready',
                'reason': 'cache_unavailable'
            }, status=status.HTTP_503_SERVICE_UNAVAILABLE)
        
        return Response({
            'status': 'ready',
            'timestamp': datetime.utcnow().isoformat()
        })
    except Exception as e:
        return Response({
            'status': 'not_ready',
            'reason': str(e)
        }, status=status.HTTP_503_SERVICE_UNAVAILABLE)


@api_view(['GET'])
@permission_classes([AllowAny])
def liveness_check(request):
    """
    Kubernetes-style liveness probe.
    Returns 200 if application is alive (even if degraded).
    """
    return Response({
        'status': 'alive',
        'timestamp': datetime.utcnow().isoformat()
    })


@api_view(['GET'])
@permission_classes([AllowAny])
def version_info(request):
    """
    Version and build information.
    Useful for deployment verification and debugging.
    """
    return JsonResponse({
        'version': getattr(settings, 'VERSION', 'unknown'),
        'build_date': getattr(settings, 'BUILD_DATE', 'unknown'),
        'git_commit': getattr(settings, 'GIT_COMMIT', 'unknown'),
        'environment': getattr(settings, 'ENVIRONMENT', 'unknown'),
        'django_version': getattr(settings, 'DJANGO_VERSION', 'unknown'),
        'python_version': sys.version.split()[0]
    })




