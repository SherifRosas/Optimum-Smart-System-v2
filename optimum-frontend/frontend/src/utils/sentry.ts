import * as Sentry from "@sentry/react";

export const initSentry = () => {
    if (process.env.NODE_ENV === 'production') {
        Sentry.init({
            dsn: import.meta.env.VITE_SENTRY_DSN || "", // User to provide DSN in .env
            integrations: [
                Sentry.browserTracingIntegration(),
                Sentry.replayIntegration({
                    maskAllText: false,
                    blockAllMedia: false,
                }),
            ],
            // Performance Monitoring
            tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
            // Session Replay
            replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
            replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
        });
    } else {
        console.log("Sentry not initialized in development mode.");
    }
};

export const logError = (error: Error, info?: any) => {
    if (process.env.NODE_ENV === 'production') {
        Sentry.captureException(error, { extra: info });
    } else {
        console.error("Error logged:", error, info);
    }
};
