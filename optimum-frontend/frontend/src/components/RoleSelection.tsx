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
import { IconType } from 'react-icons';
import './RoleSelection.css';

// Lazy load chatbot widget
const AIChatWidget = lazy(() => import('./AIChatWidget'));

interface Role {
    id: string;
    name: string;
    description: string;
    icon: IconType;
    color: string;
    route: string;
}

const RoleSelection: React.FC = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [isNavigating, setIsNavigating] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    const roles: Role[] = [
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

    const handleRoleSelect = (role: Role, event: React.MouseEvent | React.KeyboardEvent) => {
        console.log('=== handleRoleSelect START ===');
        console.log('Role:', role.name);
        console.log('Route:', role.route);
        console.log('Current URL:', window.location.href);

        // Prevent navigation if already navigating
        if (isNavigating) {
            console.log('Already navigating, skipping');
            return;
        }

        // Set navigating state to prevent double-clicks
        setIsNavigating(true);
        setSelectedRole(role.id);

        console.log('Navigating using React Router navigate...');

        // Extract path and search params
        const [path, search] = role.route.split('?');
        const searchParams = search ? `?${search}` : '';

        console.log('Path:', path);
        console.log('Search params:', searchParams);

        // Use React Router navigate - this should work now that routes are fixed
        try {
            navigate({
                pathname: path,
                search: searchParams
            });
            console.log('React Router navigate called');
        } catch (error) {
            console.error('Navigation error:', error);
            // Fallback to direct navigation
            const fullUrl = `${window.location.origin}${role.route}`;
            window.location.href = fullUrl;
        }

        console.log('=== handleRoleSelect END ===');
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
                        <span className="role-selection-logo-version">v2.4.0</span>
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
                                        style={{
                                            pointerEvents: isNavigating ? 'none' : 'auto',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            zIndex: 10
                                        }}
                                    >
                                        <div
                                            className="role-card-clickable"
                                            onClick={(e) => {
                                                console.log('Card clicked:', role.name, role.route);
                                                console.log('Event:', e);
                                                // Don't prevent default - let navigation happen
                                                handleRoleSelect(role, e);
                                            }}
                                            onMouseDown={(e) => {
                                                console.log('Mouse down on card:', role.name);
                                            }}
                                            role="button"
                                            tabIndex={0}
                                            aria-label={`Select ${role.name} role`}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    console.log('Key pressed on card:', role.name, e.key);
                                                    e.preventDefault();
                                                    handleRoleSelect(role, e);
                                                }
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                zIndex: 11,
                                                padding: 0,
                                                margin: 0
                                            }}
                                        />
                                        <motion.div
                                            className="role-icon-wrapper"
                                            style={{ background: role.color, pointerEvents: 'none', position: 'relative', zIndex: 1 }}
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
                                            style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}
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
                                        <p style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>{role.description}</p>
                                        <motion.div
                                            className="role-arrow"
                                            style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}
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
