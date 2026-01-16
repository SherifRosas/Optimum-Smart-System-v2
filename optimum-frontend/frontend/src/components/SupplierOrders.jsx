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

  // Offer Modal State
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [offerTotal, setOfferTotal] = useState('');
  const [offerNotes, setOfferNotes] = useState('');

  // Debounce search
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Reset offer modal fields when order changes
  React.useEffect(() => {
    if (selectedOrder) {
      setOfferTotal(selectedOrder.totalAmount || '');
      setOfferNotes(selectedOrder.notes || '');
    }
  }, [selectedOrder]);

  const handleOfferSubmit = async () => {
    if (!selectedOrder) return;
    try {
      if (!offerTotal || isNaN(offerTotal)) {
        toast.error('Please enter a valid total amount');
        return;
      }

      const total = parseFloat(offerTotal);
      const quantity = selectedOrder.quantity || 1;
      const unitPrice = total / quantity;

      await ordersAPI.updateOrder(selectedOrder.id, {
        unit_price: unitPrice.toFixed(2),
        notes: offerNotes
      });

      // Optionally update status to in-preparation automatically
      if (selectedOrder.status === 'pending') {
        await ordersAPI.updateOrderStatus(selectedOrder.id, 'in-preparation');
      }

      setIsOfferModalOpen(false);
      toast.success('Offer submitted successfully');

      // Update local state by calling onStatusUpdate (or let polling handle it)
      if (onStatusUpdate) {
        onStatusUpdate(selectedOrder.id, 'in-preparation');
      }
    } catch (error) {
      toast.error('Failed to submit offer');
    }
  };

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

  const handleConfirmOffer = async (orderId) => {
    try {
      await ordersAPI.confirmOffer(orderId);
      if (onStatusUpdate) {
        onStatusUpdate(orderId, 'in-preparation');
      }
      toast.success('Offer confirmed! Starting preparation.');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to confirm offer');
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
                  {order.offers?.some(o => o.supplier_id === user.id && o.status === 'waiting_confirmation') && (
                    <button
                      className="status-update-btn confirm-offer-btn"
                      onClick={() => handleConfirmOffer(order.id)}
                    >
                      🤝 Confirm AI Offer
                    </button>
                  )}
                  {(order.status === 'pending' || parseFloat(order.unit_price) === 0) && !order.offers?.some(o => o.supplier_id === user.id && o.status === 'waiting_confirmation') && (
                    <button
                      className="status-update-btn offer-btn"
                      onClick={() => {
                        setSelectedOrder(order);
                        setIsOfferModalOpen(true);
                      }}
                    >
                      Make Offer
                    </button>
                  )}
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

      {isOfferModalOpen && selectedOrder && (
        <div className="supplier-modal-overlay" onClick={() => setIsOfferModalOpen(false)}>
          <motion.div
            className="supplier-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="supplier-modal-header">
              <h2>Make Offer for Order #{selectedOrder.id}</h2>
              <button className="modal-close" onClick={() => setIsOfferModalOpen(false)}>×</button>
            </div>
            <div className="supplier-modal-body">
              <div className="form-group">
                <label>Total Order Amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={offerTotal}
                  onChange={(e) => setOfferTotal(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="form-group">
                <label>Notes / Terms</label>
                <textarea
                  value={offerNotes}
                  onChange={(e) => setOfferNotes(e.target.value)}
                  placeholder="e.g. Delivery included, valid for 24h..."
                />
              </div>
            </div>
            <div className="supplier-modal-actions">
              <button className="modal-btn secondary" onClick={() => setIsOfferModalOpen(false)}>Cancel</button>
              <button className="modal-btn primary" onClick={handleOfferSubmit}>Submit Offer</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default memo(SupplierOrders);



