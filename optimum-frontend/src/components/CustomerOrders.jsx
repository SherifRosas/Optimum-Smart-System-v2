import React, { useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import './CustomerOrders.css';

const CustomerOrders = ({ orders = [] }) => {
  const { user } = useAuth();
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

  // Filter orders for this customer only
  const customerOrders = useMemo(() => {
    if (!user?.id) return [];
    return orders.filter(order => {
      // Match by customer_id if available
      if (order.customer_id) {
        return order.customer_id === user.id;
      }
      // Fallback matching (will be improved with backend)
      return true;
    });
  }, [orders, user]);

  const filteredOrders = useMemo(() => {
    return customerOrders.filter(order => {
      const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
      const matchesSearch = debouncedSearch === '' || 
        order.productType?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        order.id?.toString().includes(debouncedSearch);
      return matchesStatus && matchesSearch;
    });
  }, [customerOrders, filterStatus, debouncedSearch]);

  const statusOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-preparation', label: 'In Preparation' },
    { value: 'ready', label: 'Ready' },
    { value: 'delivered', label: 'Delivered' }
  ];

  const getStatusClass = (status) => {
    return `customer-order-status status-${status}`;
  };

  const getStatusLabel = (status) => {
    return status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="customer-orders">
      <div className="customer-orders-header">
        <h1>My Orders</h1>
        <p>Track and view all your orders</p>
      </div>

      <div className="customer-orders-filters">
        <div className="customer-search-box">
          <input
            type="text"
            placeholder="Search by product or order ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="customer-search-input"
          />
        </div>
        <div className="customer-filter-group">
          <label>Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="customer-filter-select"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="customer-orders-content">
        {filteredOrders.length === 0 ? (
          <div className="customer-empty-state">
            <p>No orders found.</p>
            {customerOrders.length === 0 && (
              <p>You haven't placed any orders yet. Click "New Request" to create your first order!</p>
            )}
          </div>
        ) : (
          <div className="customer-orders-grid">
            {filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                className="customer-order-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="customer-order-item-header">
                  <span className="customer-order-item-id">Order #{order.id}</span>
                  <span className={getStatusClass(order.status)}>
                    {getStatusLabel(order.status)}
                  </span>
                </div>
                <div className="customer-order-item-body">
                  <div className="customer-order-item-product">
                    <strong>{order.productType || 'Unknown Product'}</strong>
                    <span>Quantity: {order.quantity}</span>
                  </div>
                  <div className="customer-order-item-info">
                    <div className="customer-order-item-row">
                      <span className="label">Order Date:</span>
                      <span className="value">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    {order.deliveryDate && (
                      <div className="customer-order-item-row">
                        <span className="label">Delivery Date:</span>
                        <span className="value">
                          {new Date(order.deliveryDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {order.totalAmount && (
                      <div className="customer-order-item-row">
                        <span className="label">Total Amount:</span>
                        <span className="value amount">
                          ${order.totalAmount.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CustomerOrders);



