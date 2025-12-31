import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Import App.jsx - Main routing app with Command Center integrated
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

// Error boundary for better error handling
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found. Please check the HTML structure.</div>';
  throw new Error('Root element not found');
}

// Check browser compatibility before rendering
function checkBrowserSupport(): boolean {
  // React 18 requires Safari 14+ (iOS 14+)
  // Check for required features without using eval
  if (typeof Promise === 'undefined') return false;
  if (typeof Symbol === 'undefined') return false;
  if (typeof Map === 'undefined') return false;
  if (typeof Set === 'undefined') return false;
  
  // Check for ES6 class support (safe check)
  try {
    // Use Function constructor instead of eval
    const TestClass = new Function('return class Test {}')();
    if (!TestClass) return false;
  } catch {
    return false;
  }
  
  // Check for arrow functions (safe check)
  try {
    const testArrow = new Function('return () => {}')();
    if (typeof testArrow !== 'function') return false;
  } catch {
    return false;
  }
  
  // Check for Object.assign (required by React)
  if (typeof Object.assign !== 'function') return false;
  
  return true;
}

if (!checkBrowserSupport()) {
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center; color: #fff; font-family: Arial, sans-serif; background: #0a0a0f; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <h1 style="color: #00ffff; margin-bottom: 20px; font-size: 24px;">Browser Not Supported</h1>
      <p style="color: #a0a0c0; margin-bottom: 10px; font-size: 16px;">Your browser does not meet the minimum requirements.</p>
      <p style="color: #a0a0c0; margin-bottom: 20px; font-size: 16px;">This application requires modern browser features.</p>
      <div style="color: #606080; font-size: 14px; line-height: 1.6;">
        <p><strong>Minimum Requirements:</strong></p>
        <p>iOS 14+ (Safari 14+)</p>
        <p>Chrome 90+</p>
        <p>Firefox 88+</p>
        <p style="margin-top: 20px; color: #a0a0c0;">Please update your device or use a modern browser.</p>
      </div>
    </div>
  `;
} else {
  try {
    // React 18's createRoot - requires Safari 14+ (iOS 14+)
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to render React app:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; color: #fff; font-family: Arial, sans-serif; background: #0a0a0f; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <h1 style="color: #ff0055; margin-bottom: 20px; font-size: 24px;">Application Error</h1>
        <p style="color: #a0a0c0; margin-bottom: 10px; font-size: 16px;">Failed to initialize the application.</p>
        <p style="color: #606080; font-size: 14px; margin-top: 20px;">${error instanceof Error ? error.message : String(error)}</p>
        <p style="color: #606080; font-size: 12px; margin-top: 20px;">Please try refreshing the page or contact support.</p>
      </div>
    `;
  }
}
