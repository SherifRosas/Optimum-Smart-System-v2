import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ordersAPI } from '../services/api';
import './SupplierDashboard.css';

const SupplierDashboard = ({ orders = [] }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

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

  // Filter orders assigned to this supplier
  const supplierOrders = useMemo(() => {
    if (!user?.id) return orders;
    // Filter orders where supplier matches current user
    return orders.filter(order => {
      if (order.supplier_id) {
        return order.supplier_id === user.id;
      }
      // Fallback matching (will be improved with backend)
      return true;
    });
  }, [orders, user]);

  const statusCounts = useMemo(() => {
    return supplierOrders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});
  }, [supplierOrders]);

  const recentOrders = useMemo(() => {
    return [...supplierOrders]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);
  }, [supplierOrders]);

  const StatCard = memo(({ title, value, icon, color, delay = 0 }) => (
    <motion.div
      className="supplier-stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <div className="supplier-stat-icon" style={{ background: `${color}20`, color }}>
        {icon}
      </div>
      <div className="supplier-stat-content">
        <p className="supplier-stat-title">{title}</p>
        <h3 className="supplier-stat-value">{value}</h3>
      </div>
    </motion.div>
  ));

  if (loading) {
    return <div className="supplier-loading">Loading your dashboard...</div>;
  }

  return (
    <div className="supplier-dashboard">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="supplier-dashboard-header"
      >
        <h1>Supplier Dashboard</h1>
        <p>Welcome back, {user?.first_name || user?.username || 'Supplier'}! Manage your orders and requests.</p>
      </motion.div>

      <div className="supplier-stats-grid">
        <StatCard
          title="Pending Requests"
          value={stats?.pending_orders || 0}
          icon="📋"
          color="rgba(74, 144, 226, 1)"
          delay={0.1}
        />
        <StatCard
          title="Active Orders"
          value={(statusCounts['in-preparation'] || 0) + (statusCounts.ready || 0)}
          icon="📦"
          color="rgba(80, 201, 206, 1)"
          delay={0.2}
        />
        <StatCard
          title="Completed This Month"
          value={statusCounts.delivered || 0}
          icon="✅"
          color="rgba(107, 207, 127, 1)"
          delay={0.3}
        />
        <StatCard
          title="Total Revenue"
          value={`$${(stats?.total_revenue || 0).toLocaleString()}`}
          icon="💰"
          color="rgba(59, 130, 246, 1)"
          delay={0.4}
        />
      </div>

      <div className="supplier-recent-orders">
        <h2>Recent Assigned Orders</h2>
        {recentOrders.length === 0 ? (
          <div className="supplier-empty-state">
            <p>No orders assigned to you yet.</p>
            <p>Check "Order Requests" to see incoming requests and create offers!</p>
          </div>
        ) : (
          <div className="supplier-orders-list">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                className="supplier-order-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="supplier-order-header">
                  <span className="supplier-order-id">Order #{order.id}</span>
                  <span className={`supplier-order-status status-${order.status}`}>
                    {order.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="supplier-order-body">
                  <div className="supplier-order-product">
                    <strong>{order.productType}</strong>
                    <span>Qty: {order.quantity}</span>
                  </div>
                  <div className="supplier-order-customer">
                    <span>Customer: {order.customerName || 'N/A'}</span>
                  </div>
                  <div className="supplier-order-dates">
                    <span>Assigned: {new Date(order.createdAt).toLocaleDateString()}</span>
                    {order.deliveryDate && (
                      <span>Delivery: {new Date(order.deliveryDate).toLocaleDateString()}</span>
                    )}
                  </div>
                  {order.totalAmount && (
                    <div className="supplier-order-amount">
                      Amount: ${order.totalAmount.toLocaleString()}
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

export default memo(SupplierDashboard);



