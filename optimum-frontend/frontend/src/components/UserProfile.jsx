import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import './UserProfile.css';

const UserProfile = () => {
  const { user, updateProfile } = useAuth();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || user.firstName || '',
        last_name: user.last_name || user.lastName || '',
        email: user.email || '',
        phone: user.phone || user.phone_number || '',
        company: user.company || '',
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
    setLoading(true);

    try {
      const result = await updateProfile(formData);
      if (result.success) {
        toast.success('Profile updated successfully!');
      } else {
        toast.error(result.errors?.general || 'Failed to update profile');
      }
    } catch (error) {
      toast.error('An error occurred while updating your profile');
    } finally {
      setLoading(false);
    }
  };

  const getInitials = () => {
    if (user) {
      const firstName = user.first_name || user.firstName || '';
      const lastName = user.last_name || user.lastName || '';
      if (firstName && lastName) {
        return `${firstName[0]}${lastName[0]}`.toUpperCase();
      }
      if (user.username) {
        return user.username.substring(0, 2).toUpperCase();
      }
    }
    return 'AU';
  };

  return (
    <div className="user-profile">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="profile-container"
      >
        <div className="profile-header">
          <div className="profile-avatar-large">
            {getInitials()}
          </div>
          <div className="profile-info">
            <h1>User Profile</h1>
            <p>Manage your account information and preferences</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                if (user) {
                  setFormData({
                    first_name: user.first_name || user.firstName || '',
                    last_name: user.last_name || user.lastName || '',
                    email: user.email || '',
                    phone: user.phone || user.phone_number || '',
                    company: user.company || '',
                  });
                }
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UserProfile;



