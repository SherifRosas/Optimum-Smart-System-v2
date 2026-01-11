from django.contrib import admin
from .models import (
    ProductRequest,
    SupplierOffer,
    RequestDecision,
    ChatMessage,
    AccountingEntry,
)


@admin.register(ProductRequest)
class ProductRequestAdmin(admin.ModelAdmin):
    list_display = ('title', 'requester', 'status', 'delivery_deadline', 'created_at')
    search_fields = ('title', 'description', 'requester__username')
    list_filter = ('status', 'delivery_deadline')


@admin.register(SupplierOffer)
class SupplierOfferAdmin(admin.ModelAdmin):
    list_display = ('request', 'supplier', 'price', 'delivery_date', 'status', 'score')
    search_fields = ('request__title', 'supplier__username')
    list_filter = ('status',)


admin.site.register(RequestDecision)
admin.site.register(ChatMessage)
admin.site.register(AccountingEntry)

