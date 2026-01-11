"""
WebSocket consumers for real-time order updates
"""
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Order
from .serializers import OrderSerializer


class OrderConsumer(AsyncWebsocketConsumer):
    """Consumer for order list updates"""
    
    async def connect(self):
        self.group_name = 'orders'
        
        # Join orders group
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        
        await self.accept()
    
    async def disconnect(self, close_code):
        # Leave orders group
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )
    
    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json.get('message', '')
        
        # Echo message back (for testing)
        await self.send(text_data=json.dumps({
            'message': message
        }))
    
    # Receive message from order group
    async def order_update(self, event):
        """Send order update to WebSocket"""
        await self.send(text_data=json.dumps({
            'type': 'order_update',
            'order': event['order']
        }))
    
    async def order_created(self, event):
        """Send new order notification to WebSocket"""
        await self.send(text_data=json.dumps({
            'type': 'order_created',
            'order': event['order']
        }))
    
    async def order_status_changed(self, event):
        """Send order status change notification"""
        await self.send(text_data=json.dumps({
            'type': 'order_status_changed',
            'order_id': event['order_id'],
            'status': event['status']
        }))


class OrderDetailConsumer(AsyncWebsocketConsumer):
    """Consumer for specific order updates"""
    
    async def connect(self):
        self.order_id = self.scope['url_route']['kwargs']['order_id']
        self.group_name = f'order_{self.order_id}'
        
        # Verify order exists
        order_exists = await self.order_exists(self.order_id)
        if not order_exists:
            await self.close()
            return
        
        # Join order group
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        
        await self.accept()
        
        # Send current order data
        order_data = await self.get_order_data(self.order_id)
        await self.send(text_data=json.dumps({
            'type': 'order_data',
            'order': order_data
        }))
    
    async def disconnect(self, close_code):
        # Leave order group
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )
    
    @database_sync_to_async
    def order_exists(self, order_id):
        """Check if order exists"""
        return Order.objects.filter(id=order_id).exists()
    
    @database_sync_to_async
    def get_order_data(self, order_id):
        """Get order data"""
        try:
            order = Order.objects.select_related('customer', 'supplier').get(id=order_id)
            return OrderSerializer(order).data
        except Order.DoesNotExist:
            return None
    
    # Receive message from order group
    async def order_update(self, event):
        """Send order update to WebSocket"""
        await self.send(text_data=json.dumps({
            'type': 'order_update',
            'order': event['order']
        }))
    
    async def order_status_changed(self, event):
        """Send order status change notification"""
        await self.send(text_data=json.dumps({
            'type': 'order_status_changed',
            'order_id': event['order_id'],
            'status': event['status']
        }))


















