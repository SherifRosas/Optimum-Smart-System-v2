from django.db import models
from django.core.validators import RegexValidator

class Customer(models.Model):
    name = models.CharField(max_length=200, help_text="Customer's full name")
    phone_number = models.CharField(
        max_length=20,
        validators=[RegexValidator(
            regex=r'^[\+]?[0-9\s\-\(\)]{10,}$',
            message='Enter a valid phone number'
        )],
        help_text="Customer's phone number"
    )
    email = models.EmailField(blank=True, null=True, help_text="Customer's email address")
    address = models.TextField(blank=True, null=True, help_text="Customer's address")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Customer'
        verbose_name_plural = 'Customers'
        indexes = [
            models.Index(fields=['phone_number'], name='customer_phone_idx'),
            models.Index(fields=['email'], name='customer_email_idx'),
        ]

    def __str__(self):
        return f"{self.name} ({self.phone_number})"