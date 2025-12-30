import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Explicitly import App.tsx (advanced frontend)
import './index.css';

// Error boundary for better error handling
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found. Please check the HTML structure.</div>';
  throw new Error('Root element not found');
}

try {
  // React 18's createRoot - works on modern browsers
  // For older browsers, React 18 still supports the legacy render method
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render React app:', error);
  // Fallback: Try legacy render method for very old browsers
  try {
    // @ts-ignore - Legacy React render API
    if (ReactDOM.render) {
      // @ts-ignore
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        rootElement
      );
    } else {
      throw error;
    }
  } catch (fallbackError) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace;">
        <h2>Application Error</h2>
        <p>Your browser is not supported. Please update to a modern browser.</p>
        <p>Minimum requirements: iOS 13+ or Safari 13+</p>
        <pre>${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
  }
}
