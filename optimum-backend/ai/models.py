"""
AI Models for Optimum Smart System
"""

from django.db import models
from django.contrib.auth.models import User
from orders.models import Order


class AIAnalysis(models.Model):
    """Store AI analysis results for orders"""
    
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='ai_analysis')
    analysis_data = models.JSONField(default=dict)
    recommendations = models.JSONField(default=dict)
    confidence_score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "AI Analysis"
        verbose_name_plural = "AI Analyses"
    
    def __str__(self):
        return f"AI Analysis for Order #{self.order.id}"


class CustomerSentiment(models.Model):
    """Store customer sentiment analysis"""
    
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='sentiment_analyses')
    sentiment = models.CharField(max_length=20, choices=[
        ('positive', 'Positive'),
        ('neutral', 'Neutral'),
        ('negative', 'Negative')
    ])
    confidence = models.FloatField(default=0.0)
    analysis_data = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Customer Sentiment"
        verbose_name_plural = "Customer Sentiments"
    
    def __str__(self):
        return f"Sentiment: {self.sentiment} for Order #{self.order.id}"


class DemandPrediction(models.Model):
    """Store demand predictions"""
    
    product_type = models.CharField(max_length=100)
    predicted_demand = models.CharField(max_length=50)
    confidence = models.FloatField(default=0.0)
    prediction_data = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Demand Prediction"
        verbose_name_plural = "Demand Predictions"
    
    def __str__(self):
        return f"Demand prediction for {self.product_type}"


class ChatSession(models.Model):
    """Store chat session information"""
    
    session_id = models.CharField(max_length=100, unique=True, db_index=True)
    user_context = models.JSONField(default=dict, help_text="Stores user preferences and context")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = "Chat Session"
        verbose_name_plural = "Chat Sessions"
        ordering = ['-updated_at']
        indexes = [
            models.Index(fields=['session_id'], name='chat_session_id_idx'),
            models.Index(fields=['is_active', '-updated_at'], name='chat_active_updated_idx'),
        ]
    
    def __str__(self):
        return f"Chat Session: {self.session_id}"


class ChatMessage(models.Model):
    """Store individual chat messages"""
    
    session = models.ForeignKey(ChatSession, on_delete=models.CASCADE, related_name='messages')
    user_message = models.TextField()
    ai_response = models.TextField()
    context_data = models.JSONField(default=dict, help_text="Additional context for the message")
    message_type = models.CharField(
        max_length=20,
        choices=[
            ('system_help', 'System Help'),
            ('order_management', 'Order Management'),
            ('business_insights', 'Business Insights'),
            ('general', 'General'),
        ],
        default='general'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Chat Message"
        verbose_name_plural = "Chat Messages"
        ordering = ['created_at']
        indexes = [
            models.Index(fields=['session', 'created_at'], name='chat_msg_sess_creat_idx'),
        ]
    
    def __str__(self):
        return f"Message in {self.session.session_id[:8]}... at {self.created_at}"



