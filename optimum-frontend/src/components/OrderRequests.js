import React, { useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { ordersAPI } from '../services/api';
import { useToast } from '../hooks/useToast';
import './OrderRequests.css';

const OrderRequests = ({ orders = [] }) => {
  const toast = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Debounce search
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter orders that are pending (requests)
  const orderRequests = useMemo(() => {
    return orders.filter(order => order.status === 'pending');
  }, [orders]);

  const filteredRequests = useMemo(() => {
    return orderRequests.filter(request => {
      const matchesSearch = debouncedSearch === '' || 
        request.productType?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        request.customerName?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        request.id?.toString().includes(debouncedSearch);
      return matchesSearch;
    });
  }, [orderRequests, debouncedSearch]);

  const handleCreateOffer = async (requestId) => {
    // This would create an offer for the request
    // For now, just show a message
    toast.success('Offer creation feature coming soon!');
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      await ordersAPI.updateOrderStatus(requestId, 'in-preparation');
      toast.success('Order request accepted!');
      setSelectedRequest(null);
    } catch (error) {
      toast.error('Failed to accept request');
    }
  };

  return (
    <div className="order-requests">
      <div className="order-requests-header">
        <h1>Order Requests</h1>
        <p>View incoming order requests and create offers</p>
      </div>

      <div className="order-requests-filters">
        <div className="requests-search-box">
          <input
            type="text"
            placeholder="Search by product, customer, or order ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="requests-search-input"
          />
        </div>
      </div>

      <div className="order-requests-content">
        {filteredRequests.length === 0 ? (
          <div className="requests-empty-state">
            <p>No pending order requests at the moment.</p>
            <p>New requests will appear here when customers place orders.</p>
          </div>
        ) : (
          <div className="requests-grid">
            {filteredRequests.map((request, index) => (
              <motion.div
                key={request.id}
                className="request-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedRequest(request)}
              >
                <div className="request-header">
                  <span className="request-id">Request #{request.id}</span>
                  <span className="request-badge">New</span>
                </div>
                <div className="request-body">
                  <div className="request-product">
                    <strong>{request.productType || 'Unknown Product'}</strong>
                    <span>Quantity: {request.quantity}</span>
                  </div>
                  <div className="request-customer">
                    <span>Customer: {request.customerName || 'N/A'}</span>
                  </div>
                  <div className="request-dates">
                    <span>Requested: {new Date(request.createdAt).toLocaleDateString()}</span>
                    {request.deliveryDate && (
                      <span>Delivery: {new Date(request.deliveryDate).toLocaleDateString()}</span>
                    )}
                  </div>
                  {request.totalAmount && (
                    <div className="request-amount">
                      Estimated: ${request.totalAmount.toLocaleString()}
                    </div>
                  )}
                </div>
                <div className="request-actions">
                  <button
                    className="request-action-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCreateOffer(request.id);
                    }}
                  >
                    Create Offer
                  </button>
                  <button
                    className="request-action-btn secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAcceptRequest(request.id);
                    }}
                  >
                    Accept
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {selectedRequest && (
        <div className="request-modal-overlay" onClick={() => setSelectedRequest(null)}>
          <motion.div
            className="request-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="request-modal-header">
              <h2>Request Details</h2>
              <button className="modal-close" onClick={() => setSelectedRequest(null)}>×</button>
            </div>
            <div className="request-modal-body">
              <div className="request-detail-row">
                <span className="detail-label">Request ID:</span>
                <span className="detail-value">#{selectedRequest.id}</span>
              </div>
              <div className="request-detail-row">
                <span className="detail-label">Product:</span>
                <span className="detail-value">{selectedRequest.productType}</span>
              </div>
              <div className="request-detail-row">
                <span className="detail-label">Quantity:</span>
                <span className="detail-value">{selectedRequest.quantity}</span>
              </div>
              <div className="request-detail-row">
                <span className="detail-label">Customer:</span>
                <span className="detail-value">{selectedRequest.customerName || 'N/A'}</span>
              </div>
              <div className="request-detail-row">
                <span className="detail-label">Delivery Date:</span>
                <span className="detail-value">
                  {selectedRequest.deliveryDate 
                    ? new Date(selectedRequest.deliveryDate).toLocaleDateString()
                    : 'Not specified'}
                </span>
              </div>
              {selectedRequest.totalAmount && (
                <div className="request-detail-row">
                  <span className="detail-label">Estimated Amount:</span>
                  <span className="detail-value amount">
                    ${selectedRequest.totalAmount.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
            <div className="request-modal-actions">
              <button
                className="modal-action-btn primary"
                onClick={() => {
                  handleCreateOffer(selectedRequest.id);
                  setSelectedRequest(null);
                }}
              >
                Create Offer
              </button>
              <button
                className="modal-action-btn secondary"
                onClick={() => {
                  handleAcceptRequest(selectedRequest.id);
                }}
              >
                Accept Request
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default memo(OrderRequests);



