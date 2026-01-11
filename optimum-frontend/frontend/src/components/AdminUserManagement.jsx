import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import { authService } from '../services/authAPI';
import './AdminUserManagement.css';

const AdminUserManagement = () => {
  const { user: currentUser } = useAuth();
  const toast = useToast();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    company_name: '',
    role: 'PRODUCT_REQUESTER',
    location: {
      address: '',
      latitude: null,
      longitude: null,
    },
    password: '',
    additional_data: {},
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const [showUserList, setShowUserList] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Check if current user is admin
  const isAdmin = () => {
    if (!currentUser) return false;
    const email = (currentUser.email || '').toLowerCase();
    const role = currentUser.role || currentUser.profile?.role;
    return email === 'sherifrosas.ai@gmail.com' || role === 'ADMIN' || role === 'SUB_ADMIN';
  };

  useEffect(() => {
    if (!isAdmin()) {
      toast.error('Access denied. Admin privileges required.');
      return;
    }
    loadUsers();
    loadGoogleMaps();
  }, []);

  const loadGoogleMaps = () => {
    if (window.google && window.google.maps) {
      setMapLoaded(true);
      setTimeout(initAutocomplete, 100);
      return;
    }

    // Check if script already exists
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      // Script exists but not loaded yet, wait for it
      const checkInterval = setInterval(() => {
        if (window.google && window.google.maps) {
          setMapLoaded(true);
          initAutocomplete();
          clearInterval(checkInterval);
        }
      }, 100);
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.warn('Google Maps API key not found. Location autocomplete will not work.');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setMapLoaded(true);
      setTimeout(initAutocomplete, 100);
    };
    script.onerror = () => {
      console.error('Failed to load Google Maps API');
    };
    document.head.appendChild(script);
  };

  const initAutocomplete = () => {
    if (!window.google || !window.google.maps) return;

    const addressInput = document.getElementById('location-address');
    if (!addressInput) return;

    const autocomplete = new window.google.maps.places.Autocomplete(addressInput, {
      types: ['address'],
      fields: ['formatted_address', 'geometry', 'name'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setFormData(prev => ({
          ...prev,
          location: {
            address: place.formatted_address || place.name,
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
          },
        }));
      }
    });
  };

  useEffect(() => {
    if (mapLoaded) {
      // Use requestIdleCallback for non-critical initialization
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          initAutocomplete();
        }, { timeout: 1000 });
      } else {
        setTimeout(initAutocomplete, 100);
      }
    }
  }, [mapLoaded]);

  const loadUsers = async () => {
    try {
      const response = await authService.listUsers();
      setUsers(response.data || []);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  // Debounce handler to reduce re-renders
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // Use startTransition for non-urgent updates
    React.startTransition(() => {
      if (name === 'location-address') {
        setFormData(prev => ({
          ...prev,
          location: { ...prev.location, address: value },
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    });
  }, [errors]);

  const handleAdditionalDataChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      additional_data: { ...prev.additional_data, [key]: value },
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
    }
    if (!formData.location.address.trim()) {
      newErrors.location = 'Location is required';
    }
    if (!formData.role) {
      newErrors.role = 'Role is required';
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

    if (!isAdmin()) {
      toast.error('Access denied. Admin privileges required.');
      return;
    }

    setLoading(true);
    try {
      const userData = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone_number.trim(),
        company_name: formData.company_name.trim(),
        role: formData.role,
        password: formData.password || undefined, // Optional, backend will generate if not provided
        metadata: {
          location: formData.location,
          ...formData.additional_data,
        },
      };

      const response = await authService.createUser(userData);
      
      if (response.user) {
        toast.success(`User created successfully! ${response.generated_password ? `Password: ${response.generated_password}` : ''}`);
        // Reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          company_name: '',
          role: 'PRODUCT_REQUESTER',
          location: { address: '', latitude: null, longitude: null },
          password: '',
          additional_data: {},
        });
        // Reload users list
        loadUsers();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.detail || error.response?.data?.error || 'Failed to create user';
      toast.error(errorMessage);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin()) {
    return (
      <div className="admin-access-denied">
        <h2>Access Denied</h2>
        <p>You need admin privileges to access this page.</p>
      </div>
    );
  }

  return (
    <div className="admin-user-management">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="admin-user-container"
      >
        <div className="admin-user-header">
          <h1>User Management</h1>
          <p>Create and manage user accounts for the system</p>
          <button
            className="toggle-users-btn"
            onClick={() => setShowUserList(!showUserList)}
          >
            {showUserList ? 'Hide' : 'Show'} User List
          </button>
        </div>

        {showUserList && (
          <div className="users-list-section">
            <h2>All Users</h2>
            <div className="users-grid">
              {users.map((user) => (
                <div key={user.id} className="user-card">
                  <div className="user-card-header">
                    <span className="user-name">
                      {user.first_name} {user.last_name}
                    </span>
                    <span className={`user-role-badge role-${user.profile?.role?.toLowerCase()}`}>
                      {user.profile?.role || 'N/A'}
                    </span>
                  </div>
                  <div className="user-card-body">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.profile?.phone_number || 'N/A'}</p>
                    <p><strong>Company:</strong> {user.profile?.company_name || 'N/A'}</p>
                    <p><strong>Status:</strong> {user.profile?.status || 'N/A'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-user-form" noValidate>
          <div className="form-section">
            <h2>Basic Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">
                  First Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={errors.first_name ? 'error' : ''}
                  required
                />
                {errors.first_name && (
                  <span className="error-message">{errors.first_name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="last_name">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={errors.last_name ? 'error' : ''}
                  required
                />
                {errors.last_name && (
                  <span className="error-message">{errors.last_name}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  required
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone_number">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className={errors.phone_number ? 'error' : ''}
                  placeholder="+1234567890"
                  required
                />
                {errors.phone_number && (
                  <span className="error-message">{errors.phone_number}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company_name">
                Company Name
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Role & Access</h2>
            <div className="form-group">
              <label htmlFor="role">
                User Role *
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={errors.role ? 'error' : ''}
                required
              >
                <option value="PRODUCT_REQUESTER">Product Requester (Customer)</option>
                <option value="SUPPLIER">Supplier</option>
                <option value="SUB_ADMIN">Sub Admin</option>
                <option value="ADMIN">Admin</option>
              </select>
              {errors.role && (
                <span className="error-message">{errors.role}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password (Optional)
                <span className="hint">Leave empty to auto-generate</span>
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Auto-generated if empty"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Location (Google Maps)</h2>
            <div className="form-group">
              <label htmlFor="location-address">
                Address / Location *
              </label>
              <input
                type="text"
                id="location-address"
                name="location-address"
                value={formData.location.address}
                onChange={handleChange}
                className={errors.location ? 'error' : ''}
                autoComplete="off"
                data-lpignore="true"
                placeholder="Start typing an address..."
                required
              />
              {errors.location && (
                <span className="error-message">{errors.location}</span>
              )}
              {formData.location.latitude && formData.location.longitude && (
                <div className="location-coords">
                  <small>
                    Coordinates: {formData.location.latitude.toFixed(6)}, {formData.location.longitude.toFixed(6)}
                  </small>
                </div>
              )}
            </div>
          </div>

          <div className="form-section">
            <h2>Additional Data (Optional)</h2>
            <div className="additional-data-fields">
              <div className="form-group">
                <label>Custom Field 1</label>
                <input
                  type="text"
                  placeholder="Key"
                  onChange={(e) => {
                    const key = e.target.value;
                    const valueInput = e.target.nextElementSibling;
                    if (key && valueInput) {
                      handleAdditionalDataChange(key, valueInput.value);
                    }
                  }}
                />
                <input
                  type="text"
                  placeholder="Value"
                  onChange={(e) => {
                    const keyInput = e.target.previousElementSibling;
                    if (keyInput && keyInput.value) {
                      handleAdditionalDataChange(keyInput.value, e.target.value);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Creating User...' : 'Create User Account'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminUserManagement;

