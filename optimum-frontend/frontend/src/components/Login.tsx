import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import { HiLockClosed, HiUser, HiEye, HiEyeOff, HiArrowLeft } from 'react-icons/hi';
import './Login.css';

interface RoleDetail {
    name: string;
    color: string;
    icon: string;
}

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [searchParams] = useSearchParams();
    const selectedRole = searchParams.get('role');
    const { login } = useAuth();
    const toast = useToast();
    const navigate = useNavigate();

    const roleInfo: Record<string, RoleDetail> = {
        admin: { name: 'Admin', color: '#4A90E2', icon: '🛡️' },
        subadmin: { name: 'Sub-Admin', color: '#667EEA', icon: '👤' },
        supplier: { name: 'Supplier', color: '#F5576C', icon: '🚚' },
        customer: { name: 'Customer', color: '#4FACFE', icon: '🛒' }
    };

    const currentRole = selectedRole ? roleInfo[selectedRole] : null;
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/2f508c51-eb71-4984-ac85-c8d0748c9513',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Login.tsx:35',message:'login_render',data:{selectedRole,hasCurrentRole:!!currentRole},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H2'})}).catch(()=>{});
    // #endregion

    const toErrorMessage = (value: unknown): string => {
        if (typeof value === 'string') return value;
        if (value && typeof value === 'object') {
            const maybeMessage = (value as { message?: unknown }).message;
            if (typeof maybeMessage === 'string') return maybeMessage;
            try {
                return JSON.stringify(value);
            } catch {
                return 'An error occurred. Please try again.';
            }
        }
        return 'An error occurred. Please try again.';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validate inputs
        if (!username.trim()) {
            setError('Username is required');
            setLoading(false);
            return;
        }

        if (!password.trim()) {
            setError('Password is required');
            setLoading(false);
            return;
        }

        try {
            console.log('Attempting login with:', { username, passwordLength: password.length });
            const result = await login(username, password);
            console.log('Login result:', result);

            if (result.success) {
                toast.success('Login successful!');
                // Small delay to show toast before navigation
                setTimeout(() => {
                    // Navigate to a route that will render the MainApp
                    window.location.href = '/dashboard';
                }, 500);
            } else {
                const errorMsg = toErrorMessage(result.error) || 'Login failed. Please check your credentials.';
                setError(errorMsg);
                toast.error(errorMsg);
            }
        } catch (error: any) {
            console.error('Login error:', error);
            const errorMsg = toErrorMessage(error.response?.data?.error || error.message);
            setError(errorMsg);
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const handleClearTokens = (): void => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        setError('');
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/2f508c51-eb71-4984-ac85-c8d0748c9513',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Login.tsx:89',message:'tokens_cleared',data:{cleared:true},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'H6'})}).catch(()=>{});
        // #endregion
        toast.info('Tokens cleared. Please sign in again.');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <motion.div
                    className="auth-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Back to role selection */}
                    {currentRole && (
                        <button
                            className="back-to-roles dynamic"
                            onClick={() => navigate('/')}
                            style={{ '--role-color': currentRole.color } as React.CSSProperties}
                        >
                            <HiArrowLeft /> Back to Role Selection
                        </button>
                    )}

                    {/* Role indicator */}
                    {currentRole && (
                        <div
                            className="role-indicator dynamic"
                            style={{ '--role-color': currentRole.color } as React.CSSProperties}
                        >
                            <span className="role-icon-large">{currentRole.icon}</span>
                            <div>
                                <h3>Login as {currentRole.name}</h3>
                                <p>Enter your credentials to continue</p>
                            </div>
                        </div>
                    )}

                    <div className="auth-header">
                        <motion.div
                            className="auth-icon"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                        >
                            <HiLockClosed />
                        </motion.div>
                        <h1 className="auth-title">Welcome Back</h1>
                        <p className="auth-subtitle">Sign in to your Optimum Smart System account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="username">
                                <HiUser className="input-icon" />
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                required
                                autoComplete="username"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <HiLockClosed className="input-icon" />
                                Password
                            </label>
                            <div className="password-input-wrapper">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <HiEyeOff /> : <HiEye />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="auth-error-text">
                                {error}
                            </div>
                        )}

                        <motion.button
                            type="submit"
                            className="auth-button"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </motion.button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/signup" className="auth-link">
                                Sign up
                            </Link>
                        </p>
                        <button
                            type="button"
                            className="auth-link"
                            onClick={handleClearTokens}
                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                        >
                            Clear tokens
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
