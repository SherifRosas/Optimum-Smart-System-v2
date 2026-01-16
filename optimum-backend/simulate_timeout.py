import os
import django
import sys
from django.utils import timezone
from datetime import timedelta

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'optimum_system.settings')
django.setup()

from orders.models import Order, SupplierOffer

def simulate_timeout(force=False):
    print(f"[CHECK] Checking for offer timeouts (Force: {force})...")
    
    timeout_limit = timezone.now() - timedelta(hours=24)
    
    # Find offers waiting confirmation that are too old
    waiting_offers = SupplierOffer.objects.filter(status='waiting_confirmation')
    
    if not force:
        waiting_offers = waiting_offers.filter(updated_at__lte=timeout_limit)
    
    if not waiting_offers.exists():
        print("[OK] No offers have timed out.")
        return

    for offer in waiting_offers:
        print(f"\n[TIMEOUT] Offer from {offer.supplier.name} for Order #{offer.order.id} has timed out.")
        offer.status = 'timeout'
        offer.save()
        
        # Look for the next best pending offer
        next_best = SupplierOffer.objects.filter(
            order=offer.order, 
            status='pending'
        ).order_by('unit_price').first()
        
        if next_best:
            print(f"[NEXT] Moving to next best offer: {next_best.supplier.name} at ${next_best.unit_price}/unit.")
            next_best.status = 'waiting_confirmation'
            next_best.save()
            
            # Update order
            order = offer.order
            order.supplier = next_best.supplier
            order.unit_price = next_best.unit_price
            order.notes = f"{order.notes}\n[AI-Fallback] Timeout from previous supplier. Now waiting for {next_best.supplier.name}."
            order.save()
            print(f"[SENT] Sent confirmation request to {next_best.supplier.name}.")
        else:
            print(f"[ERROR] No more offers available for Order #{offer.order.id}. Manual intervention required.")
            order = offer.order
            order.notes = f"{order.notes}\n[AI-Error] All automated offers timed out. No more suppliers available."
            order.save()

if __name__ == "__main__":
    force_timeout = '--force' in sys.argv
    simulate_timeout(force=force_timeout)
    print("\n[FINISH] Timeout simulation complete.")
