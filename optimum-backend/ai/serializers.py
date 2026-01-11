"""
AI Serializers for Optimum Smart System
"""

from rest_framework import serializers

from orders.utils import sanitize_text

from .models import AIAnalysis, CustomerSentiment, DemandPrediction, ChatSession, ChatMessage


class AIAnalysisSerializer(serializers.ModelSerializer):
    """Serializer for AI Analysis"""

    class Meta:
        model = AIAnalysis
        fields = "__all__"
        read_only_fields = ("created_at", "updated_at")


class CustomerSentimentSerializer(serializers.ModelSerializer):
    """Serializer for Customer Sentiment"""

    class Meta:
        model = CustomerSentiment
        fields = "__all__"
        read_only_fields = ("created_at",)


class DemandPredictionSerializer(serializers.ModelSerializer):
    """Serializer for Demand Prediction"""

    class Meta:
        model = DemandPrediction
        fields = "__all__"
        read_only_fields = ("created_at",)


class OrderAnalysisRequestSerializer(serializers.Serializer):
    """Serializer for order analysis requests"""

    order_text = serializers.CharField(max_length=1000, required=False, allow_blank=True)
    order_id = serializers.IntegerField(required=False)

    def validate_order_text(self, value):
        if value:
            return sanitize_text(value.strip())
        return value


class BusinessInsightsSerializer(serializers.Serializer):
    """Serializer for business insights"""

    insights = serializers.ListField(child=serializers.CharField())
    recommendations = serializers.ListField(child=serializers.CharField())
    metrics = serializers.DictField()


class ChatMessageSerializer(serializers.ModelSerializer):
    """Serializer for Chat Message"""

    class Meta:
        model = ChatMessage
        fields = "__all__"
        read_only_fields = ("created_at",)

    def validate_user_message(self, value):
        if value:
            return sanitize_text(value.strip())
        return value

    def validate_ai_response(self, value):
        if value:
            return sanitize_text(value.strip())
        return value


class ChatSessionSerializer(serializers.ModelSerializer):
    """Serializer for Chat Session"""

    messages = ChatMessageSerializer(many=True, read_only=True)

    class Meta:
        model = ChatSession
        fields = "__all__"
        read_only_fields = ("created_at", "updated_at")


class ChatRequestSerializer(serializers.Serializer):
    """Serializer for chat requests"""

    message = serializers.CharField(max_length=2000, required=True)
    session_id = serializers.CharField(max_length=100, required=False, allow_blank=True)
    context = serializers.DictField(required=False, default=dict)

    def validate_message(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError("Message cannot be empty")
        return sanitize_text(value.strip())

    def validate_session_id(self, value):
        if value:
            return sanitize_text(value.strip())
        return value






