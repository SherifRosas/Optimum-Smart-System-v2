import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import HelpModal from './HelpModal';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import './Header.css';

const Header = ({ onNavigate }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const toast = useToast();
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isHelpOpen) {
        setIsHelpOpen(false);
      }
      if (e.key === 'Escape' && isUserMenuOpen) {
        setIsUserMenuOpen(false);
      }
      if (e.key === '?' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsHelpOpen(true);
      }
    };

    const handleClickOutside = (e) => {
      if (isUserMenuOpen && !e.target.closest('.user-info-container')) {
        setIsUserMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress, { passive: true });
    document.addEventListener('click', handleClickOutside, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isHelpOpen, isUserMenuOpen]);

  return (
    <>
      <motion.header 
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
      <div className="header-content">
        <div className="logo">
          <img src="/logo.png" alt="Optimum Smart System Logo" className="logo-image" />
          <div className="logo-text">
            <h1>Optimum Smart System</h1>
            <p>AI-Powered Order Management</p>
          </div>
        </div>
        <div className="header-actions">
            <button
              className="help-button"
              onClick={() => setIsHelpOpen(true)}
              aria-label="Open help and keyboard shortcuts"
              title="Help (Ctrl+?)"
            >
              <HiQuestionMarkCircle />
            </button>
            <ThemeToggle />
          <div className="user-info-container">
            <button
              className="user-info-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsUserMenuOpen(!isUserMenuOpen);
              }}
              onMouseDown={(e) => e.preventDefault()}
              aria-label="User menu"
              aria-expanded={isUserMenuOpen}
              type="button"
            >
              <span className="user-name">
                {user?.first_name && user?.last_name
                  ? `${user.first_name} ${user.last_name}`
                  : user?.username || 'Admin User'}
              </span>
              <div className="user-avatar">
                {user?.first_name && user?.last_name
                  ? `${user.first_name[0]}${user.last_name[0]}`.toUpperCase()
                  : user?.username
                  ? user.username.substring(0, 2).toUpperCase()
                  : 'AU'}
              </div>
            </button>
            {isUserMenuOpen && (
              <div className="user-menu">
                <div className="user-menu-header">
                  <div className="user-avatar-large">
                    {user?.first_name && user?.last_name
                      ? `${user.first_name[0]}${user.last_name[0]}`.toUpperCase()
                      : user?.username
                      ? user.username.substring(0, 2).toUpperCase()
                      : 'AU'}
                  </div>
                  <div>
                    <div className="user-menu-name">
                      {user?.first_name && user?.last_name
                        ? `${user.first_name} ${user.last_name}`
                        : user?.username || 'Admin User'}
                    </div>
                    <div className="user-menu-email">{user?.email || 'admin@optimum.com'}</div>
                  </div>
                </div>
                <div className="user-menu-divider"></div>
                <button
                  className="user-menu-item"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    if (onNavigate) {
                      onNavigate('profile');
                    } else {
                      navigate('/profile');
                    }
                  }}
                >
                  <span>👤 Profile</span>
                </button>
                <button
                  className="user-menu-item"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    if (onNavigate) {
                      onNavigate('settings');
                    } else {
                      navigate('/settings');
                    }
                  }}
                >
                  <span>⚙️ Settings</span>
                </button>
                <button
                  className="user-menu-item"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    if (onNavigate) {
                      onNavigate('ai-dashboard');
                    } else {
                      navigate('/ai-dashboard');
                    }
                  }}
                >
                  <span>📊 Analytics</span>
                </button>
                <div className="user-menu-divider"></div>
                <button
                  className="user-menu-item user-menu-item-danger"
                  onClick={async () => {
                    setIsUserMenuOpen(false);
                    try {
                      await logout();
                      toast.success('Logged out successfully');
                      navigate('/login');
                    } catch (error) {
                      toast.error('Error logging out');
                    }
                  }}
                >
                  <span>🚪 Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </motion.header>
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </>
  );
};

export default memo(Header);
