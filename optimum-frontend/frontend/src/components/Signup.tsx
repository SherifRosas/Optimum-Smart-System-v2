import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import { HiUserAdd, HiUser, HiLockClosed, HiMail, HiEye, HiEyeOff, HiPhone, HiOfficeBuilding } from 'react-icons/hi';
import './Signup.css';

interface SignupFormData {
    username: string;
    email: string;
    password: string;
    password2: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    company_name: string;
    role: string;
}

interface SignupErrors {
    [key: string]: string | string[] | null;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        username: '',
        email: '',
        password: '',
        password2: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        company_name: '',
        role: '',
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<SignupErrors>({});
    const { register } = useAuth();
    const { showToast } = useToast();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        // Client-side validation
        if (formData.password !== formData.password2) {
            setErrors({ password2: 'Passwords do not match' });
            setLoading(false);
            return;
        }

        try {
            const result = await register(formData);
            if (result.success) {
                showToast('Account created successfully!', 'success');
                navigate('/');
            } else {
                if (result.errors) {
                    setErrors(result.errors);
                    const firstError = Object.values(result.errors)[0];
                    if (Array.isArray(firstError)) {
                        showToast(firstError[0] as string, 'error');
                    } else if (typeof firstError === 'string') {
                        showToast(firstError, 'error');
                    } else {
                        showToast('Registration failed. Please check your information.', 'error');
                    }
                } else {
                    showToast('Registration failed. Please try again.', 'error');
                }
            }
        } catch (error) {
            showToast('An error occurred. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <motion.div
                    className="auth-card signup-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="auth-header">
                        <motion.div
                            className="auth-icon"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                        >
                            <HiUserAdd />
                        </motion.div>
                        <h1 className="auth-title">Create Account</h1>
                        <p className="auth-subtitle">Sign up for Optimum Smart System</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form" noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="username">
                                    <HiUser className="input-icon" />
                                    Username *
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Choose a username"
                                    required
                                    autoComplete="username"
                                />
                                {errors.username && <span className="error-text">{Array.isArray(errors.username) ? errors.username[0] : errors.username}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <HiMail className="input-icon" />
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    autoComplete="email"
                                />
                                {errors.email && <span className="error-text">{Array.isArray(errors.email) ? errors.email[0] : errors.email}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="first_name">
                                    <HiUser className="input-icon" />
                                    First Name
                                </label>
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    autoComplete="given-name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">
                                    <HiUser className="input-icon" />
                                    Last Name
                                </label>
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    autoComplete="family-name"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <HiLockClosed className="input-icon" />
                                Password *
                            </label>
                            <div className="password-input-wrapper">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    required
                                    autoComplete="new-password"
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
                            {errors.password && <span className="error-text">{Array.isArray(errors.password) ? errors.password[0] : errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password2">
                                <HiLockClosed className="input-icon" />
                                Confirm Password *
                            </label>
                            <input
                                id="password2"
                                name="password2"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password2}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                required
                                autoComplete="new-password"
                            />
                            {errors.password2 && <span className="error-text">{errors.password2 as string}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone_number">
                                    <HiPhone className="input-icon" />
                                    Phone Number
                                </label>
                                <input
                                    id="phone_number"
                                    name="phone_number"
                                    type="tel"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    placeholder="+20 10..."
                                    autoComplete="tel"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company_name">
                                    <HiOfficeBuilding className="input-icon" />
                                    Company Name
                                </label>
                                <input
                                    id="company_name"
                                    name="company_name"
                                    type="text"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    placeholder="Your company"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">
                                <HiUser className="input-icon" />
                                Role
                            </label>
                            <input
                                id="role"
                                name="role"
                                type="text"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="e.g., Manager, Director"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="auth-button"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </motion.button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login" className="auth-link">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
