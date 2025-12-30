import { useState, useEffect } from 'react';
import { useOrders } from '@/hooks/queries/useOrders';
import { useAuthStore } from '@/stores/authStore';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { format } from 'date-fns';

console.log('Dashboard module loaded!');

export function Dashboard() {
  console.log('Dashboard function called!');
  
  // ALL HOOKS MUST BE CALLED FIRST, BEFORE ANY CONDITIONAL RETURNS
  const { user } = useAuthStore();
  const { data: ordersData, isLoading, error } = useOrders();
  const [showLoading, setShowLoading] = useState(true);
  
  // Combine both useEffects into one
  useEffect(() => {
    console.log('Dashboard useEffect running - applying styles');
    
    // Add class to body to hide background effects
    document.body.classList.add('has-dashboard');
    
    // Apply styles directly to element
    const container = document.getElementById('dashboard-container');
    if (container) {
      console.log('Found dashboard container, applying styles');
      container.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        z-index: 99999 !important;
        background-color: #ffffff !important;
        width: 100vw !important;
        height: 100vh !important;
        padding: 0 !important;
        overflow: auto !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      `;
    } else {
      console.error('Dashboard container NOT FOUND!');
    }
    
    // Show dashboard after 2 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('has-dashboard');
    };
  }, []);
  
  console.log('Dashboard render:', { user, isLoading, error, ordersData, showLoading });

  // NOW we can do conditional returns AFTER all hooks
  if (isLoading && showLoading) {
    return (
      <div 
        id="dashboard-container"
        className="flex h-screen items-center justify-center" 
        style={{ 
          backgroundColor: '#ffffff', 
          zIndex: 99999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4" style={{ color: '#000000' }}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Handle data safely
  const orders = ordersData?.results || [];
  const totalCount = ordersData?.count ?? orders.length;
  
  const stats = {
    total: totalCount,
    pending: orders.filter((o) => o.status === 'pending').length,
    processing: orders.filter((o) => o.status === 'processing').length,
    completed: orders.filter((o) => o.status === 'completed').length,
  };

  return (
    <div 
      id="dashboard-container"
      className="dashboard-container"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: '#ffffff',
        width: '100vw',
        height: '100vh',
        padding: '0',
        overflow: 'auto'
      }}
    >
      {/* Header */}
      <header className="bg-white shadow" style={{ backgroundColor: '#ffffff', zIndex: 1001 }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold" style={{ color: '#000000' }}>
            Welcome back, {user?.first_name || user?.username || 'User'}!
          </h1>
          <p className="mt-1 text-sm" style={{ color: '#666666' }}>
            {format(new Date(), 'EEEE, MMMM d, yyyy')}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow" style={{ backgroundColor: '#ffffff' }}>
            <div className="text-sm font-medium" style={{ color: '#666666' }}>Total Orders</div>
            <div className="mt-2 text-3xl font-bold" style={{ color: '#000000' }}>{stats.total}</div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow" style={{ backgroundColor: '#ffffff' }}>
            <div className="text-sm font-medium" style={{ color: '#666666' }}>Pending</div>
            <div className="mt-2 text-3xl font-bold" style={{ color: '#d97706' }}>{stats.pending}</div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow" style={{ backgroundColor: '#ffffff' }}>
            <div className="text-sm font-medium" style={{ color: '#666666' }}>Processing</div>
            <div className="mt-2 text-3xl font-bold" style={{ color: '#2563eb' }}>{stats.processing}</div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow" style={{ backgroundColor: '#ffffff' }}>
            <div className="text-sm font-medium" style={{ color: '#666666' }}>Completed</div>
            <div className="mt-2 text-3xl font-bold" style={{ color: '#16a34a' }}>{stats.completed}</div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold" style={{ color: '#000000' }}>Recent Orders</h2>
          {error && (
            <div className="mt-4 rounded-lg bg-yellow-50 p-4" style={{ backgroundColor: '#fef3c7' }}>
              <p style={{ color: '#92400e' }}>
                ⚠️ Error loading orders: {error instanceof Error ? error.message : 'Unknown error'}
              </p>
            </div>
          )}
          <div className="mt-4 overflow-hidden rounded-lg bg-white shadow" style={{ backgroundColor: '#ffffff' }}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#666666' }}>
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#666666' }}>
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#666666' }}>
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#666666' }}>
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#666666' }}>
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-sm" style={{ color: '#666666' }}>
                      {isLoading ? 'Loading orders...' : 'No orders found. Create your first order to get started!'}
                    </td>
                  </tr>
                ) : (
                  orders.slice(0, 10).map((order) => (
                    <tr key={order.id}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium" style={{ color: '#000000' }}>
                        #{order.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm" style={{ color: '#666666' }}>
                        {order.customer_name || `Customer ${order.customer}`}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                            order.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : order.status === 'processing'
                              ? 'bg-blue-100 text-blue-800'
                              : order.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm" style={{ color: '#666666' }}>
                        EGP {typeof order.total_amount === 'number' 
                          ? order.total_amount.toFixed(2) 
                          : parseFloat(order.total_amount || '0').toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm" style={{ color: '#666666' }}>
                        {order.created_at 
                          ? format(new Date(order.created_at), 'MMM d, yyyy')
                          : 'N/A'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
