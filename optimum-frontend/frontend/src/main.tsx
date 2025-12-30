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
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render React app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: red; font-family: monospace;">
      <h2>Application Error</h2>
      <p>Failed to render the application.</p>
      <pre>${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `;
}
