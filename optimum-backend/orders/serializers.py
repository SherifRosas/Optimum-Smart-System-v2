from django.utils import timezone
from rest_framework import serializers

from customers.models import Customer
from customers.serializers import CustomerSerializer
from suppliers.models import Supplier
from suppliers.serializers import SupplierSerializer

from .models import Order, OrderMessage, SupplierOffer
from .utils import sanitize_text


class OrderMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderMessage
        fields = ["id", "message_type", "content", "sender", "created_at"]
        read_only_fields = ["id", "created_at"]


class SupplierOfferSerializer(serializers.ModelSerializer):
    supplier_name = serializers.CharField(source="supplier.name", read_only=True)

    class Meta:
        model = SupplierOffer
        fields = ["id", "supplier", "supplier_name", "unit_price", "total_amount", "status", "notes", "created_at"]


class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(read_only=True)
    customer_id = serializers.PrimaryKeyRelatedField(
        queryset=Customer.objects.all(),
        source="customer",
        write_only=True,
    )

    supplier = SupplierSerializer(read_only=True)
    supplier_id = serializers.PrimaryKeyRelatedField(
        queryset=Supplier.objects.all(),
        source="supplier",
        write_only=True,
        required=False,
        allow_null=True,
    )

    messages = OrderMessageSerializer(many=True, read_only=True)
    offers = SupplierOfferSerializer(many=True, read_only=True)

    # Added to fix "N/A" customer display issue
    customer_name = serializers.CharField(source="customer.name", read_only=True)
    customer_phone = serializers.CharField(source="customer.phone_number", read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "customer",
            "customer_id",
            "customer_name",
            "customer_phone",
            "supplier",
            "supplier_id",
            "product_type",
            "quantity",
            "unit_price",
            "total_amount",
            "delivery_date",
            "status",
            "notes",
            "is_delivered_confirmed",
            "customer_feedback",
            "created_at",
            "updated_at",
            "messages",
            "offers",
        ]
        read_only_fields = ["id", "total_amount", "created_at", "updated_at"]

    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("Quantity must be greater than 0")
        return value

    def validate_unit_price(self, value):
        if value < 0:
            raise serializers.ValidationError("Unit price cannot be negative")
        return value

    def validate_delivery_date(self, value):
        if value < timezone.now().date():
            raise serializers.ValidationError("Delivery date cannot be in the past")
        return value

    def validate_product_type(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError("Product type cannot be empty")
        if len(value) > 200:
            raise serializers.ValidationError("Product type cannot exceed 200 characters")
        return sanitize_text(value.strip())


class OrderListSerializer(serializers.ModelSerializer):
    """Simplified serializer for order lists."""

    customer_name = serializers.CharField(source="customer.name", read_only=True)
    customer_phone = serializers.CharField(source="customer.phone_number", read_only=True)
    supplier_name = serializers.CharField(source="supplier.name", read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "customer_name",
            "customer_phone",
            "supplier_name",
            "product_type",
            "quantity",
            "total_amount",
            "delivery_date",
            "status",
            "created_at",
        ]





