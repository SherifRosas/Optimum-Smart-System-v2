from django.contrib import admin
from django.utils.html import format_html
from .models import Order, OrderMessage

class OrderMessageInline(admin.TabularInline):
    model = OrderMessage
    extra = 0
    readonly_fields = ['created_at']

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer_link', 'product_type', 'quantity', 'total_amount', 'status', 'delivery_date', 'created_at']
    list_filter = ['status', 'delivery_date', 'created_at']
    search_fields = ['customer__name', 'product_type', 'customer__phone_number']
    readonly_fields = ['total_amount', 'created_at', 'updated_at']
    inlines = [OrderMessageInline]
    ordering = ['-created_at']
    list_display_links = ['id', 'customer_link']  # Make both ID and customer name clickable
    
    def customer_link(self, obj):
        """Make customer name clickable"""
        if obj.customer:
            return format_html(
                '<a href="{}" style="color: #417690; text-decoration: underline; font-weight: 500;">{}</a>',
                f'/admin/orders/order/{obj.id}/change/',
                f'{obj.customer.name} ({obj.customer.phone_number})'
            )
        return '-'
    customer_link.short_description = 'Customer'
    customer_link.admin_order_field = 'customer__name'
    
    fieldsets = (
        ('Order Information', {
            'fields': ('customer', 'supplier', 'product_type', 'quantity', 'unit_price', 'total_amount')
        }),
        ('Delivery & Status', {
            'fields': ('delivery_date', 'status', 'notes'),
            'description': 'Notes field may contain [AI-Assigned] tag if supplier was auto-assigned by AI'
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def get_notes_display(self, obj):
        """Display notes with AI assignment highlighted"""
        if obj.notes and '[AI-Assigned]' in obj.notes:
            return format_html(
                '<div style="background: #e8f5e9; padding: 8px; border-left: 4px solid #4caf50; margin: 5px 0;">'
                '<strong>🤖 AI Assignment:</strong><br>{}'
                '</div>',
                obj.notes.replace('[AI-Assigned]', '<strong style="color: #2e7d32;">[AI-Assigned]</strong>')
            )
        return obj.notes or '-'
    get_notes_display.short_description = 'Notes (AI Assignment)'

@admin.register(OrderMessage)
class OrderMessageAdmin(admin.ModelAdmin):
    list_display = ['order', 'message_type', 'sender', 'created_at']
    list_filter = ['message_type', 'created_at']
    search_fields = ['order__id', 'content', 'sender']
    readonly_fields = ['created_at']
    ordering = ['-created_at']