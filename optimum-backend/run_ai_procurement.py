import os
import django
import random
from decimal import Decimal
from django.utils import timezone

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from orders.models import Order, SupplierOffer
from suppliers.models import Supplier

def run_procurement():
    print("[START] Starting AI Procurement Automation...")
    
    # 1. Get all pending orders
    pending_orders = Order.objects.filter(status='pending')
    print(f"[INFO] Found {pending_orders.count()} pending orders.")
    
    # 2. Get active suppliers
    active_suppliers = list(Supplier.objects.filter(is_active=True))
    if not active_suppliers:
        print("[ERROR] No active suppliers found. Please run setup_supplier_test.py first.")
        return

    for order in pending_orders:
        print(f"\n--- Processing Order #{order.id} ({order.product_type}) ---")
        
        # 3. Generate 3-5 random offers
        num_offers = min(random.randint(3, 5), len(active_suppliers))
        selected_suppliers = random.sample(active_suppliers, num_offers)
        
        offers = []
        base_price = random.randint(100, 500) # Base unit price
        
        for supplier in selected_suppliers:
            # Vary price slightly per supplier (-10% to +20%)
            price_variance = Decimal(str(random.uniform(0.9, 1.2)))
            unit_price = (Decimal(str(base_price)) * price_variance).quantize(Decimal('0.01'))
            
            offer, created = SupplierOffer.objects.get_or_create(
                order=order,
                supplier=supplier,
                defaults={
                    'unit_price': unit_price,
                    'status': 'pending',
                    'notes': f"AI-generated offer for {order.product_type}."
                }
            )
            if created:
                print(f"[OK] Created offer from {supplier.name}: ${unit_price}/unit")
            offers.append(offer)
        
        # 4. AI Best Price Selection (Simple logic for now: Lowest Price)
        best_offer = min(offers, key=lambda x: x.unit_price)
        print(f"[AI] AI Selection: Preferred supplier is {best_offer.supplier.name} at ${best_offer.unit_price}/unit.")
        
        # 5. Set status to Waiting Confirmation for the best one
        best_offer.status = 'waiting_confirmation'
        best_offer.save()
        
        # Pre-assign to order for visibility
        order.supplier = best_offer.supplier
        order.unit_price = best_offer.unit_price
        order.status = 'pending' # Keep pending until confirmed
        order.notes = f"{order.notes}\n[AI-Selection] Waiting confirmation from {best_offer.supplier.name}"
        order.save()
        
        print(f"[SENT] Sent confirmation request to {best_offer.supplier.name}.")

if __name__ == "__main__":
    run_procurement()
    print("\n[FINISH] Procurement automation cycle complete.")
