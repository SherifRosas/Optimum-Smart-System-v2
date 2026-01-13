import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './OrderList.css';

const OrderList = ({ orders, onStatusUpdate }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const statusOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-preparation', label: 'In Preparation' },
    { value: 'ready', label: 'Ready' },
    { value: 'delivered', label: 'Delivered' }
  ];

  const statusLabels = {
    'pending': 'Pending',
    'in-preparation': 'In Preparation',
    'ready': 'Ready',
    'delivered': 'Delivered'
  };

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1); // Reset to first page on search
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
      
      const matchesSearch = debouncedSearch === '' || 
        order.customerName?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        order.productType?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        order.phoneNumber?.includes(debouncedSearch) ||
        order.id?.toString().includes(debouncedSearch);
      
      const matchesDateRange = (!dateRange.start || new Date(order.createdAt) >= new Date(dateRange.start)) &&
                               (!dateRange.end || new Date(order.createdAt) <= new Date(dateRange.end));
      
      return matchesStatus && matchesSearch && matchesDateRange;
    });
  }, [orders, filterStatus, debouncedSearch, dateRange]);

  const sortedOrders = useMemo(() => {
    return [...filteredOrders].sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'createdAt' || sortBy === 'deliveryDate') {
        aValue = new Date(aValue || 0);
        bValue = new Date(bValue || 0);
      }
      
      if (sortBy === 'totalAmount' || sortBy === 'quantity') {
        aValue = Number(aValue) || 0;
        bValue = Number(bValue) || 0;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredOrders, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = sortedOrders.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStatusChange = (orderId, newStatus) => {
    onStatusUpdate(orderId, newStatus);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid Date';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };

  const getStatusClass = (status) => {
    return `status-badge status-${status.replace('-', '-')}`;
  };

  const exportToCSV = (ordersToExport) => {
    if (ordersToExport.length === 0) {
      return;
    }

    const headers = ['ID', 'Customer Name', 'Phone', 'Product Type', 'Quantity', 'Status', 'Delivery Date', 'Created At', 'Total Amount'];
    const rows = ordersToExport.map(order => [
      order.id,
      order.customerName || '',
      order.phoneNumber || '',
      order.productType || '',
      order.quantity || 0,
      order.status || '',
      order.deliveryDate ? new Date(order.deliveryDate).toLocaleDateString() : '',
      order.createdAt ? new Date(order.createdAt).toLocaleDateString() : '',
      order.totalAmount || 0
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `orders_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="order-list">
      <div className="page-header">
        <h2>Order Management</h2>
        <p>Manage and track all customer orders</p>
      </div>

      <div className="filters-section">
        <div className="filter-group search-group">
          <label htmlFor="searchInput">Search:</label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search by customer, product, phone, or order ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="statusFilter">Filter by Status:</label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sortBy">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="filter-select"
          >
            <option value="createdAt">Date Created</option>
            <option value="deliveryDate">Delivery Date</option>
            <option value="customerName">Customer Name</option>
            <option value="productType">Product Type</option>
            <option value="totalAmount">Total Amount</option>
            <option value="quantity">Quantity</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="dateStart">Date From:</label>
          <input
            id="dateStart"
            type="date"
            value={dateRange.start}
            onChange={(e) => {
              setDateRange({ ...dateRange, start: e.target.value });
              setCurrentPage(1);
            }}
            className="filter-select"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="dateEnd">Date To:</label>
          <input
            id="dateEnd"
            type="date"
            value={dateRange.end}
            onChange={(e) => {
              setDateRange({ ...dateRange, end: e.target.value });
              setCurrentPage(1);
            }}
            className="filter-select"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="sortOrder">Order:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="filter-select"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>

        <div className="filter-group">
          <button 
            onClick={() => exportToCSV(sortedOrders)}
            className="export-btn"
            title="Export orders to CSV"
          >
            📥 Export to CSV
          </button>
        </div>
      </div>

      <div className="orders-container">
        {sortedOrders.length === 0 ? (
          <div className="no-orders">
            <p>No orders found matching your criteria.</p>
          </div>
        ) : (
          <div className="orders-grid">
            <AnimatePresence>
              {paginatedOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  className="order-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                <div className="order-header">
                  <div className="order-id">Order #{order.id}</div>
                  <span className={getStatusClass(order.status)}>
                    {statusLabels[order.status]}
                  </span>
                </div>
                
                <div className="order-details">
                  <div className="detail-row">
                    <span className="label">Customer:</span>
                    <span className="value">{order.customerName || 'N/A'}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Phone:</span>
                    <span className="value">{order.phoneNumber || 'N/A'}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Product:</span>
                    <span className="value">{order.productType || 'N/A'}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Quantity:</span>
                    <span className="value">{order.quantity || 0}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Delivery Date:</span>
                    <span className="value">{formatDate(order.deliveryDate)}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Created:</span>
                    <span className="value">{formatDate(order.createdAt)}</span>
                  </div>
                </div>

                <div className="order-actions">
                  <div className="status-selector">
                    <label htmlFor={`status-${order.id}`}>Update Status:</label>
                    <select
                      id={`status-${order.id}`}
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="status-select"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-preparation">In Preparation</option>
                      <option value="ready">Ready</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>
                </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
            aria-label="Previous page"
          >
            Previous
          </button>
          
          <div className="pagination-info">
            Page {currentPage} of {totalPages}
          </div>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                aria-label={`Go to page ${pageNum}`}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}

      <div className="orders-summary">
        <p>
          Showing {startIndex + 1}-{Math.min(endIndex, sortedOrders.length)} of {sortedOrders.length} orders
          {filterStatus !== 'all' || debouncedSearch || dateRange.start || dateRange.end ? ' (filtered)' : ''}
        </p>
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="filter-select"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderList);
