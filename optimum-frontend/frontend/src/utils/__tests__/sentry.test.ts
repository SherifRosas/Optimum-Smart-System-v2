import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initSentry, logError } from '../sentry';
import * as Sentry from '@sentry/react';

// Mock Sentry
vi.mock('@sentry/react', () => ({
    init: vi.fn(),
    captureException: vi.fn(),
    browserTracingIntegration: vi.fn(),
    replayIntegration: vi.fn(),
}));

describe('Sentry Utility', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        vi.clearAllMocks();
        process.env = { ...originalEnv };
    });

    it('does NOT initialize Sentry in development', () => {
        process.env.NODE_ENV = 'development';
        initSentry();
        expect(Sentry.init).not.toHaveBeenCalled();
    });

    it('initializes Sentry in production', () => {
        process.env.NODE_ENV = 'production';
        initSentry();
        expect(Sentry.init).toHaveBeenCalledWith(expect.objectContaining({
            tracesSampleRate: 1.0,
        }));
    });

    it('logs error to console in development', () => {
        process.env.NODE_ENV = 'development';
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
        const error = new Error('Test Error');
        logError(error);
        expect(consoleSpy).toHaveBeenCalledWith('Error logged:', error, undefined);
        expect(Sentry.captureException).not.toHaveBeenCalled();
    });

    it('captures exception in production', () => {
        process.env.NODE_ENV = 'production';
        const error = new Error('Prod Error');
        logError(error);
        expect(Sentry.captureException).toHaveBeenCalledWith(error, { extra: undefined });
    });
});
