"""
URL configuration for optimum_system project.
"""

from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from rest_framework_simplejwt.views import TokenRefreshView
from .health import health_check, health_detailed, readiness_check, liveness_check, version_info

urlpatterns = [
    path("", RedirectView.as_view(url="/admin/", permanent=False), name="home"),
    path("admin/", admin.site.urls),

    # Health check endpoints (for monitoring and load balancers)
    path("health/", health_check, name="health"),
    path("health/detailed/", health_detailed, name="health_detailed"),
    path("health/ready/", readiness_check, name="readiness"),
    path("health/live/", liveness_check, name="liveness"),
    path("version/", version_info, name="version"),

    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
    path("api/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),

    path("api/auth/", include("authentication.urls")),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Core API routes
    path("api/", include("customers.urls")),
    path("api/", include("suppliers.urls")),
    path("api/", include("orders.urls")),
    path("api/ai/", include("ai.urls")),
    path("api/", include("product_requests.urls")),
    path("api/accounting/", include("accounting.urls")),
]
