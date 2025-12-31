import React, { useEffect, useRef, memo, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  HiChartBar, HiPlus, HiClipboardList, HiOfficeBuilding, 
  HiCurrencyDollar, HiSparkles, HiInformationCircle, HiShoppingCart, HiInbox, HiUserAdd,
  HiPresentationChartLine
} from 'react-icons/hi';
import { useAuth } from '../contexts/AuthContext';
import './Navigation.css';

const Navigation = ({ currentView, onNavigate }) => {
  const navRef = useRef(null);
  const { getUserRole, isAdmin, isSupplier, isCustomer } = useAuth();
  
  // All possible menu items with role permissions
  const allMenuItems = useMemo(() => [
    // Admin-only items
    { id: 'dashboard', label: 'Command Center', icon: HiChartBar, shortcut: '1', roles: ['ADMIN', 'SUB_ADMIN', 'SUPPLIER', 'PRODUCT_REQUESTER'] },
    { id: 'analytics', label: 'Analytics Dashboard', icon: HiPresentationChartLine, shortcut: '9', roles: ['ADMIN', 'SUB_ADMIN'] },
    { id: 'user-management', label: 'User Management', icon: HiUserAdd, shortcut: '8', roles: ['ADMIN', 'SUB_ADMIN'] },
    { id: 'new-order', label: 'New Order', icon: HiPlus, shortcut: '2', roles: ['ADMIN', 'SUB_ADMIN'] },
    { id: 'orders', label: 'Orders', icon: HiClipboardList, shortcut: '3', roles: ['ADMIN', 'SUB_ADMIN'] },
    { id: 'suppliers', label: 'Suppliers', icon: HiOfficeBuilding, shortcut: '4', roles: ['ADMIN', 'SUB_ADMIN'] },
    { id: 'accounting', label: 'Accounting', icon: HiCurrencyDollar, shortcut: '5', roles: ['ADMIN', 'SUB_ADMIN'] },
    { id: 'ai-dashboard', label: 'AI Insights', icon: HiSparkles, shortcut: '6', roles: ['ADMIN', 'SUB_ADMIN'] },
    
    // Customer items
    { id: 'my-orders', label: 'My Orders', icon: HiClipboardList, shortcut: '3', roles: ['PRODUCT_REQUESTER'] },
    { id: 'new-request', label: 'New Request', icon: HiPlus, shortcut: '2', roles: ['PRODUCT_REQUESTER'] },
    { id: 'order-history', label: 'Order History', icon: HiShoppingCart, shortcut: '4', roles: ['PRODUCT_REQUESTER'] },
    
    // Supplier items
    { id: 'supplier-dashboard', label: 'Dashboard', icon: HiChartBar, shortcut: '1', roles: ['SUPPLIER'] },
    { id: 'order-requests', label: 'Order Requests', icon: HiInbox, shortcut: '2', roles: ['SUPPLIER'] },
    { id: 'supplier-orders', label: 'My Orders', icon: HiClipboardList, shortcut: '3', roles: ['SUPPLIER'] },
    { id: 'supplier-offers', label: 'Offers', icon: HiShoppingCart, shortcut: '4', roles: ['SUPPLIER'] },
    { id: 'supplier-inventory', label: 'Inventory', icon: HiOfficeBuilding, shortcut: '5', roles: ['SUPPLIER'] },
    
    // Common items
    { id: 'about', label: 'About', icon: HiInformationCircle, shortcut: '7', roles: ['ADMIN', 'SUB_ADMIN', 'SUPPLIER', 'PRODUCT_REQUESTER'] }
  ], []);

  // Filter menu items based on user role
  const menuItems = useMemo(() => {
    const userRole = getUserRole();
    if (!userRole) return [];
    
    return allMenuItems.filter(item => {
      if (isAdmin()) {
        // Admin sees admin items + common items
        return item.roles.includes('ADMIN') || item.roles.includes('SUB_ADMIN') || item.id === 'about';
      } else if (isSupplier()) {
        // Supplier sees supplier items + common items
        return item.roles.includes('SUPPLIER') || item.id === 'about';
      } else if (isCustomer()) {
        // Customer sees customer items + common items
        return item.roles.includes('PRODUCT_REQUESTER') || item.id === 'about';
      }
      return false;
    });
  }, [getUserRole, isAdmin, isSupplier, isCustomer, allMenuItems]);

  const handleNavigate = useCallback((id) => {
    onNavigate(id);
  }, [onNavigate]);

  // Keyboard navigation - optimized with passive listener and debouncing
  useEffect(() => {
    let lastKeyTime = 0;
    const DEBOUNCE_TIME = 100; // 100ms debounce
    
    const handleKeyPress = (e) => {
      // Only handle if not typing in input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      // Debounce rapid key presses
      const now = Date.now();
      if (now - lastKeyTime < DEBOUNCE_TIME) return;
      lastKeyTime = now;
      
      const item = menuItems.find(m => m.shortcut === e.key);
      if (item) {
        e.preventDefault();
        // Use requestAnimationFrame for smoother navigation
        requestAnimationFrame(() => {
          handleNavigate(item.id);
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress, { passive: true });
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [menuItems, handleNavigate]);

  return (
    <nav className="navigation" ref={navRef} role="navigation" aria-label="Main navigation">
      <div className="nav-content">
        <ul className="nav-menu" role="menubar">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <li key={item.id} className="nav-item" role="none">
                <motion.button
                  className={`nav-button ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavigate(item.id)}
                  aria-label={`${item.label} (Press ${item.shortcut})`}
                  aria-current={isActive ? 'page' : undefined}
                  title={`${item.label} (Press ${item.shortcut})`}
                  role="menuitem"
                  tabIndex={0}
                  whileHover={{ 
                    scale: 1.01, // Further reduced scale
                    transition: { duration: 0.1, ease: 'easeOut' }
                  }}
                  whileTap={{ 
                    scale: 0.99,
                    transition: { duration: 0.08 }
                  }}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        transition: { 
                          delay: Math.min(index * 0.01, 0.1), // Further reduced delay
                          duration: 0.1, // Faster animation
                          ease: 'easeOut'
                        }
                      }}
                      layout={false}
                      style={{ willChange: 'opacity' }} // Hint for browser optimization
                >
                  <div className="nav-icon-wrapper">
                    <Icon className="nav-icon" aria-hidden="true" />
                    {Icon !== HiSparkles && isActive && (
                      <div className="nav-icon-sparkle">
                        <HiSparkles />
                      </div>
                    )}
                  </div>
                  {/* Pulse Ring */}
                  {isActive && (
                    <div className="nav-pulse-ring" />
                  )}
                  <span className="nav-label">
                    {item.label}
                  </span>
                  <span 
                    className="nav-shortcut" 
                    aria-label={`Keyboard shortcut: ${item.shortcut}`}
                  >
                    {item.shortcut}
                  </span>
                  {isActive && (
                    <div className="nav-active-indicator" />
                  )}
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navigation);