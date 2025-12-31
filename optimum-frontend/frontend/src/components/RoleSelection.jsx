import React, { useState, Suspense, lazy, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  HiShieldCheck, 
  HiUserCircle, 
  HiTruck, 
  HiShoppingCart,
  HiArrowRight 
} from 'react-icons/hi';
import './RoleSelection.css';

// Lazy load chatbot widget
const AIChatWidget = lazy(() => import('./AIChatWidget'));

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const clickTimeoutRef = useRef(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const roles = [
    {
      id: 'admin',
      name: 'Admin',
      description: 'Full system access and management',
      icon: HiShieldCheck,
      color: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
      route: '/login?role=admin'
    },
    {
      id: 'subadmin',
      name: 'Sub-Admin',
      description: 'Limited administrative access',
      icon: HiUserCircle,
      color: 'linear-gradient(135deg, #C0C0C0 0%, #FFFFFF 50%, #C0C0C0 100%)',
      route: '/login?role=subadmin'
    },
    {
      id: 'supplier',
      name: 'Supplier',
      description: 'Manage orders and inventory',
      icon: HiTruck,
      color: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 50%, #FFD700 100%)',
      route: '/login?role=supplier'
    },
    {
      id: 'customer',
      name: 'Customer',
      description: 'Place orders and track requests',
      icon: HiShoppingCart,
      color: 'linear-gradient(135deg, #FFFFFF 0%, #C0C0C0 50%, #FFFFFF 100%)',
      route: '/login?role=customer'
    }
  ];

  const handleRoleSelect = (role, event) => {
    // Prevent navigation if already navigating or if role is already selected
    if (isNavigating || selectedRole === role.id) {
      return;
    }

    // CRITICAL: Only proceed if this is a real user click/tap
    if (!event) {
      return; // No event means it wasn't a user interaction
    }

    // Verify it's a real click event (not from animations or programmatic triggers)
    if (event.type !== 'click' && event.type !== 'keydown') {
      return;
    }

    // For keyboard events, only proceed if it's Enter or Space
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    // For click events, verify it's a real mouse/touch event
    if (event.type === 'click') {
      // Check if it's a synthetic event (from React) vs real user event
      if (!event.isTrusted && event.nativeEvent) {
        // Allow if nativeEvent is trusted
        if (!event.nativeEvent.isTrusted) {
          return;
        }
      } else if (!event.isTrusted) {
        return;
      }
    }

    // Prevent event bubbling and default behavior
    event.preventDefault();
    event.stopPropagation();
    
    // Clear any existing timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    // Set navigating state to prevent double-clicks
    setIsNavigating(true);
    setSelectedRole(role.id);
    
    // Navigate after a short delay for visual feedback
    clickTimeoutRef.current = setTimeout(() => {
      navigate(role.route);
    }, 300);
  };

  return (
    <div className="role-selection-page">
      {/* Command Center Style Header */}
      <div className="role-selection-header">
        <div className="role-selection-header-left">
          <button className="role-selection-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="role-selection-logo">
            <span className="role-selection-logo-icon">◈</span>
            <span className="role-selection-logo-text">OPTIMUM</span>
            <span className="role-selection-logo-version">v2.0</span>
          </div>
        </div>
        <div className="role-selection-header-right">
          <div className="role-selection-header-clock">
            <div className="role-selection-clock-time">
              {currentTime.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div className="role-selection-clock-date">
              {currentTime.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="role-selection-container">
        {/* Main Content */}
        <motion.div
          className="role-selection-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Select Your Role</h2>
          <p className="role-selection-subtitle">
            Choose your role to access the appropriate dashboard
          </p>

          <div className="roles-grid-wrapper">
            <div className="roles-grid">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.id}
                    className={`role-card ${selectedRole === role.id ? 'selected' : ''} ${isNavigating ? 'navigating' : ''}`}
                    onClick={(e) => {
                      // Only handle if it's a real click (not from child elements)
                      if (e.target === e.currentTarget || e.target.closest('.role-card')) {
                        handleRoleSelect(role, e);
                      }
                    }}
                    onKeyDown={(e) => {
                      // Only handle keyboard events on the card itself
                      if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRoleSelect(role, e);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${role.name} role`}
                    initial={{ opacity: 0, scale: 0.5, y: 50, rotateX: -90 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: [0, -8, 0],
                      rotateX: 0
                    }}
                    transition={{ 
                      opacity: { duration: 0.5, delay: index * 0.15 },
                      scale: { duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100, damping: 15 },
                      y: { 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15 + 0.5
                      },
                      rotateX: { duration: 0.5, delay: index * 0.15 }
                    }}
                    whileHover={!isNavigating ? { 
                      scale: 1.08, 
                      y: -10,
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    } : {}}
                    whileTap={!isNavigating ? { 
                      scale: 0.92,
                      transition: { duration: 0.1 }
                    } : {}}
                    style={{ pointerEvents: isNavigating ? 'none' : 'auto' }}
                  >
                    <motion.div 
                      className="role-icon-wrapper"
                      style={{ background: role.color, pointerEvents: 'none' }}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{ pointerEvents: 'none' }}
                      >
                        <Icon className="role-icon" style={{ pointerEvents: 'none' }} />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(0, 255, 255, 0.4)",
                          "0 0 20px rgba(0, 255, 255, 0.6)",
                          "0 0 10px rgba(0, 255, 255, 0.4)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {role.name}
                    </motion.h3>
                    <p>{role.description}</p>
                    <motion.div 
                      className="role-arrow"
                      animate={{
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <HiArrowRight />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            {/* AI Chat Widget - Floating beside cards */}
            <div className="chat-widget-side">
              <Suspense fallback={null}>
                <AIChatWidget />
              </Suspense>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            className="role-selection-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>Need help? Contact support at <a href="mailto:support@optimum.com">support@optimum.com</a></p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleSelection;

