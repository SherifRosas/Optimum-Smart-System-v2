import React, { useState } from 'react';
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

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'admin',
      name: 'Admin',
      description: 'Full system access and management',
      icon: HiShieldCheck,
      color: 'linear-gradient(135deg, #4A90E2 0%, #50C9CE 100%)',
      route: '/login?role=admin'
    },
    {
      id: 'subadmin',
      name: 'Sub-Admin',
      description: 'Limited administrative access',
      icon: HiUserCircle,
      color: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
      route: '/login?role=subadmin'
    },
    {
      id: 'supplier',
      name: 'Supplier',
      description: 'Manage orders and inventory',
      icon: HiTruck,
      color: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
      route: '/login?role=supplier'
    },
    {
      id: 'customer',
      name: 'Customer',
      description: 'Place orders and track requests',
      icon: HiShoppingCart,
      color: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
      route: '/login?role=customer'
    }
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role.id);
    setTimeout(() => {
      navigate(role.route);
    }, 300);
  };

  return (
    <div className="role-selection-page">
      <div className="role-selection-container">
        {/* Header */}
        <motion.div
          className="role-selection-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="role-selection-logo">
            <img src="/logo.png" alt="Optimum Smart System Logo" className="role-logo-image" />
            <div>
              <h1>Optimum Smart System</h1>
              <p>AI-Powered Order Management</p>
            </div>
          </div>
        </motion.div>

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

          <div className="roles-grid">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.id}
                  className={`role-card ${selectedRole === role.id ? 'selected' : ''}`}
                  onClick={() => handleRoleSelect(role)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className="role-icon-wrapper"
                    style={{ background: role.color }}
                  >
                    <Icon className="role-icon" />
                  </div>
                  <h3>{role.name}</h3>
                  <p>{role.description}</p>
                  <div className="role-arrow">
                    <HiArrowRight />
                  </div>
                </motion.div>
              );
            })}
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

