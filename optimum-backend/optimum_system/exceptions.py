"""
Custom DRF exception handler to ensure consistent error responses.
"""

import logging

from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import exception_handler

logger = logging.getLogger(__name__)


def custom_exception_handler(exc, context):
    """
    Wrap DRF exceptions into a consistent shape:

    {
      "error": {
        "status_code": 401,
        "message": "Authentication credentials were not provided.",
        "details": {...}
      }
    }
    """
    response = exception_handler(exc, context)

    if response is None:
        # Non-DRF exception: avoid leaking details unless DEBUG.
        logger.exception("Unhandled exception", exc_info=True)
        message = "Internal server error"
        details = None
        if getattr(settings, "DEBUG", False):
            message = str(exc) or message
            details = {"type": exc.__class__.__name__}

        return Response(
            {"error": {"status_code": 500, "message": message, "details": details}},
            status=500,
        )

    # DRF exception: keep DRF payload in details.
    message = None
    if isinstance(response.data, dict):
        # Prefer DRF-provided 'detail' field if present.
        message = response.data.get("detail")
    if not message:
        message = "An error occurred"

    logger.info("API error %s: %s", response.status_code, exc.__class__.__name__)

    response.data = {
        "error": {
            "status_code": response.status_code,
            "message": message,
            "details": response.data,
        }
    }
    return response






