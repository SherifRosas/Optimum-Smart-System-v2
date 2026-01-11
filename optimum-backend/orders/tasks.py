"""
Celery tasks for orders app
"""
from celery import shared_task
from django.utils import timezone
from datetime import timedelta
from .models import Order
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import json


@shared_task
def send_order_notification(order_id):
    """Send order notification via WebSocket"""
    try:
        order = Order.objects.select_related('customer', 'supplier').get(id=order_id)
        from .serializers import OrderSerializer
        order_data = OrderSerializer(order).data
        
        channel_layer = get_channel_layer()
        if channel_layer:
            # Send to orders group
            async_to_sync(channel_layer.group_send)(
                'orders',
                {
                    'type': 'order_created',
                    'order': order_data
                }
            )
            
            # Send to specific order group
            async_to_sync(channel_layer.group_send)(
                f'order_{order_id}',
                {
                    'type': 'order_update',
                    'order': order_data
                }
            )
    except Order.DoesNotExist:
        pass


@shared_task
def send_order_status_update(order_id, status):
    """Send order status update via WebSocket"""
    try:
        channel_layer = get_channel_layer()
        if channel_layer:
            # Send to orders group
            async_to_sync(channel_layer.group_send)(
                'orders',
                {
                    'type': 'order_status_changed',
                    'order_id': order_id,
                    'status': status
                }
            )
            
            # Send to specific order group
            async_to_sync(channel_layer.group_send)(
                f'order_{order_id}',
                {
                    'type': 'order_status_changed',
                    'order_id': order_id,
                    'status': status
                }
            )
    except Exception as e:
        print(f"Error sending status update: {e}")


@shared_task
def cleanup_old_orders():
    """Cleanup orders older than 1 year"""
    cutoff_date = timezone.now() - timedelta(days=365)
    deleted_count = Order.objects.filter(
        created_at__lt=cutoff_date,
        status__in=['delivered', 'cancelled']
    ).delete()[0]
    return f"Deleted {deleted_count} old orders"


@shared_task
def process_order_analytics():
    """Generate order analytics (can be scheduled)"""
    from django.db.models import Count, Sum, Avg
    from datetime import datetime, timedelta
    
    today = timezone.now().date()
    week_ago = today - timedelta(days=7)
    month_ago = today - timedelta(days=30)
    
    analytics = {
        'total_orders': Order.objects.count(),
        'orders_today': Order.objects.filter(created_at__date=today).count(),
        'orders_this_week': Order.objects.filter(created_at__date__gte=week_ago).count(),
        'orders_this_month': Order.objects.filter(created_at__date__gte=month_ago).count(),
        'total_revenue': Order.objects.aggregate(Sum('total_amount'))['total_amount__sum'] or 0,
        'avg_order_value': Order.objects.aggregate(Avg('total_amount'))['total_amount__avg'] or 0,
    }
    
    return analytics


















