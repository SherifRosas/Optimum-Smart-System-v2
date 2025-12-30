import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import { HiLockClosed, HiUser, HiEye, HiEyeOff, HiArrowLeft } from 'react-icons/hi';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const selectedRole = searchParams.get('role');
  const { login } = useAuth();
  const toast = useToast();
  const { ToastContainer } = toast;
  const navigate = useNavigate();

  const roleInfo = {
    admin: { name: 'Admin', color: '#4A90E2', icon: '🛡️' },
    subadmin: { name: 'Sub-Admin', color: '#667EEA', icon: '👤' },
    supplier: { name: 'Supplier', color: '#F5576C', icon: '🚚' },
    customer: { name: 'Customer', color: '#4FACFE', icon: '🛒' }
  };

  const currentRole = selectedRole ? roleInfo[selectedRole] : null;

  const handleSubmit = async (e) => {
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
        // Redirect to main app route instead of "/" (which shows role selection)
        setTimeout(() => {
          navigate('/app');
        }, 500);
      } else {
        const errorMsg = result.error || 'Login failed. Please check your credentials.';
        setError(errorMsg);
        toast.error(errorMsg);
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMsg = error.response?.data?.error || error.message || 'An error occurred. Please try again.';
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
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
              className="back-to-roles"
              onClick={() => navigate('/')}
              style={{ 
                background: currentRole.color,
              }}
            >
              <HiArrowLeft /> Back to Role Selection
            </button>
          )}

          {/* Role indicator */}
          {currentRole && (
            <div 
              className="role-indicator"
              style={{ borderColor: currentRole.color }}
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
              <div className="auth-error" style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>
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
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

