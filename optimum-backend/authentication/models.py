from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import uuid


class UserProfile(models.Model):
    """Extended user profile with additional information"""

    class RoleChoices(models.TextChoices):
        ADMIN = 'ADMIN', 'Admin'
        SUB_ADMIN = 'SUB_ADMIN', 'Sub Admin'
        SUPPLIER = 'SUPPLIER', 'Supplier'
        PRODUCT_REQUESTER = 'PRODUCT_REQUESTER', 'Product Requester'

    class StatusChoices(models.TextChoices):
        ACTIVE = 'ACTIVE', 'Active'
        PENDING = 'PENDING', 'Pending'
        SUSPENDED = 'SUSPENDED', 'Suspended'
        DISABLED = 'DISABLED', 'Disabled'

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    company_name = models.CharField(max_length=200, blank=True, null=True)
    role = models.CharField(
        max_length=40,
        choices=RoleChoices.choices,
        default=RoleChoices.PRODUCT_REQUESTER,
        help_text="User role that controls access to system features"
    )
    status = models.CharField(
        max_length=20,
        choices=StatusChoices.choices,
        default=StatusChoices.ACTIVE,
        help_text="Lifecycle status for the user account"
    )
    created_by = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='provisioned_users',
        help_text="Administrator who provisioned this account"
    )
    metadata = models.JSONField(
        default=dict,
        blank=True,
        help_text="Flexible metadata (e.g., supplier category, requester tags)"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['user'], name='profile_user_idx'),
            models.Index(fields=['role'], name='profile_role_idx'),
            models.Index(fields=['status'], name='profile_status_idx'),
        ]

    def __str__(self):
        return f"{self.user.username} - {self.role or 'User'}"


class PasswordResetRequest(models.Model):
    """Password reset requests routed through admin approval"""

    class StatusChoices(models.TextChoices):
        PENDING = 'PENDING', 'Pending'
        APPROVED = 'APPROVED', 'Approved'
        DENIED = 'DENIED', 'Denied'
        COMPLETED = 'COMPLETED', 'Completed'

    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    target_user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='password_reset_requests'
    )
    requested_by = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='initiated_password_resets',
        help_text="User who initiated the reset (can be self or admin)"
    )
    status = models.CharField(
        max_length=20,
        choices=StatusChoices.choices,
        default=StatusChoices.PENDING
    )
    reason = models.TextField(blank=True)
    expires_at = models.DateTimeField(help_text="When this token expires")
    approved_at = models.DateTimeField(null=True, blank=True)
    decided_by = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='processed_password_resets'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['status'], name='password_reset_status_idx'),
            models.Index(fields=['expires_at'], name='password_reset_expiry_idx'),
        ]
        ordering = ['-created_at']

    def mark_approved(self, approver: User):
        self.status = self.StatusChoices.APPROVED
        self.approved_at = timezone.now()
        self.decided_by = approver
        self.save(update_fields=['status', 'approved_at', 'decided_by'])

    def mark_denied(self, approver: User):
        self.status = self.StatusChoices.DENIED
        self.decided_by = approver
        self.save(update_fields=['status', 'decided_by'])
