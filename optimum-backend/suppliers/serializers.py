from rest_framework import serializers

from orders.utils import sanitize_email, sanitize_phone, sanitize_text

from .models import Supplier


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = [
            "id",
            "name",
            "contact_person",
            "email",
            "phone_number",
            "address",
            "rating",
            "is_active",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]

    def validate_name(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError("Name cannot be empty")
        if len(value) > 200:
            raise serializers.ValidationError("Name cannot exceed 200 characters")
        return sanitize_text(value.strip())

    def validate_contact_person(self, value):
        if value:
            return sanitize_text(value.strip())
        return value

    def validate_email(self, value):
        if not value:
            return value
        sanitized = sanitize_email(value)
        if not sanitized:
            raise serializers.ValidationError("Invalid email format")
        return sanitized

    def validate_phone_number(self, value):
        if value:
            return sanitize_phone(value)
        return value

    def validate_address(self, value):
        if value:
            return sanitize_text(value.strip())
        return value

    def validate_rating(self, value):
        if value < 0 or value > 5:
            raise serializers.ValidationError("Rating must be between 0.0 and 5.0")
        return value





