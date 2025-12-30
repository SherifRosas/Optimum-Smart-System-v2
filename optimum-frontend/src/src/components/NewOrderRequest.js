import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ordersAPI, aiAPI } from '../services/api';
import { useToast } from '../hooks/useToast';
import Tooltip from './Tooltip';
import './NewOrderRequest.css';

const NewOrderRequest = ({ onSubmit }) => {
  const { user } = useAuth();
  const toast = useToast();
  const [formData, setFormData] = useState({
    productType: '',
    quantity: '',
    deliveryDate: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleAIFill = async () => {
    const text = prompt('Describe your order in natural language:\n\nExample: "I need 3 Dell laptops for customer John Smith, phone +1234567890, delivery by next Monday"');
    if (!text || !text.trim()) return;

    setAiLoading(true);
    try {
      const response = await aiAPI.analyzeOrderText(text);
      const analysis = response.data.analysis;
      
      if (analysis) {
        setFormData(prev => ({
          ...prev,
          productType: analysis.product_type || prev.productType,
          quantity: analysis.quantity || prev.quantity,
          deliveryDate: analysis.delivery_date || prev.deliveryDate,
          notes: text
        }));
        toast.success('Form filled successfully!');
      }
    } catch (error) {
      toast.error('AI Fill failed. Please fill the form manually.');
    } finally {
      setAiLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.productType.trim()) {
      newErrors.productType = 'Product type is required';
    }
    
    if (!formData.quantity || parseInt(formData.quantity) < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
    }
    
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'Delivery date is required';
    } else {
      const deliveryDate = new Date(formData.deliveryDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (deliveryDate < today) {
        newErrors.deliveryDate = 'Delivery date cannot be in the past';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        customer: {
          name: user?.first_name && user?.last_name 
            ? `${user.first_name} ${user.last_name}` 
            : user?.username || 'Customer',
          phone_number: user?.phone_number || user?.phone || ''
        },
        product_type: formData.productType.trim(),
        quantity: parseInt(formData.quantity),
        delivery_date: formData.deliveryDate,
        notes: formData.notes || ''
      };

      if (onSubmit) {
        await onSubmit(orderData);
      } else {
        await ordersAPI.createOrder(orderData);
        toast.success('Order request created successfully!');
      }

      // Reset form
      setFormData({
        productType: '',
        quantity: '',
        deliveryDate: '',
        notes: ''
      });
    } catch (error) {
      toast.error('Failed to create order request. Please try again.');
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-order-request">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="order-request-container"
      >
        <div className="order-request-header">
          <h1>New Order Request</h1>
          <p>Request a product order. Our team will process your request and assign a supplier.</p>
        </div>

        <div className="ai-fill-section">
          <button
            type="button"
            onClick={handleAIFill}
            disabled={aiLoading}
            className="ai-fill-button"
          >
            {aiLoading ? 'Processing...' : '✨ Use AI Fill (Natural Language)'}
          </button>
          <p className="ai-fill-hint">Describe your order in plain text and let AI fill the form for you!</p>
        </div>

        <form onSubmit={handleSubmit} className="order-request-form">
          <div className="form-group">
            <label htmlFor="productType">
              Product Type *
              <Tooltip content="Enter the type of product you need (e.g., Laptop Dell XPS 15, iPhone 15, etc.)">
                <span className="tooltip-icon">ℹ️</span>
              </Tooltip>
            </label>
            <input
              type="text"
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className={errors.productType ? 'error' : ''}
              placeholder="e.g., Laptop Dell XPS 15"
              required
            />
            {errors.productType && (
              <span className="error-message">{errors.productType}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="quantity">
              Quantity *
              <Tooltip content="Enter the number of items you need">
                <span className="tooltip-icon">ℹ️</span>
              </Tooltip>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className={errors.quantity ? 'error' : ''}
              placeholder="e.g., 5"
              min="1"
              required
            />
            {errors.quantity && (
              <span className="error-message">{errors.quantity}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="deliveryDate">
              Delivery Date *
              <Tooltip content="Select when you need the products delivered">
                <span className="tooltip-icon">ℹ️</span>
              </Tooltip>
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className={errors.deliveryDate ? 'error' : ''}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            {errors.deliveryDate && (
              <span className="error-message">{errors.deliveryDate}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="notes">
              Additional Notes
              <Tooltip content="Any special requirements or notes about your order">
                <span className="tooltip-icon">ℹ️</span>
              </Tooltip>
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requirements, specifications, or notes..."
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Order Request'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default NewOrderRequest;



