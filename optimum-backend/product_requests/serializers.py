from django.contrib.auth import get_user_model
from rest_framework import serializers

from orders.utils import sanitize_text

from .models import ProductRequest, SupplierOffer, ChatMessage, AccountingEntry

User = get_user_model()


class UserSummarySerializer(serializers.ModelSerializer):
    role = serializers.CharField(source="profile.role", read_only=True)

    class Meta:
        model = User
        fields = ("id", "username", "email", "first_name", "last_name", "role")


class SupplierOfferSerializer(serializers.ModelSerializer):
    supplier = UserSummarySerializer(read_only=True)

    class Meta:
        model = SupplierOffer
        fields = (
            "id",
            "supplier",
            "request",
            "price",
            "delivery_date",
            "notes",
            "status",
            "score",
            "metadata",
            "created_at",
            "updated_at",
        )
        read_only_fields = ("supplier", "score", "status", "metadata", "created_at", "updated_at")

    def validate_notes(self, value):
        if value:
            return sanitize_text(value.strip())
        return value


class ProductRequestSerializer(serializers.ModelSerializer):
    requester = UserSummarySerializer(read_only=True)
    offers = SupplierOfferSerializer(many=True, read_only=True)

    class Meta:
        model = ProductRequest
        fields = (
            "id",
            "title",
            "description",
            "quantity",
            "delivery_deadline",
            "status",
            "requester",
            "recommended_supplier",
            "ai_recommendation",
            "metadata",
            "offers",
            "created_at",
            "updated_at",
        )
        read_only_fields = (
            "requester",
            "status",
            "recommended_supplier",
            "ai_recommendation",
            "offers",
            "created_at",
            "updated_at",
        )

    def validate_title(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError("Title cannot be empty")
        if len(value) > 200:
            raise serializers.ValidationError("Title cannot exceed 200 characters")
        return sanitize_text(value.strip())

    def validate_description(self, value):
        if value:
            return sanitize_text(value.strip())
        return value


class ChatMessageSerializer(serializers.ModelSerializer):
    sender = UserSummarySerializer(read_only=True)

    class Meta:
        model = ChatMessage
        fields = ("id", "request", "sender", "content", "attachments", "created_at")
        read_only_fields = ("sender", "created_at")

    def validate_content(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError("Content cannot be empty")
        return sanitize_text(value.strip())


class AccountingEntrySerializer(serializers.ModelSerializer):
    user = UserSummarySerializer(read_only=True)

    class Meta:
        model = AccountingEntry
        fields = (
            "id",
            "user",
            "request",
            "entry_type",
            "amount",
            "description",
            "metadata",
            "recorded_at",
        )
        read_only_fields = ("user", "recorded_at")

    def validate_description(self, value):
        if value:
            return sanitize_text(value.strip())
        return value






