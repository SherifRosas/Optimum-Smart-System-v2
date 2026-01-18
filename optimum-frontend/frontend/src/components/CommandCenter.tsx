import { useState, useEffect } from 'react';
import '../App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

interface DigitalCounterProps {
  value: number;
  label: string;
  icon: string;
  color?: 'cyan' | 'magenta' | 'green' | 'orange';
  delay?: number;
}

// Animated Digital Counter Component - Using CSS animations for better performance
function DigitalCounter({ value, label, icon, color = 'cyan', delay = 0 }: DigitalCounterProps) {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    // Reset and start animation
    setDisplayValue(0);
    setIsAnimating(true);

    // Use a single RAF call per counter, batched with setTimeout
    const timeoutId = setTimeout(() => {
      let start: number | null = null;
      const duration = 1500; // Reduced duration for faster animation

      const animate = (timestamp: number): void => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);

        // Simple linear interpolation (fastest)
        const newValue = Math.floor(progress * value);
        setDisplayValue(newValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

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

// Command Center Component
interface CommandCenterProps {
  orders?: any[];
  onNavigate?: (view: string) => void;
  currentView?: string; // Addimport { useLanguage } from '../contexts/LanguageContext';
}
import { useAuth } from '../contexts/AuthContext';

function CommandCenter({ orders = [], onNavigate, currentView }: CommandCenterProps) {
  const [activeNav, setActiveNav] = useState<string>('dashboard');
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const { setLanguage, language, t } = useLanguage();
  const { logout } = useAuth();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate stats from orders
  const totalOrders = orders.length || 1247;
  const activeOrders = orders.filter((o: any) => o.status === 'pending' || o.status === 'in_preparation').length || 89;
  const totalRevenue = orders.reduce((sum: number, o: any) => sum + (parseFloat(o.total_amount) || 0), 0) || 156892;
  const totalSuppliers = 47; // This would come from API

  // Sample data - stagger animation delays to reduce simultaneous RAF calls
  const stats = [
    { value: totalOrders, label: t('totalOrders'), icon: '📦', color: 'cyan' as const, delay: 0 },
    { value: activeOrders, label: t('activeNow'), icon: '⚡', color: 'green' as const, delay: 200 },
    { value: Math.floor(totalRevenue), label: t('revenue'), icon: '💰', color: 'orange' as const, delay: 400 },
    { value: totalSuppliers, label: t('suppliers'), icon: '🏭', color: 'magenta' as const, delay: 600 }
  ];

  // Use real orders or sample data
  const recentOrders: Order[] = orders.length > 0
    ? orders.slice(0, 4).map((o: any) => ({
      id: o.order_number || `ORD-${o.id}`,
      customer: o.customer_name || 'Unknown',
      items: o.items?.length || 1,
      total: parseFloat(o.total_amount) || 0,
      status: (o.status === 'pending' ? 'pending' : o.status === 'delivered' ? 'completed' : 'processing') as any,
      time: o.created_at ? new Date(o.created_at).toLocaleTimeString() : 'Just now'
    }))
    : [
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
    return date.toLocaleTimeString(language === 'ar' ? 'ar-EG' : 'en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    if (onNavigate) {
      // Map Command Center nav to App.jsx views
      const viewMap: Record<string, string> = {
        'dashboard': 'dashboard',
        'orders': 'orders',
        'customers': 'customers',
        'suppliers': 'suppliers',
        'ai': 'ai-dashboard',
        'analytics-dashboard': 'analytics',
        'analytics': 'accounting',
        'accounting': 'accounting',
        'user-management': 'user-management',
        'settings': 'settings'
      };
      onNavigate(viewMap[nav] || nav);
    }
  };

  // If currentView is not 'dashboard', don't render CommandCenter at all
  // The parent App will render the appropriate view
  // Only show CommandCenter when currentView is explicitly 'dashboard'
  if (currentView !== 'dashboard') {
    return null;
  }

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
            <span className="logo-version">v2.4.0</span>
          </div>
        </div>

        <div className="header-center">
          <div className="system-status">
            <span className="status-indicator online"></span>
            <span className="status-text">{t('systemOnline')}</span>
          </div>
        </div>

        <div className="header-right">
          <div className="header-clock">
            <div className="clock-time font-mono">{formatTime(currentTime)}</div>
            <div className="clock-date">{formatDate(currentTime)}</div>
          </div>
          <LanguageSwitcher onLanguageChange={setLanguage} />
          <div className="header-notifications">
            <button className="notification-btn">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
          </div>
          <div className="header-user" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
            <div className="user-avatar">
              <span>A</span>
            </div>
            <div className="user-info">
              <span className="user-name">{t('admin')}</span>
              <span className="user-role">{t('superAdmin')}</span>
            </div>
            {isUserMenuOpen && (
              <div className="user-dropdown">
                <div className="user-dropdown-header">
                  <div className="user-avatar small"><span>A</span></div>
                  <div className="user-details">
                    <span className="name">{t('admin')}</span>
                    <span className="email">admin@optimum.com</span>
                  </div>
                </div>
                <div className="user-dropdown-items">
                  <button className="user-dropdown-item">
                    <span>👤</span> {t('profile')}
                  </button>
                  <button className="user-dropdown-item">
                    <span>⚙️</span> {t('settings')}
                  </button>
                  <div className="user-dropdown-divider"></div>
                  <button
                    className="user-dropdown-item text-red"
                    onClick={async (e) => {
                      e.stopPropagation();
                      try {
                        await logout();
                        window.location.href = '/login';
                      } catch (err) {
                        console.error("Logout failed", err);
                      }
                    }}
                  >
                    <span>🚪</span> {t('logout')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="main-container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <nav className="sidebar-nav">
            <NavItem
              icon="📊"
              label={t('dashboard')}
              active={activeNav === 'dashboard'}
              onClick={() => handleNavClick('dashboard')}
            />
            <NavItem
              icon="📦"
              label={t('orders')}
              active={activeNav === 'orders'}
              onClick={() => handleNavClick('orders')}
              badge={orders?.length?.toString()}
            />
            <NavItem
              icon="👥"
              label={t('customers')}
              active={activeNav === 'customers'}
              onClick={() => handleNavClick('customers')}
            />
            <NavItem
              icon="🏭"
              label={t('suppliers')}
              active={activeNav === 'suppliers'}
              onClick={() => handleNavClick('suppliers')}
            />
            <NavItem
              icon="🤖"
              label={t('aiAssistant')}
              active={activeNav === 'ai'}
              onClick={() => handleNavClick('ai')}
            />
            <NavItem
              icon="📊"
              label={t('analyticsDashboard')}
              active={activeNav === 'analytics-dashboard'}
              onClick={() => handleNavClick('analytics-dashboard')}
            />
            <NavItem
              icon="📈"
              label={t('analytics')}
              active={activeNav === 'analytics'}
              onClick={() => handleNavClick('analytics')}
            />
            <NavItem
              icon="💰"
              label={t('accounting')}
              active={activeNav === 'accounting'}
              onClick={() => handleNavClick('accounting')}
            />
            <NavItem
              icon="👤"
              label={t('userManagement')}
              active={activeNav === 'user-management'}
              onClick={() => handleNavClick('user-management')}
            />
            <NavItem
              icon="⚙️"
              label={t('settings')}
              active={activeNav === 'settings'}
              onClick={() => handleNavClick('settings')}
            />
            <div className="sidebar-divider" style={{ margin: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}></div>
            <NavItem
              icon="🚪"
              label={t('logout')}
              active={false}
              onClick={async () => {
                try {
                  await logout();
                  // Determine if we need to use onNavigate or window.location
                  // Since we are inside App structure, usually window.location.href='/login' or navigate('/login')
                  // Importing hooks at top of file is better
                  window.location.href = '/login';
                } catch (e) {
                  console.error("Logout failed", e);
                }
              }}
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
              <h1 className="page-title text-gradient">{t('commandCenter')}</h1>
              <p className="page-subtitle">{t('realTimeOrderManagement')}</p>
            </div>
            <div className="page-actions">
              <button className="btn btn-secondary">
                <span>📤</span> {t('export')}
              </button>
              <button className="btn btn-primary" onClick={() => onNavigate && onNavigate('new-order')}>
                <span>➕</span> {t('newOrder')}
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
                  {t('recentOrders')}
                </h2>
                <button className="section-action" onClick={() => onNavigate && onNavigate('orders')}>{t('viewAll')} →</button>
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
            OPTIMUM SMART SYSTEM v2.4.0 ADVANCED
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

export default CommandCenter;
