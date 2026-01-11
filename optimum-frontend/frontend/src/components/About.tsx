import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiChat, HiOfficeBuilding, HiUser, HiSparkles } from 'react-icons/hi';
import './About.css';

const About: React.FC = () => {
    const phoneNumber = '01065661882';
    const fullPhoneNumber = `+20${phoneNumber}`;
    const whatsappNumber = `20${phoneNumber}`;

    const handlePhoneCall = () => {
        window.location.href = `tel:${fullPhoneNumber}`;
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hello! I need assistance with Optimum Smart System.');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="about-page">
            <div className="about-container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="about-title">
                        <HiSparkles className="about-title-icon" />
                        About Optimum Smart System
                    </h1>
                    <p className="about-subtitle">
                        Advanced Order Management & AI-Powered Business Intelligence
                    </p>
                    <div className="version-badge">Version 2.4.0</div>
                </motion.div>

                <div className="about-content">
                    <motion.section
                        className="about-section about-milestones"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="section-header">
                            <HiSparkles className="section-icon milestone-icon" />
                            <h2>Recent Milestones (V2.4.0)</h2>
                        </div>
                        <div className="section-content">
                            <div className="milestone-list">
                                <div className="milestone-item">
                                    <strong>🎯 100% TypeScript Migration</strong>
                                    <p>Complete type safety across all frontend components for enterprise reliability.</p>
                                </div>
                                <div className="milestone-item">
                                    <strong>🤖 AI "Easy Flow"</strong>
                                    <p>Natural Language Orders via chat & predictive reordering alerts.</p>
                                </div>
                                <div className="milestone-item">
                                    <strong>📦 Smart Bulk Operations</strong>
                                    <p>AI-driven spreadsheet analysis and batch order creation.</p>
                                </div>
                                <div className="milestone-item">
                                    <strong>🤝 Advanced Supplier Portal</strong>
                                    <p>Mobile-friendly interface with price negotiation and success rate analytics.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        className="about-section about-company"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="section-header">
                            <HiOfficeBuilding className="section-icon" />
                            <h2>Company Information</h2>
                        </div>
                        <div className="section-content">
                            <div className="info-card">
                                <h3>Al-Banna Technology Company</h3>
                                <p className="company-description">
                                    Leading provider of innovative technology solutions and AI-powered business systems.
                                    We specialize in creating intelligent software that streamlines operations and
                                    enhances productivity.
                                </p>
                                <div className="company-details">
                                    <p className="copyright">
                                        © {new Date().getFullYear()} Al-Banna Technology Company. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        className="about-section about-contact"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="section-header">
                            <HiUser className="section-icon" />
                            <h2>Contact Information</h2>
                        </div>
                        <div className="section-content">
                            <div className="contact-card">
                                <div className="contact-info">
                                    <h3 className="contact-name-large">SherifRosas</h3>
                                    <p className="contact-role-large">Director of AI Innovation</p>
                                    <p className="contact-company-large">Al-Banna Technology Company</p>
                                </div>

                                <div className="contact-actions">
                                    <motion.button
                                        className="contact-btn contact-btn-phone"
                                        onClick={handlePhoneCall}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Call Director"
                                        title={`Call: ${fullPhoneNumber}`}
                                    >
                                        <HiPhone className="contact-btn-icon" />
                                        <span>Call</span>
                                    </motion.button>

                                    <motion.button
                                        className="contact-btn contact-btn-whatsapp"
                                        onClick={handleWhatsApp}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="WhatsApp Director"
                                        title={`WhatsApp: ${fullPhoneNumber}`}
                                    >
                                        <HiChat className="contact-btn-icon" />
                                        <span>WhatsApp</span>
                                    </motion.button>
                                </div>

                                <div className="phone-display">
                                    <p className="phone-label">Phone Number:</p>
                                    <a href={`tel:${fullPhoneNumber}`} className="phone-link">
                                        {fullPhoneNumber}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        className="about-section about-features"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="section-header">
                            <HiSparkles className="section-icon" />
                            <h2>System Features</h2>
                        </div>
                        <div className="section-content">
                            <div className="features-grid">
                                <div className="feature-item">
                                    <h4>Order Management</h4>
                                    <p>Streamlined order processing and tracking system</p>
                                </div>
                                <div className="feature-item">
                                    <h4>AI-Powered Insights</h4>
                                    <p>Intelligent analytics and predictive alerts</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Supplier Communication</h4>
                                    <p>Integrated supplier management and messaging</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Financial Accounting</h4>
                                    <p>Comprehensive financial tracking and reporting</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Smart Suggestions</h4>
                                    <p>AI-driven product and order recommendations</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Real-Time Updates</h4>
                                    <p>Live data synchronization and notifications</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default memo(About);
