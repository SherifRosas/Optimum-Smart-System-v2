import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiLightningBolt, HiExclamation, HiCheck, HiX, HiDotsVertical } from 'react-icons/hi';
import { aiAPI, ordersAPI } from '../services/api';
import { useToast } from '../hooks/useToast';
import './SmartActionsInbox.css';

const SmartActionsInbox = ({ onNavigate }) => {
    const [actions, setActions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [processingId, setProcessingId] = useState(null);
    const { addToast } = useToast();

    useEffect(() => {
        loadActions();
        const interval = setInterval(loadActions, 60000); // Pulse every minute
        return () => clearInterval(interval);
    }, []);

    const loadActions = async () => {
        try {
            setLoading(true);
            const response = await aiAPI.getSmartActions();
            if (response.data.success) {
                setActions(response.data.actions || []);
            }
        } catch (err) {
            console.error('Error loading smart actions:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleActionClick = async (actionItem, suggestedAction) => {
        setProcessingId(suggestedAction.id || `${actionItem.id}-${suggestedAction.action}`);
        try {
            let success = false;
            let message = '';

            switch (suggestedAction.action) {
                case 'approve':
                    await ordersAPI.updateOrderStatus(actionItem.order_id, 'in-preparation');
                    success = true;
                    message = `Order #${actionItem.order_id} approved and moved to preparation.`;
                    break;
                case 'contact':
                    addToast({
                        title: 'Contact Customer',
                        description: `Opening communication channel for Order #${actionItem.order_id}...`,
                        variant: 'info'
                    });
                    // Simulation: navigate to chat or open modal
                    if (onNavigate) onNavigate('orders', { orderId: actionItem.order_id, tab: 'messages' });
                    break;
                case 'auto_assign':
                    await ordersAPI.updateOrder(actionItem.order_id, { notes: 'AI: Auto-assigning best supplier...' });
                    // The backend viewset 'create' already handles auto-assignment logic, 
                    // but for existing orders we'd need a specific endpoint.
                    // For now, let's just simulate or call update.
                    success = true;
                    message = `Auto-assignment initiated for Order #${actionItem.order_id}.`;
                    break;
                case 'verify':
                    if (onNavigate) onNavigate('orders', { orderId: actionItem.order_id });
                    break;
                default:
                    addToast({
                        title: 'Action Triggered',
                        description: `Executing ${suggestedAction.label} for Order #${actionItem.order_id}`,
                        variant: 'info'
                    });
            }

            if (success) {
                addToast({
                    title: 'Success',
                    description: message,
                    variant: 'success'
                });
                // Remove the action from the list
                setActions(prev => prev.filter(a => a.id !== actionItem.id));
            }
        } catch (err) {
            addToast({
                title: 'Error',
                description: 'Failed to execute action. Please try again.',
                variant: 'error'
            });
        } finally {
            setProcessingId(null);
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'critical': return '#ef4444';
            case 'high': return '#f59e0b';
            case 'medium': return '#3b82f6';
            default: return '#10b981';
        }
    };

    return (
        <div className="smart-actions-inbox">
            <div className="inbox-header">
                <h3><HiLightningBolt /> Smart Actions Inbox</h3>
                <span className="badge">{actions.length} Pending</span>
            </div>

            <div className="actions-list">
                {loading && actions.length === 0 ? (
                    <div className="loading-state">
                        <div className="shimmer" />
                        <div className="shimmer" />
                        <div className="shimmer" />
                    </div>
                ) : actions.length === 0 ? (
                    <div className="empty-state">
                        <HiCheck className="check-icon" />
                        <p>Your inbox is clear! No actions required.</p>
                    </div>
                ) : (
                    <AnimatePresence>
                        {actions.map((item) => (
                            <motion.div
                                key={item.id}
                                className={`action-card priority-${item.priority}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                layout
                            >
                                <div className="priority-indicator" style={{ backgroundColor: getPriorityColor(item.priority) }} />

                                <div className="card-content">
                                    <div className="card-header">
                                        <span className="action-type">{item.type.toUpperCase()}</span>
                                        <HiDotsVertical className="menu-icon" />
                                    </div>

                                    <h4>{item.title}</h4>
                                    <p>{item.message}</p>

                                    <div className="suggested-actions">
                                        {item.suggested_actions.map((btn, idx) => (
                                            <button
                                                key={idx}
                                                className={`mini-action-btn ${btn.type}`}
                                                disabled={processingId !== null}
                                                onClick={() => handleActionClick(item, btn)}
                                            >
                                                {processingId === (btn.id || `${item.id}-${btn.action}`) ? '...' : btn.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
};

export default SmartActionsInbox;
