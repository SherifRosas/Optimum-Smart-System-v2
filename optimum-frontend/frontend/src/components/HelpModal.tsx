import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiKey, HiLightBulb, HiQuestionMarkCircle } from 'react-icons/hi';
import './HelpModal.css';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Shortcut {
    key: string;
    action: string;
    description: string;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    const shortcuts: Shortcut[] = [
        { key: '1', action: 'Dashboard', description: 'View statistics and analytics' },
        { key: '2', action: 'New Order', description: 'Create a new customer order' },
        { key: '3', action: 'Orders', description: 'View and manage all orders' },
        { key: '4', action: 'Suppliers', description: 'Communicate with suppliers' },
        { key: '5', action: 'Accounting', description: 'View financial reports' },
        { key: '6', action: 'AI Insights', description: 'AI-powered analytics' }
    ];

    const tips: string[] = [
        'Use AI Fill in the order form for natural language input',
        'Click the chat icon (bottom-right) for instant help',
        'Use filters and search to quickly find orders',
        'Export orders to CSV for reporting',
        'Dark mode is available via the theme toggle',
        'All forms have real-time validation',
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="help-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="help-modal"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="help-modal-header">
                        <div className="help-modal-title">
                            <HiQuestionMarkCircle className="help-icon" />
                            <h2>Help & Keyboard Shortcuts</h2>
                        </div>
                        <button
                            className="help-modal-close"
                            onClick={onClose}
                            aria-label="Close help modal"
                        >
                            <HiX />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="help-modal-content">
                        {/* Keyboard Shortcuts Section */}
                        <section className="help-section">
                            <div className="help-section-header">
                                <HiKey className="section-icon" />
                                <h3>Keyboard Shortcuts</h3>
                            </div>
                            <div className="shortcuts-grid">
                                {shortcuts.map((shortcut) => (
                                    <motion.div
                                        key={shortcut.key}
                                        className="shortcut-item"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: shortcuts.indexOf(shortcut) * 0.05 }}
                                    >
                                        <kbd className="shortcut-key">{shortcut.key}</kbd>
                                        <div className="shortcut-info">
                                            <span className="shortcut-action">{shortcut.action}</span>
                                            <span className="shortcut-description">{shortcut.description}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Quick Tips Section */}
                        <section className="help-section">
                            <div className="help-section-header">
                                <HiLightBulb className="section-icon" />
                                <h3>Quick Tips</h3>
                            </div>
                            <ul className="tips-list">
                                {tips.map((tip, index) => (
                                    <motion.li
                                        key={index}
                                        className="tip-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {tip}
                                    </motion.li>
                                ))}
                            </ul>
                        </section>

                        {/* Features Section */}
                        <section className="help-section">
                            <div className="help-section-header">
                                <HiLightBulb className="section-icon" />
                                <h3>Key Features</h3>
                            </div>
                            <div className="features-grid">
                                <div className="feature-card">
                                    <h4>🤖 AI Chat</h4>
                                    <p>Get instant help with any question about the system</p>
                                </div>
                                <div className="feature-card">
                                    <h4>✨ AI Fill</h4>
                                    <p>Use natural language to fill order forms automatically</p>
                                </div>
                                <div className="feature-card">
                                    <h4>📊 Smart Analytics</h4>
                                    <p>Get AI-powered insights and predictions</p>
                                </div>
                                <div className="feature-card">
                                    <h4>🔔 Predictive Alerts</h4>
                                    <p>Stay ahead with AI-driven notifications</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="help-modal-footer">
                        <p>Press <kbd>Esc</kbd> to close this help modal</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default HelpModal;
