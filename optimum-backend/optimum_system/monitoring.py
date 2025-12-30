"""
Monitoring and observability utilities for long-term system reliability.
"""

import logging
import time
from functools import wraps
from django.core.cache import cache
from django.db import connection
from django.conf import settings

logger = logging.getLogger(__name__)


def log_performance(func):
    """
    Decorator to log function execution time.
    Useful for identifying performance bottlenecks.
    """
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        try:
            result = func(*args, **kwargs)
            execution_time = time.time() - start_time
            
            # Log slow operations (> 1 second)
            if execution_time > 1.0:
                logger.warning(
                    f"Slow operation detected: {func.__name__} took {execution_time:.2f}s",
                    extra={
                        'function': func.__name__,
                        'execution_time': execution_time,
                        'args_count': len(args),
                        'kwargs_keys': list(kwargs.keys())
                    }
                )
            else:
                logger.debug(
                    f"{func.__name__} executed in {execution_time:.2f}s",
                    extra={'execution_time': execution_time}
                )
            
            return result
        except Exception as e:
            execution_time = time.time() - start_time
            logger.error(
                f"Error in {func.__name__} after {execution_time:.2f}s: {str(e)}",
                extra={
                    'function': func.__name__,
                    'execution_time': execution_time,
                    'error': str(e)
                },
                exc_info=True
            )
            raise
    return wrapper


def track_database_queries(func):
    """
    Decorator to track database query count and time.
    """
    @wraps(func)
    def wrapper(*args, **kwargs):
        initial_queries = len(connection.queries)
        start_time = time.time()
        
        try:
            result = func(*args, **kwargs)
            query_count = len(connection.queries) - initial_queries
            execution_time = time.time() - start_time
            
            # Log if too many queries (N+1 problem detection)
            if query_count > 10:
                logger.warning(
                    f"High query count in {func.__name__}: {query_count} queries in {execution_time:.2f}s",
                    extra={
                        'function': func.__name__,
                        'query_count': query_count,
                        'execution_time': execution_time
                    }
                )
            
            return result
        except Exception as e:
            logger.error(
                f"Database error in {func.__name__}: {str(e)}",
                extra={'function': func.__name__},
                exc_info=True
            )
            raise
    return wrapper


class SystemMetrics:
    """
    Collect and report system metrics for monitoring.
    """
    
    @staticmethod
    def get_database_stats():
        """Get database connection and query statistics."""
        try:
            with connection.cursor() as cursor:
                # SQLite specific - adjust for other databases
                cursor.execute("SELECT COUNT(*) FROM sqlite_master WHERE type='table'")
                table_count = cursor.fetchone()[0]
                
            return {
                'connection_status': 'healthy',
                'table_count': table_count,
                'query_count': len(connection.queries)
            }
        except Exception as e:
            logger.error(f"Database stats error: {str(e)}")
            return {
                'connection_status': 'unhealthy',
                'error': str(e)
            }
    
    @staticmethod
    def get_cache_stats():
        """Get cache statistics."""
        try:
            # Test cache
            test_key = 'health_check_test'
            cache.set(test_key, 'ok', 10)
            result = cache.get(test_key)
            
            return {
                'status': 'healthy' if result == 'ok' else 'degraded',
                'backend': getattr(cache, '_cache', {}).get('BACKEND', 'unknown')
            }
        except Exception as e:
            logger.error(f"Cache stats error: {str(e)}")
            return {
                'status': 'unhealthy',
                'error': str(e)
            }
    
    @staticmethod
    def get_system_info():
        """Get general system information."""
        import sys
        import platform
        
        return {
            'python_version': sys.version.split()[0],
            'platform': platform.platform(),
            'django_version': getattr(settings, 'DJANGO_VERSION', 'unknown'),
            'debug_mode': settings.DEBUG,
            'allowed_hosts_count': len(settings.ALLOWED_HOSTS)
        }


def setup_logging():
    """
    Configure logging for production use.
    Should be called in settings.py or wsgi.py
    """
    logging_config = {
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'verbose': {
                'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
                'style': '{',
            },
            'simple': {
                'format': '{levelname} {message}',
                'style': '{',
            },
        },
        'handlers': {
            'console': {
                'class': 'logging.StreamHandler',
                'formatter': 'verbose',
            },
            # Add file handler for production
            'file': {
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': 'logs/optimum_system.log',
                'maxBytes': 1024 * 1024 * 10,  # 10MB
                'backupCount': 5,
                'formatter': 'verbose',
            },
        },
        'root': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
        },
        'loggers': {
            'django': {
                'handlers': ['console', 'file'],
                'level': 'INFO',
                'propagate': False,
            },
            'optimum_system': {
                'handlers': ['console', 'file'],
                'level': 'DEBUG' if settings.DEBUG else 'INFO',
                'propagate': False,
            },
        },
    }
    
    return logging_config




