from rest_framework import serializers

from orders.utils import sanitize_email, sanitize_phone, sanitize_text

from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["id", "name", "phone_number", "email", "address", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]

    def validate_name(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError("Name cannot be empty")
        if len(value) > 200:
            raise serializers.ValidationError("Name cannot exceed 200 characters")
        return sanitize_text(value.strip())

    def validate_email(self, value):
        if not value:
            return value
        sanitized = sanitize_email(value)
        if not sanitized:
            raise serializers.ValidationError("Invalid email format")
        return sanitized

    def validate_phone_number(self, value):
        if not value:
            return value
        sanitized = sanitize_phone(value)
        digits_only = (
            sanitized.replace("+", "")
            .replace("-", "")
            .replace(" ", "")
            .replace("(", "")
            .replace(")", "")
        )
        if len(digits_only) < 10:
            raise serializers.ValidationError("Phone number must be at least 10 digits")
        return sanitized

    def validate_address(self, value):
        if value:
            return sanitize_text(value.strip())
        return value





