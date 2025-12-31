import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <div className="error-icon">⚠️</div>
            <h2>Something went wrong</h2>
            <p>We're sorry, but something unexpected happened. Please try one of the options below.</p>
            <div className="error-suggestions">
              <h3>What you can do:</h3>
              <ul>
                <li>Try refreshing the page - this often fixes temporary issues</li>
                <li>Go back to the previous page and try again</li>
                <li>Check your internet connection</li>
                <li>Clear your browser cache if the problem persists</li>
                <li>Contact support if the issue continues</li>
              </ul>
            </div>
            
            {import.meta.env.DEV && this.state.error && (
              <details className="error-details" open>
                <summary>Error Details (Development Only)</summary>
                <pre className="error-stack">
                  <strong>Error:</strong> {this.state.error.toString()}
                  {'\n\n'}
                  <strong>Stack:</strong>
                  {this.state.error.stack}
                  {'\n\n'}
                  <strong>Component Stack:</strong>
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="error-actions">
              <button onClick={this.handleReset} className="error-button error-button-primary">
                Reload Page
              </button>
              <button 
                onClick={() => window.history.back()} 
                className="error-button error-button-secondary"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

