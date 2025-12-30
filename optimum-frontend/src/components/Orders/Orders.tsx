import { useOrders } from '@/hooks/queries/useOrders';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export function Orders() {
  const { data, isLoading, error } = useOrders();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Error loading orders</h2>
        </div>
      </div>
    );
  }

  const orders = data?.results || [];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Orders</h1>
      <div className="rounded-lg bg-white shadow">
        <div className="p-6">
          <p className="text-gray-600">Total orders: {data?.count || 0}</p>
          <div className="mt-4 space-y-2">
            {orders.map((order) => (
              <div key={order.id} className="rounded border p-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Order #{order.id}</span>
                  <span className="text-sm text-gray-500">{order.status}</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Total: EGP {order.total_amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


