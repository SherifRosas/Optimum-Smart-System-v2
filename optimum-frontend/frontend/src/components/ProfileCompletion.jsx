import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import './ProfileCompletion.css';

const ProfileCompletion = () => {
    const { user, updateProfile, getUserRole } = useAuth();
    const toast = useToast();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        address: '',
        google_maps_url: '',
        company_name: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                phone: user.phone || user.phone_number || '',
                address: user.address || '',
                google_maps_url: user.google_maps_url || '',
                company_name: user.company_name || user.company || '',
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.phone || !formData.address) {
            toast.error('Please fill in at least your phone and address.');
            return;
        }

        setLoading(true);
        try {
            const result = await updateProfile({
                ...formData,
                profile_completed: true
            });
            if (result.success) {
                toast.success('Profile completed! Welcome to the system.');
                navigate('/dashboard');
            } else {
                toast.error('Failed to update profile.');
            }
        } catch (error) {
            toast.error('An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const roleName = getUserRole() === 'SUPPLIER' ? 'Supplier' : 'Customer';

    return (
        <div className="profile-completion-overlay">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="profile-completion-card"
            >
                <div className="card-glare"></div>
                <div className="completion-header">
                    <div className="ai-icon-hex">
                        <span className="hex-inner">AI</span>
                    </div>
                    <h1>Complete Your Profile</h1>
                    <p>Welcome, {user?.first_name || user?.username}! As a <strong>{roleName}</strong>, please provide your details to start using the system.</p>
                </div>

                <form onSubmit={handleSubmit} className="completion-form">
                    <div className="form-group">
                        <label><i className="fas fa-phone"></i> Contact Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+20 123 456 7890"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label><i className="fas fa-map-marker-alt"></i> Business Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your full business address..."
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label><i className="fas fa-location-arrow"></i> Google Maps URL (Optional)</label>
                        <input
                            type="url"
                            name="google_maps_url"
                            value={formData.google_maps_url}
                            onChange={handleChange}
                            placeholder="https://maps.google.com/..."
                        />
                    </div>

                    <div className="form-group">
                        <label><i className="fas fa-building"></i> Company Name (Optional)</label>
                        <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            placeholder="Your Business Name"
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? (
                            <span className="loader-inner">Processing...</span>
                        ) : (
                            <>Initialize System <i className="fas fa-chevron-right"></i></>
                        )}
                    </button>
                </form>

                <div className="completion-footer">
                    <p><i className="fas fa-shield-alt"></i> Your data is secured with AES-256 encryption.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileCompletion;
