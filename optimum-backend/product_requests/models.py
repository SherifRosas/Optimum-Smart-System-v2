from django.conf import settings
from django.db import models
from django.utils import timezone


class ProductRequest(models.Model):
    """Product or service request submitted by a requester"""

    class Status(models.TextChoices):
        SUBMITTED = 'submitted', 'Submitted'
        NOTIFIED_SUPPLIERS = 'notified_suppliers', 'Suppliers Notified'
        COLLECTING_OFFERS = 'collecting_offers', 'Collecting Offers'
        AI_RECOMMENDED = 'ai_recommended', 'AI Recommended'
        ASSIGNED = 'assigned', 'Assigned'
        IN_DELIVERY = 'in_delivery', 'In Delivery'
        DELIVERED = 'delivered', 'Delivered'
        CANCELLED = 'cancelled', 'Cancelled'

    requester = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='product_requests'
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    quantity = models.PositiveIntegerField(default=1)
    delivery_deadline = models.DateField()
    status = models.CharField(max_length=40, choices=Status.choices, default=Status.SUBMITTED)
    broadcasted_at = models.DateTimeField(null=True, blank=True)
    recommended_supplier = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='recommended_requests'
    )
    ai_recommendation = models.JSONField(blank=True, null=True)
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['requester', '-created_at'], name='product_request_requester_idx'),
            models.Index(fields=['status'], name='product_request_status_idx'),
        ]

    def __str__(self):
        return f"{self.title} ({self.requester.username})"


class SupplierOffer(models.Model):
    """Supplier offers created for a product request"""

    class Status(models.TextChoices):
        PENDING = 'pending', 'Pending'
        RECOMMENDED = 'recommended', 'Recommended by AI'
        ACCEPTED = 'accepted', 'Accepted by Admin'
        REJECTED = 'rejected', 'Rejected'

    supplier = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='supplier_offers'
    )
    request = models.ForeignKey(
        ProductRequest,
        on_delete=models.CASCADE,
        related_name='offers'
    )
    price = models.DecimalField(max_digits=12, decimal_places=2)
    delivery_date = models.DateField()
    notes = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.PENDING)
    score = models.FloatField(null=True, blank=True)
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('supplier', 'request')
        indexes = [
            models.Index(fields=['supplier', '-created_at'], name='supp_offer_supplier_idx'),
            models.Index(fields=['request', 'status'], name='supp_offer_req_stat_idx'),
        ]

    def __str__(self):
        return f"Offer #{self.id} - {self.request.title}"


class RequestDecision(models.Model):
    """Tracks the final decision for a request"""

    class SourceChoices(models.TextChoices):
        AI = 'AI', 'AI'
        ADMIN = 'ADMIN', 'Admin'

    request = models.OneToOneField(ProductRequest, on_delete=models.CASCADE, related_name='decision')
    selected_offer = models.ForeignKey(SupplierOffer, null=True, blank=True, on_delete=models.SET_NULL)
    decision_source = models.CharField(max_length=10, choices=SourceChoices.choices)
    decision_reason = models.TextField(blank=True)
    confirmed_at = models.DateTimeField(null=True, blank=True)
    deadline = models.DateTimeField()

    class Meta:
        indexes = [
            models.Index(fields=['deadline'], name='request_decision_deadline_idx'),
        ]


class ChatMessage(models.Model):
    """Message thread linked to a product request"""

    request = models.ForeignKey(ProductRequest, on_delete=models.CASCADE, related_name='chat_messages')
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    attachments = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']


class AccountingEntry(models.Model):
    """Simple accounting entries per user/request"""

    class EntryType(models.TextChoices):
        DEBIT = 'debit', 'Debit'
        CREDIT = 'credit', 'Credit'

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='accounting_entries')
    request = models.ForeignKey(ProductRequest, null=True, blank=True, on_delete=models.SET_NULL)
    entry_type = models.CharField(max_length=10, choices=EntryType.choices)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    description = models.CharField(max_length=255, blank=True)
    metadata = models.JSONField(default=dict, blank=True)
    recorded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-recorded_at']
        indexes = [
            models.Index(fields=['user', '-recorded_at'], name='accounting_user_idx'),
        ]

