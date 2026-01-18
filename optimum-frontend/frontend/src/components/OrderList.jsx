import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import './OrderList.css';

const OrderList = ({ orders, onStatusUpdate }) => {
  const { t } = useLanguage();
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const statusOptions = useMemo(() => [
    { value: 'all', label: t('allOrders') },
    { value: 'pending', label: t('pending') },
    { value: 'in-preparation', label: t('inPreparation') },
    { value: 'ready', label: t('ready') },
    { value: 'delivered', label: t('delivered') },
    { value: 'cancelled', label: t('cancelled') }
  ], [t]);

  const statusLabels = useMemo(() => ({
    'pending': t('pending'),
    'in-preparation': t('inPreparation'),
    'ready': t('ready'),
    'delivered': t('delivered'),
    'cancelled': t('cancelled')
  }), [t]);

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
        <h2>{t('orderManagement')}</h2>
        <p>{t('manageTrackOrders')}</p>
      </div>

      <div className="filters-section">
        <div className="filter-group search-group">
          <label htmlFor="searchInput">{t('search')}:</label>
          <input
            id="searchInput"
            type="text"
            placeholder={t('searchOrdersPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="statusFilter">{t('filterByStatus')}:</label>
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
          <label htmlFor="sortBy">{t('sortBy')}:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="filter-select"
          >
            <option value="createdAt">{t('dateCreated')}</option>
            <option value="deliveryDate">{t('deliveryDate')}</option>
            <option value="customerName">{t('customerName')}</option>
            <option value="productType">{t('productType')}</option>
            <option value="totalAmount">{t('totalAmount')}</option>
            <option value="quantity">{t('quantity')}</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="dateStart">{t('dateFrom')}:</label>
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
          <label htmlFor="dateEnd">{t('dateTo')}:</label>
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
            <p>{t('noOrdersFound')}</p>
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
                      <span className="label">{t('customerName')}:</span>
                      <span className="value">{order.customerName || t('nA')}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{t('phone')}:</span>
                      <span className="value">{order.phoneNumber || t('nA')}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{t('product')}:</span>
                      <span className="value">{order.productType || t('nA')}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{t('supplier') || "Supplier"}:</span>
                      <span className="value" style={{ color: order.supplier?.name ? '#00ffff' : '#aaa' }}>
                        {order.supplier?.name || "Unassigned"}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{t('quantity')}:</span>
                      <span className="value">{order.quantity || 0}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{t('deliveryDate')}:</span>
                      <span className="value">{formatDate(order.deliveryDate)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">{t('created')}:</span>
                      <span className="value">{formatDate(order.createdAt)}</span>
                    </div>
                  </div>

                  <div className="order-actions">
                    <div className="status-selector">
                      <label htmlFor={`status-${order.id}`}>{t('updateStatus')}:</label>
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
            {t('previous')}
          </button>

          <div className="pagination-info">
            {t('page')} {currentPage} {t('of')} {totalPages}
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
            {t('next')}
          </button>
        </div>
      )}

      <div className="orders-summary">
        <p>
          {t('showing')} {startIndex + 1}-{Math.min(endIndex, sortedOrders.length)} {t('of')} {sortedOrders.length} {t('orders')}
          {filterStatus !== 'all' || debouncedSearch || dateRange.start || dateRange.end ? ` (${t('filtered')})` : ''}
        </p>
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">{t('itemsPerPage')}:</label>
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
