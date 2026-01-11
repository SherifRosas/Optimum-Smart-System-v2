import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiCube, HiOfficeBuilding, HiLightBulb } from 'react-icons/hi';
import { aiAPI } from '../services/api';
import './SmartOrderSuggestions.css';

const SmartOrderSuggestions = ({ onSelectSuggestion }) => {
  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions = async () => {
    try {
      setLoading(true);
      const response = await aiAPI.getSmartSuggestions();
      if (response.data.success) {
        setSuggestions(response.data.suggestions);
      }
    } catch (err) {
      console.error('Error loading suggestions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectProduct = (product) => {
    if (onSelectSuggestion) {
      onSelectSuggestion({
        type: 'product',
        value: product.name
      });
    }
  };

  const handleSelectSupplier = (supplier) => {
    if (onSelectSuggestion) {
      onSelectSuggestion({
        type: 'supplier',
        value: supplier.name
      });
    }
  };

  if (loading) {
    return (
      <div className="smart-suggestions">
        <div className="loading">Loading suggestions...</div>
      </div>
    );
  }

  if (!suggestions || (!suggestions.suggested_products?.length && !suggestions.suggested_suppliers?.length)) {
    return null;
  }

  return (
    <motion.div
      className="smart-suggestions"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="suggestions-header">
        <HiSparkles className="header-icon" />
        <h3>Smart Suggestions</h3>
        <p>Based on your order history</p>
      </div>

      <div className="suggestions-grid">
        {/* Suggested Products */}
        {suggestions.suggested_products?.length > 0 && (
          <motion.div
            className="suggestion-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-header">
              <HiCube className="card-icon" />
              <h4>Suggested Products</h4>
            </div>
            <div className="suggestion-list">
              {suggestions.suggested_products.map((product, idx) => (
                <button
                  key={idx}
                  className="suggestion-item"
                  onClick={() => handleSelectProduct(product)}
                >
                  <span className="item-name">{product.name}</span>
                  <span className="item-count">{product.order_count} orders</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Suggested Suppliers */}
        {suggestions.suggested_suppliers?.length > 0 && (
          <motion.div
            className="suggestion-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-header">
              <HiOfficeBuilding className="card-icon" />
              <h4>Suggested Suppliers</h4>
            </div>
            <div className="suggestion-list">
              {suggestions.suggested_suppliers.map((supplier, idx) => (
                <button
                  key={idx}
                  className="suggestion-item"
                  onClick={() => handleSelectSupplier(supplier)}
                >
                  <span className="item-name">{supplier.name}</span>
                  <div className="item-stats">
                    <span className="item-count">{supplier.order_count} orders</span>
                    {supplier.success_rate > 0 && (
                      <span className="success-rate">{supplier.success_rate}% success</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recommendations */}
        {suggestions.recommendations?.length > 0 && (
          <motion.div
            className="suggestion-card recommendations"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-header">
              <HiLightBulb className="card-icon" />
              <h4>AI Recommendations</h4>
            </div>
            <ul className="recommendations-list">
              {suggestions.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SmartOrderSuggestions;

