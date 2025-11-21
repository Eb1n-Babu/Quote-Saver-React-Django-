# quotes_backend/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import QuotesViewSet

# Register the ViewSet properly with the router
router = DefaultRouter()
router.register(r'quotes', QuotesViewSet)  # This creates /quotes/ automatically

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # This adds: GET/POST /api/quotes/
]
