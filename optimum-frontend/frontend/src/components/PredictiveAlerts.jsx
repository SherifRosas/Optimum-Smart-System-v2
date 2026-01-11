import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExclamation, HiInformationCircle, HiCheckCircle, HiX } from 'react-icons/hi';
import { aiAPI } from '../services/api';
import './PredictiveAlerts.css';

const PredictiveAlerts = ({ onAlertAction }) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dismissedAlerts, setDismissedAlerts] = useState(new Set());

  useEffect(() => {
    loadAlerts();
    // Refresh alerts every 45 seconds (reduced frequency for better performance)
    // Use requestIdleCallback for non-blocking updates
    let intervalId;
    const scheduleNextLoad = () => {
      if (window.requestIdleCallback) {
        const idleId = window.requestIdleCallback(() => {
          loadAlerts();
          intervalId = setTimeout(scheduleNextLoad, 45000);
        }, { timeout: 5000 });
        intervalId = { timeout: null, idle: idleId };
      } else {
        intervalId = setTimeout(() => {
          loadAlerts();
          scheduleNextLoad();
        }, 45000);
      }
    };

    intervalId = setTimeout(scheduleNextLoad, 45000);

    return () => {
      if (typeof intervalId === 'number') {
        clearTimeout(intervalId);
      } else if (intervalId?.idle && window.cancelIdleCallback) {
        window.cancelIdleCallback(intervalId.idle);
        if (intervalId.timeout) clearTimeout(intervalId.timeout);
      }
    };
  }, []);

  const loadAlerts = async () => {
    try {
      setLoading(true);
      const response = await aiAPI.getPredictiveAlerts();
      if (response.data.success) {
        setAlerts(response.data.alerts || []);
      }
    } catch (err) {
      console.error('Error loading alerts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = (alertId) => {
    setDismissedAlerts(prev => new Set([...prev, alertId]));
  };

  const handleAction = (alert) => {
    if (onAlertAction) {
      if (alert.action === 'reorder') {
        onAlertAction('reorder', alert.context);
      } else {
        onAlertAction(alert.action);
      }
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'error':
        return <HiExclamation className="alert-icon error" />;
      case 'warning':
        return <HiExclamation className="alert-icon warning" />;
      case 'reorder':
        return <HiShoppingCart className="alert-icon reorder" />;
      default:
        return <HiInformationCircle className="alert-icon info" />;
    }
  };

  const visibleAlerts = alerts.filter((alert, idx) => !dismissedAlerts.has(idx));

  if (loading && alerts.length === 0) {
    return null;
  }

  if (visibleAlerts.length === 0) {
    return (
      <motion.div
        className="predictive-alerts empty"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <HiCheckCircle className="empty-icon" />
        <p>All systems running smoothly! No alerts at this time.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="predictive-alerts"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="alerts-header">
        <h3>Predictive Alerts</h3>
        <button className="refresh-btn" onClick={loadAlerts} title="Refresh alerts">
          Refresh
        </button>
      </div>

      <div className="alerts-list">
        <AnimatePresence>
          {visibleAlerts.map((alert, idx) => (
            <motion.div
              key={idx}
              className={`alert-item ${alert.type} priority-${alert.priority}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="alert-content">
                {getAlertIcon(alert.type)}
                <div className="alert-text">
                  <h4>{alert.title}</h4>
                  <p>{alert.message}</p>
                </div>
              </div>
              <div className="alert-actions">
                {alert.action && (
                  <button
                    className="action-btn"
                    onClick={() => handleAction(alert)}
                  >
                    View
                  </button>
                )}
                <button
                  className="dismiss-btn"
                  onClick={() => handleDismiss(idx)}
                  title="Dismiss alert"
                >
                  <HiX />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PredictiveAlerts;

