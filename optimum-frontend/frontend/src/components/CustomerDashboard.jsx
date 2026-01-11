import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ordersAPI } from '../services/api';
import './CustomerDashboard.css';

const CustomerDashboard = ({ orders = [] }) => {
  const { user } = useAuth();
  const auth = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  // CRITICAL: Never render CustomerDashboard for admin users
  if (auth.isAdmin()) {
    return null;
  }

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await ordersAPI.getDashboardStats();
      setStats(response.data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter orders for this customer only
  const customerOrders = useMemo(() => {
    if (!user?.id) return orders;
    // Filter orders where customer matches current user
    // Note: This assumes orders have customer_id or customer information
    return orders.filter(order => {
      // If order has customer_id, match it
      if (order.customer_id) {
        return order.customer_id === user.id;
      }
      // Otherwise, match by customer name/email (fallback)
      if (user.email && order.customerEmail) {
        return order.customerEmail === user.email;
      }
      // For now, show all if we can't match (will be improved with backend filtering)
      return true;
    });
  }, [orders, user]);

  const statusCounts = useMemo(() => {
    return customerOrders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});
  }, [customerOrders]);

  const recentOrders = useMemo(() => {
    return [...customerOrders]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);
  }, [customerOrders]);

  const StatCard = memo(({ title, value, icon, color, delay = 0 }) => (
    <motion.div
      className="customer-stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <div className="customer-stat-icon" style={{ background: `${color}20`, color }}>
        {icon}
      </div>
      <div className="customer-stat-content">
        <p className="customer-stat-title">{title}</p>
        <h3 className="customer-stat-value">{value}</h3>
      </div>
    </motion.div>
  ));

  if (loading) {
    return <div className="customer-loading">Loading your dashboard...</div>;
  }

  return (
    <div className="customer-dashboard">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="customer-dashboard-header"
      >
        <h1>My Dashboard</h1>
        <p>Welcome back, {user?.first_name || user?.username || 'Customer'}! Here's your order overview.</p>
      </motion.div>

      <div className="customer-stats-grid">
        <StatCard
          title="My Active Orders"
          value={statusCounts.pending + (statusCounts['in-preparation'] || 0) + (statusCounts.ready || 0) || 0}
          icon="📦"
          color="rgba(74, 144, 226, 1)"
          delay={0.1}
        />
        <StatCard
          title="Pending Requests"
          value={statusCounts.pending || 0}
          icon="⏳"
          color="rgba(80, 201, 206, 1)"
          delay={0.2}
        />
        <StatCard
          title="Completed Orders"
          value={statusCounts.delivered || 0}
          icon="✅"
          color="rgba(107, 207, 127, 1)"
          delay={0.3}
        />
        <StatCard
          title="Total Orders"
          value={customerOrders.length}
          icon="📊"
          color="rgba(59, 130, 246, 1)"
          delay={0.4}
        />
      </div>

      <div className="customer-recent-orders">
        <h2>Recent Orders</h2>
        {recentOrders.length === 0 ? (
          <div className="customer-empty-state">
            <p>You haven't placed any orders yet.</p>
            <p>Click "New Request" to create your first order!</p>
          </div>
        ) : (
          <div className="customer-orders-list">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                className="customer-order-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="customer-order-header">
                  <span className="customer-order-id">Order #{order.id}</span>
                  <span className={`customer-order-status status-${order.status}`}>
                    {order.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="customer-order-body">
                  <div className="customer-order-product">
                    <strong>{order.productType}</strong>
                    <span>Qty: {order.quantity}</span>
                  </div>
                  <div className="customer-order-dates">
                    <span>Ordered: {new Date(order.createdAt).toLocaleDateString()}</span>
                    {order.deliveryDate && (
                      <span>Delivery: {new Date(order.deliveryDate).toLocaleDateString()}</span>
                    )}
                  </div>
                  {order.totalAmount && (
                    <div className="customer-order-amount">
                      Total: ${order.totalAmount.toLocaleString()}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CustomerDashboard);



