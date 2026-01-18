import React, { useState, memo, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiPhone, HiCube, HiHashtag, HiCalendar, HiSparkles, HiQuestionMarkCircle, HiLockClosed } from 'react-icons/hi';
import { aiAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import Tooltip from './Tooltip';
import './OrderReception.css';

const OrderReception = ({ onSubmit }) => {
<<<<<<< HEAD
  const auth = useAuth();
  const isAdmin = auth.isAdmin && auth.isAdmin();
  const toast = useToast();
=======
  const { user, isAdmin } = useAuth();
>>>>>>> 688dbdd6

  const [formData, setFormData] = useState({
    customerName: isAdmin ? 'Optimum' : '',
    phoneNumber: isAdmin ? '+20 2 1234 5678' : '',
    productType: '',
    quantity: '',
    deliveryDate: ''
  });

  // Pre-fill for admins
  useEffect(() => {
    if (isAdmin()) {
      setFormData(prev => ({
        ...prev,
        customerName: 'Optimum',
        phoneNumber: '+20 2 1234 5678'
      }));
    }
  }, [isAdmin]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [aiText, setAiText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAiFill, setShowAiFill] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Prevent admins from changing restricted fields
    if (isAdmin() && (name === 'customerName' || name === 'phoneNumber')) {
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.productType.trim()) {
      newErrors.productType = 'Product type is required';
    }

    if (!formData.quantity || formData.quantity < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
    }

    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'Delivery date is required';
    } else if (new Date(formData.deliveryDate) < new Date()) {
      newErrors.deliveryDate = 'Delivery date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAIFill = async () => {
    if (!aiText.trim()) {
      toast.error('Please enter order text to analyze');
      return;
    }

    setIsAnalyzing(true);
    try {
      const response = await aiAPI.analyzeOrderText(aiText);
      const analysis = response.data.analysis || response.data;

      // Populate form with AI-extracted data
      if (analysis.customer_name) {
        setFormData(prev => ({ ...prev, customerName: analysis.customer_name }));
      }
      if (analysis.product_type) {
        setFormData(prev => ({ ...prev, productType: analysis.product_type }));
      }
      if (analysis.quantity) {
        setFormData(prev => ({ ...prev, quantity: analysis.quantity.toString() }));
      }
      if (analysis.delivery_date) {
        setFormData(prev => ({ ...prev, deliveryDate: analysis.delivery_date }));
      }

      toast.success('Form filled with AI analysis! Please review and adjust if needed.');
      setShowAiFill(false);
      setAiText('');
    } catch (err) {
      console.error('AI Fill Error:', err);
      toast.error('Failed to analyze order text. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      // Use requestIdleCallback for non-blocking delay
      await new Promise(resolve => {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(() => resolve(), { timeout: 1000 });
        } else {
          setTimeout(resolve, 1000);
        }
      });

      onSubmit({
        customerName: formData.customerName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        productType: formData.productType.trim(),
        quantity: parseInt(formData.quantity),
        deliveryDate: formData.deliveryDate
      });

      // Reset form
      setFormData({
        customerName: isAdmin ? 'Optimum' : '',
        phoneNumber: isAdmin ? '+20 2 1234 5678' : '',
        productType: '',
        quantity: '',
        deliveryDate: ''
      });

    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, onSubmit]);

  return (
    <div className="order-reception">
      <div className="page-header">
        <h2>New Order Reception</h2>
        <p>Enter customer order details below or use AI Fill for natural language input</p>
      </div>

      {/* AI Fill Section */}
      <motion.div
        className="ai-fill-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          type="button"
          className="ai-fill-toggle"
          onClick={() => setShowAiFill(!showAiFill)}
        >
          <HiSparkles />
          {showAiFill ? 'Hide AI Fill' : 'Use AI Fill (Natural Language)'}
        </button>

        {showAiFill && (
          <motion.div
            className="ai-fill-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <label htmlFor="aiText">
              <HiSparkles className="input-icon" />
              Enter order text (e.g., "John Smith needs 2 laptops for next Friday")
            </label>
            <textarea
              id="aiText"
              value={aiText}
              onChange={(e) => setAiText(e.target.value)}
              placeholder="Example: I need 3 Dell laptops for customer Ahmed Mohamed, phone +20 100 123 4567, delivery by next Monday"
              rows={3}
              className="ai-text-input"
            />
            <button
              type="button"
              className="ai-fill-btn"
              onClick={handleAIFill}
              disabled={isAnalyzing || !aiText.trim()}
            >
              {isAnalyzing ? 'Analyzing...' : 'AI Fill Form'}
            </button>
          </motion.div>
        )}
      </motion.div>

      <div className="card">
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-row">
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="customerName">
<<<<<<< HEAD
                <HiUser className="input-icon" />
                Customer Name *
                <Tooltip content="Enter the full name of the customer placing the order">
                  <HiQuestionMarkCircle className="help-icon-small" />
                </Tooltip>
=======
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HiUser className="input-icon" />
                  Customer Name *
                  {isAdmin() && <HiLockClosed className="lock-icon" style={{ color: '#ef4444' }} />}
                </div>
                {!isAdmin() && (
                  <Tooltip content="Enter the full name of the customer placing the order">
                    <HiQuestionMarkCircle className="help-icon-small" />
                  </Tooltip>
                )}
>>>>>>> 688dbdd6
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className={errors.customerName ? 'error' : ''}
                placeholder="Enter customer full name"
                disabled={isAdmin}
                aria-invalid={!!errors.customerName}
                aria-describedby={errors.customerName ? 'customerName-error' : undefined}
                disabled={isAdmin()}
              />
<<<<<<< HEAD
              {isAdmin && <p className="field-hint">Admins can only create internal orders for "Optimum".</p>}
=======
              {isAdmin() && <span className="field-hint" style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>⚠️ Internal Order Only (Restricted)</span>}
>>>>>>> 688dbdd6
              {errors.customerName && (
                <span id="customerName-error" className="error-message" role="alert">
                  {errors.customerName}
                </span>
              )}
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="phoneNumber">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HiPhone className="input-icon" />
                  Phone Number *
                  {isAdmin() && <HiLockClosed className="lock-icon" style={{ color: '#ef4444' }} />}
                </div>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={errors.phoneNumber ? 'error' : ''}
                placeholder="+20 100 123 4567"
                disabled={isAdmin}
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                disabled={isAdmin()}
              />
              {isAdmin() && <span className="field-hint" style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>⚠️ Company Line (Locked)</span>}
              {errors.phoneNumber && (
                <span id="phoneNumber-error" className="error-message" role="alert">
                  {errors.phoneNumber}
                </span>
              )}
            </motion.div>
          </div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="productType">
              <HiCube className="input-icon" />
              Product Type *
            </label>
            <input
              type="text"
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleInputChange}
              className={errors.productType ? 'error' : ''}
              placeholder="e.g., Laptop Dell XPS 15, iPhone 15 Pro"
              aria-invalid={!!errors.productType}
              aria-describedby={errors.productType ? 'productType-error' : undefined}
            />
            {errors.productType && <span className="error-message">{errors.productType}</span>}
          </motion.div>

          <div className="form-row">
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="quantity">
                <HiHashtag className="input-icon" />
                Quantity *
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className={errors.quantity ? 'error' : ''}
                min="1"
                placeholder="1"
              />
              {errors.quantity && <span className="error-message">{errors.quantity}</span>}
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="deliveryDate">
                <HiCalendar className="input-icon" />
                Delivery Date *
              </label>
              <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleInputChange}
                className={errors.deliveryDate ? 'error' : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.deliveryDate && <span className="error-message">{errors.deliveryDate}</span>}
            </motion.div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Creating order" : "Create new order"}
              title={isSubmitting ? "Creating order" : "Create new order"}
            >
              {isSubmitting ? 'Creating Order...' : 'Create Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(OrderReception);
