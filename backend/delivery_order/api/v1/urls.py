from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BillViewSet, OrderViewSet, PaymentMethodViewSet

router = DefaultRouter()
router.register("order", OrderViewSet)
router.register("bill", BillViewSet)
router.register("paymentmethod", PaymentMethodViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
