import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useToast } from '../hooks/useToast';
import './UserSettings.css';

const UserSettings = () => {
  const toast = useToast();
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    orderUpdates: true,
    marketing: false,
  });

  const [preferences, setPreferences] = useState({
    language: 'en',
    timezone: 'Africa/Cairo',
    dateFormat: 'MM/DD/YYYY',
    currency: 'EGP',
  });

  const handleNotificationChange = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
    toast.success(`${notifications[key] ? 'Disabled' : 'Enabled'} ${key.replace(/([A-Z])/g, ' $1').trim()}`);
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences({
      ...preferences,
      [key]: value,
    });
    toast.success('Preference updated');
  };

  const handleSave = () => {
    // Save settings to localStorage or API
    localStorage.setItem('userSettings', JSON.stringify({ notifications, preferences }));
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="user-settings">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="settings-container"
      >
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account settings and preferences</p>
        </div>

        <div className="settings-sections">
          {/* Appearance */}
          <div className="settings-section">
            <h2>Appearance</h2>
            <div className="settings-item">
              <div className="settings-item-info">
                <label>Theme</label>
                <p>Choose between light and dark mode</p>
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Notifications */}
          <div className="settings-section">
            <h2>Notifications</h2>
            <div className="settings-item">
              <div className="settings-item-info">
                <label>Email Notifications</label>
                <p>Receive notifications via email</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={() => handleNotificationChange('email')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label>SMS Notifications</label>
                <p>Receive notifications via SMS</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={() => handleNotificationChange('sms')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label>Push Notifications</label>
                <p>Receive browser push notifications</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={() => handleNotificationChange('push')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label>Order Updates</label>
                <p>Get notified about order status changes</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.orderUpdates}
                  onChange={() => handleNotificationChange('orderUpdates')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label>Marketing Emails</label>
                <p>Receive promotional and marketing emails</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notifications.marketing}
                  onChange={() => handleNotificationChange('marketing')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          {/* Preferences */}
          <div className="settings-section">
            <h2>Preferences</h2>
            <div className="settings-item">
              <div className="settings-item-info">
                <label>Language</label>
                <p>Select your preferred language</p>
              </div>
              <select
                value={preferences.language}
                onChange={(e) => handlePreferenceChange('language', e.target.value)}
                className="settings-select"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label>Timezone</label>
                <p>Set your timezone</p>
              </div>
              <select
                value={preferences.timezone}
                onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                className="settings-select"
              >
                <option value="Africa/Cairo">Egypt (Cairo)</option>
              </select>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label>Date Format</label>
                <p>Choose your preferred date format</p>
              </div>
              <select
                value={preferences.dateFormat}
                onChange={(e) => handlePreferenceChange('dateFormat', e.target.value)}
                className="settings-select"
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label>Currency</label>
                <p>Select your preferred currency</p>
              </div>
              <select
                value={preferences.currency}
                onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                className="settings-select"
              >
                <option value="EGP">EGP (ج.م)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button onClick={handleSave} className="btn-primary">
            Save Settings
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserSettings;



