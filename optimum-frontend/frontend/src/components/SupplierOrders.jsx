import React, { useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ordersAPI } from '../services/api';
import { useToast } from '../hooks/useToast';
import './SupplierOrders.css';

const SupplierOrders = ({ orders = [], onStatusUpdate }) => {
  const { user } = useAuth();
  const toast = useToast();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter orders assigned to this supplier
  const supplierOrders = useMemo(() => {
    if (!user?.id) return [];
    return orders.filter(order => {
      if (order.supplier_id) {
        return order.supplier_id === user.id;
      }
      // Fallback matching
      return true;
    });
  }, [orders, user]);

  const filteredOrders = useMemo(() => {
    return supplierOrders.filter(order => {
      const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
      const matchesSearch = debouncedSearch === '' || 
        order.productType?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        order.customerName?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        order.id?.toString().includes(debouncedSearch);
      return matchesStatus && matchesSearch;
    });
  }, [supplierOrders, filterStatus, debouncedSearch]);

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await ordersAPI.updateOrderStatus(orderId, newStatus);
      if (onStatusUpdate) {
        onStatusUpdate(orderId, newStatus);
      }
      toast.success(`Order status updated to ${newStatus}`);
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  const statusOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'in-preparation', label: 'In Preparation' },
    { value: 'ready', label: 'Ready' },
    { value: 'delivered', label: 'Delivered' }
  ];

  const getStatusClass = (status) => {
    return `supplier-order-status status-${status}`;
  };

  const getStatusLabel = (status) => {
    return status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="supplier-orders">
      <div className="supplier-orders-header">
        <h1>My Assigned Orders</h1>
        <p>Manage orders assigned to you. Update status as you progress.</p>
      </div>

      <div className="supplier-orders-filters">
        <div className="supplier-search-box">
          <input
            type="text"
            placeholder="Search by product, customer, or order ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="supplier-search-input"
          />
        </div>
        <div className="supplier-filter-group">
          <label>Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="supplier-filter-select"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="supplier-orders-content">
        {filteredOrders.length === 0 ? (
          <div className="supplier-empty-state">
            <p>No orders assigned to you.</p>
            {supplierOrders.length === 0 && (
              <p>Check "Order Requests" to see incoming requests and accept orders!</p>
            )}
          </div>
        ) : (
          <div className="supplier-orders-grid">
            {filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                className="supplier-order-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="supplier-order-item-header">
                  <span className="supplier-order-item-id">Order #{order.id}</span>
                  <span className={getStatusClass(order.status)}>
                    {getStatusLabel(order.status)}
                  </span>
                </div>
                <div className="supplier-order-item-body">
                  <div className="supplier-order-item-product">
                    <strong>{order.productType || 'Unknown Product'}</strong>
                    <span>Quantity: {order.quantity}</span>
                  </div>
                  <div className="supplier-order-item-customer">
                    <span>Customer: {order.customerName || 'N/A'}</span>
                  </div>
                  <div className="supplier-order-item-info">
                    <div className="supplier-order-item-row">
                      <span className="label">Assigned:</span>
                      <span className="value">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    {order.deliveryDate && (
                      <div className="supplier-order-item-row">
                        <span className="label">Delivery Date:</span>
                        <span className="value">
                          {new Date(order.deliveryDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {order.totalAmount && (
                      <div className="supplier-order-item-row">
                        <span className="label">Amount:</span>
                        <span className="value amount">
                          ${order.totalAmount.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="supplier-order-item-actions">
                  {order.status === 'pending' && (
                    <button
                      className="status-update-btn"
                      onClick={() => handleStatusUpdate(order.id, 'in-preparation')}
                    >
                      Start Preparation
                    </button>
                  )}
                  {order.status === 'in-preparation' && (
                    <button
                      className="status-update-btn"
                      onClick={() => handleStatusUpdate(order.id, 'ready')}
                    >
                      Mark as Ready
                    </button>
                  )}
                  {order.status === 'ready' && (
                    <button
                      className="status-update-btn delivered"
                      onClick={() => handleStatusUpdate(order.id, 'delivered')}
                    >
                      Mark as Delivered
                    </button>
                  )}
                  {order.status === 'delivered' && (
                    <span className="status-complete">✓ Delivered</span>
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

export default memo(SupplierOrders);



