import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Login from '../Login';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';

// Mock the AuthContext
const mockLogin = vi.fn();
vi.mock('../../contexts/AuthContext', async () => {
    const actual = await vi.importActual('../../contexts/AuthContext');
    return {
        ...actual,
        useAuth: () => ({
            login: mockLogin,
            user: null,
            loading: false,
        }),
        AuthProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
    };
});

// Mock Toast
vi.mock('../../hooks/useToast', () => ({
    useToast: () => ({
        success: vi.fn(),
        error: vi.fn(),
    }),
}));

describe('Login Component', () => {
    it('renders login form correctly', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('updates input values when typing', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const usernameInput = screen.getByPlaceholderText(/username/i) as HTMLInputElement;
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        expect(usernameInput.value).toBe('testuser');
    });
});
