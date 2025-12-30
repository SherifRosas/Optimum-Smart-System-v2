import { useState, useEffect } from 'react';
import './App.css';

interface DigitalCounterProps {
  value: number;
  label: string;
  icon: string;
  color?: 'cyan' | 'magenta' | 'green' | 'orange';
  delay?: number;
}

// Animated Digital Counter Component
function DigitalCounter({ value, label, icon, color = 'cyan', delay = 0 }: DigitalCounterProps) {
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    // Show initial value immediately, then animate
    setDisplayValue(0);
    
    let rafId: number | null = null;
    let timeoutId: NodeJS.Timeout;
    let lastUpdateTime = 0;
    const minUpdateInterval = 16; // ~60fps, update at most once per frame
    
    // Use setTimeout to batch the animation start and avoid blocking initial render
    timeoutId = setTimeout(() => {
      let start: number | null = null;
      const duration = 2000;
      
      const step = (timestamp: number): void => {
        if (!start) start = timestamp;
        
        // Throttle updates to reduce computation per frame
        if (timestamp - lastUpdateTime < minUpdateInterval) {
          rafId = requestAnimationFrame(step);
          return;
        }
        lastUpdateTime = timestamp;
        
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Simplified easing for better performance
        const eased = progress * (2 - progress); // Quadratic ease-out
        
        const newValue = Math.floor(eased * value);
        setDisplayValue(newValue);
        
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          // Ensure final value is set
          setDisplayValue(value);
          rafId = null;
        }
      };
      
      rafId = requestAnimationFrame(step);
    }, 100 + delay); // Stagger animations to reduce simultaneous RAF calls
    
    return () => {
      clearTimeout(timeoutId);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [value]);

  const colorClasses: Record<string, string> = {
    cyan: 'stat-cyan',
    magenta: 'stat-magenta',
    green: 'stat-green',
    orange: 'stat-orange'
  };

  return (
    <div className={`stat-card ${colorClasses[color]}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <div className="stat-value">{displayValue.toLocaleString()}</div>
        <div className="stat-label">{label}</div>
      </div>
      <div className="stat-decoration"></div>
    </div>
  );
}

interface NavItemProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}

// Robotic Navigation Item
function NavItem({ icon, label, active, onClick, badge }: NavItemProps) {
  return (
    <button
      className={`nav-item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
      {badge && <span className="nav-badge">{badge}</span>}
      <div className="nav-glow"></div>
    </button>
  );
}

interface Order {
  id: string;
  customer: string;
  items: number;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  time: string;
}

interface OrderCardProps {
  order: Order;
}

// Order Card with Holographic Effect
function OrderCard({ order }: OrderCardProps) {
  const statusColors: Record<string, string> = {
    pending: 'yellow',
    processing: 'cyan',
    completed: 'green',
    cancelled: 'red'
  };

  return (
    <div className="order-card">
      <div className="order-header">
        <span className="order-id font-mono">#{order.id}</span>
        <span className={`order-status status-${statusColors[order.status]}`}>
          {order.status}
        </span>
      </div>
      <div className="order-customer">{order.customer}</div>
      <div className="order-details">
        <div className="order-items">{order.items} items</div>
        <div className="order-total">${order.total.toFixed(2)}</div>
      </div>
      <div className="order-time font-mono">{order.time}</div>
      <div className="order-actions">
        <button className="btn-icon" title="View Details">👁</button>
        <button className="btn-icon" title="Edit">✏️</button>
        <button className="btn-icon" title="Process">🚀</button>
      </div>
      <div className="order-scan-line"></div>
    </div>
  );
}

interface Activity {
  message: string;
  time: string;
}

interface ActivityItemProps {
  activity: Activity;
}

// Live Activity Feed Item
function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="activity-item">
      <div className="activity-indicator"></div>
      <div className="activity-content">
        <div className="activity-message">{activity.message}</div>
        <div className="activity-time font-mono">{activity.time}</div>
      </div>
    </div>
  );
}

// AI Assistant Panel
function AIAssistant() {
  const [isTyping, setIsTyping] = useState<boolean>(true);

  return (
    <div className="ai-panel">
      <div className="ai-header">
        <div className="ai-avatar">
          <div className="ai-eye"></div>
        </div>
        <div className="ai-info">
          <div className="ai-name">OPTIMUS AI</div>
          <div className="ai-status">
            <span className="status-dot"></span>
            {isTyping ? 'Analyzing...' : 'Online'}
          </div>
        </div>
      </div>
      <div className="ai-messages">
        <div className="ai-message">
          <span className="ai-text">
            📊 System operating at optimal efficiency.
            Today's orders are up 23% compared to last week.
            Supplier response time improved by 15%.
          </span>
        </div>
        <div className="ai-suggestion">
          <span className="suggestion-icon">💡</span>
          <span>Consider increasing inventory for Product SKU-2847 based on demand trends</span>
        </div>
      </div>
      <div className="ai-input-area">
        <input
          type="text"
          className="ai-input"
          placeholder="Ask OPTIMUS anything..."
        />
        <button className="ai-send-btn">
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

// Main App
function App() {
  const [activeNav, setActiveNav] = useState<string>('dashboard');
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data - stagger animation delays to reduce simultaneous RAF calls
  const stats = [
    { value: 1247, label: 'Total Orders', icon: '📦', color: 'cyan' as const, delay: 0 },
    { value: 89, label: 'Active Now', icon: '⚡', color: 'green' as const, delay: 200 },
    { value: 156892, label: 'Revenue (EGP)', icon: '💰', color: 'orange' as const, delay: 400 },
    { value: 47, label: 'Suppliers', icon: '🏭', color: 'magenta' as const, delay: 600 }
  ];

  const recentOrders: Order[] = [
    { id: 'ORD-7821', customer: 'Ahmed Hassan', items: 5, total: 2450.00, status: 'processing', time: '2 min ago' },
    { id: 'ORD-7820', customer: 'Sara Mohamed', items: 3, total: 1890.50, status: 'pending', time: '5 min ago' },
    { id: 'ORD-7819', customer: 'Omar Ali', items: 8, total: 5670.00, status: 'completed', time: '12 min ago' },
    { id: 'ORD-7818', customer: 'Nour Ibrahim', items: 2, total: 890.00, status: 'processing', time: '18 min ago' },
  ];

  const activities: Activity[] = [
    { message: 'New order received from Ahmed Hassan', time: '2 min ago' },
    { message: 'Supplier "ElectroTech" confirmed shipment', time: '5 min ago' },
    { message: 'Order #7815 marked as delivered', time: '15 min ago' },
    { message: 'AI assigned optimal supplier for Order #7819', time: '18 min ago' },
    { message: 'Payment received for Order #7812', time: '25 min ago' },
  ];

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button
            className="menu-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">OPTIMUM</span>
            <span className="logo-version">v2.0</span>
          </div>
        </div>

        <div className="header-center">
          <div className="system-status">
            <span className="status-indicator online"></span>
            <span className="status-text">SYSTEM ONLINE</span>
          </div>
        </div>

        <div className="header-right">
          <div className="header-clock">
            <div className="clock-time font-mono">{formatTime(currentTime)}</div>
            <div className="clock-date">{formatDate(currentTime)}</div>
          </div>
          <div className="header-notifications">
            <button className="notification-btn">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
          </div>
          <div className="header-user">
            <div className="user-avatar">
              <span>A</span>
            </div>
            <div className="user-info">
              <span className="user-name">Admin</span>
              <span className="user-role">Super Admin</span>
            </div>
          </div>
        </div>
      </header>

      <div className="main-container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <nav className="sidebar-nav">
            <NavItem
              icon="📊"
              label="Dashboard"
              active={activeNav === 'dashboard'}
              onClick={() => setActiveNav('dashboard')}
            />
            <NavItem
              icon="📦"
              label="Orders"
              active={activeNav === 'orders'}
              onClick={() => setActiveNav('orders')}
              badge="12"
            />
            <NavItem
              icon="👥"
              label="Customers"
              active={activeNav === 'customers'}
              onClick={() => setActiveNav('customers')}
            />
            <NavItem
              icon="🏭"
              label="Suppliers"
              active={activeNav === 'suppliers'}
              onClick={() => setActiveNav('suppliers')}
            />
            <NavItem
              icon="🤖"
              label="AI Assistant"
              active={activeNav === 'ai'}
              onClick={() => setActiveNav('ai')}
            />
            <NavItem
              icon="📈"
              label="Analytics"
              active={activeNav === 'analytics'}
              onClick={() => setActiveNav('analytics')}
            />
            <NavItem
              icon="💰"
              label="Accounting"
              active={activeNav === 'accounting'}
              onClick={() => setActiveNav('accounting')}
            />
            <NavItem
              icon="⚙️"
              label="Settings"
              active={activeNav === 'settings'}
              onClick={() => setActiveNav('settings')}
            />
          </nav>

          <div className="sidebar-footer">
            <div className="system-info">
              <div className="info-row">
                <span className="info-label">CPU</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '45%' }}></div>
                </div>
                <span className="info-value font-mono">45%</span>
              </div>
              <div className="info-row">
                <span className="info-label">MEM</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '62%' }}></div>
                </div>
                <span className="info-value font-mono">62%</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Page Header */}
          <div className="page-header">
            <div className="page-title-area">
              <h1 className="page-title text-gradient">Command Center</h1>
              <p className="page-subtitle">Real-time order management & AI analytics</p>
            </div>
            <div className="page-actions">
              <button className="btn btn-secondary">
                <span>📤</span> Export
              </button>
              <button className="btn btn-primary">
                <span>➕</span> New Order
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <DigitalCounter key={index} {...stat} />
            ))}
          </div>

          {/* Dashboard Grid */}
          <div className="dashboard-grid">
            {/* Orders Section */}
            <section className="orders-section card">
              <div className="section-header">
                <h2 className="section-title">
                  <span className="title-icon">📦</span>
                  Recent Orders
                </h2>
                <button className="section-action">View All →</button>
              </div>
              <div className="orders-list">
                {recentOrders.map((order, index) => (
                  <OrderCard key={index} order={order} />
                ))}
              </div>
            </section>

            {/* Right Panel */}
            <div className="right-panel">
              {/* AI Assistant */}
              <AIAssistant />

              {/* Activity Feed */}
              <section className="activity-section card">
                <div className="section-header">
                  <h2 className="section-title">
                    <span className="title-icon">⚡</span>
                    Live Activity
                  </h2>
                </div>
                <div className="activity-list">
                  {activities.map((activity, index) => (
                    <ActivityItem key={index} activity={activity} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Footer Status Bar */}
      <footer className="status-bar">
        <div className="status-bar-left">
          <span className="status-item">
            <span className="status-dot online"></span>
            Backend Connected
          </span>
          <span className="status-item">
            <span className="status-dot online"></span>
            WebSocket Active
          </span>
        </div>
        <div className="status-bar-center">
          <span className="version-info font-mono">
            OPTIMUM SMART SYSTEM v2.0 ADVANCED
          </span>
        </div>
        <div className="status-bar-right">
          <span className="status-item font-mono">
            API Latency: 24ms
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
