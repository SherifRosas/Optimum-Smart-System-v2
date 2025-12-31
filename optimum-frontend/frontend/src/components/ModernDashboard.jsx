import React, { useState, useEffect, memo, useMemo } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { ordersAPI } from '../services/api';
import PredictiveAlerts from './PredictiveAlerts';
import SmartOrderSuggestions from './SmartOrderSuggestions';
import './ModernDashboard.css';

// Get chart height based on screen size - Compact for better fit
const getChartHeight = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 480) return 180; // Mobile: Compact
    if (window.innerWidth <= 768) return 200; // Tablet: Compact
    if (window.innerWidth <= 1024) return 220; // Small desktop: Compact
    return 240; // Desktop: Compact for better fit (reduced from 260)
  }
  return 240;
};

// Soft Blue-Teal Professional Color Palette
const COLORS = [
  'rgba(74, 144, 226, 0.9)',      // Soft Blue
  'rgba(80, 201, 206, 0.9)',      // Teal
  'rgba(59, 130, 246, 0.9)',     // Bright Blue
  'rgba(107, 207, 127, 0.9)',    // Soft Green
  'rgba(74, 144, 226, 0.7)'      // Light Blue
];

const ModernDashboard = ({ orders = [], onNavigate }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartHeight, setChartHeight] = useState(80);
  const [fullViewChart, setFullViewChart] = useState(null); // 'status' | 'revenue' | 'orders' | 'topProducts' | null

  useEffect(() => {
    fetchStats();
    
    // Use ResizeObserver for better performance (avoids forced reflow)
    let resizeObserver;
    let resizeTimeout;
    
    const updateChartHeight = (width) => {
      let newHeight = 400; // Default desktop
      if (width <= 375) {
        newHeight = 220;
      } else if (width <= 480) {
        newHeight = 250;
      } else if (width <= 768) {
        newHeight = 300;
      } else if (width <= 1024) {
        newHeight = 350;
      }
      
      // Only update if changed to avoid unnecessary re-renders
      setChartHeight(prev => prev !== newHeight ? newHeight : prev);
    };
    
    // Initial height calculation (use requestAnimationFrame to avoid reflow)
    requestAnimationFrame(() => {
      updateChartHeight(window.innerWidth);
    });
    
    // Use ResizeObserver if available (better performance)
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            requestAnimationFrame(() => {
              updateChartHeight(entry.contentRect.width || window.innerWidth);
            });
          }, 300); // Increased debounce to reduce frequency
        }
      });
      
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    } else {
      // Fallback to window resize with better debouncing
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          requestAnimationFrame(() => {
            updateChartHeight(window.innerWidth);
          });
        }, 300); // Increased debounce time
      };
      
      window.addEventListener('resize', handleResize, { passive: true });
      
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }
    
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(resizeTimeout);
    };
  }, []);

  const fetchStats = async () => {
    try {
      const response = await ordersAPI.getDashboardStats();
      setStats(response.data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const statusCounts = useMemo(() => {
    return orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});
  }, [orders]);

  const chartData = useMemo(() => [
    { name: 'Pending', value: statusCounts.pending || 0 },
    { name: 'In Preparation', value: statusCounts['in-preparation'] || 0 },
    { name: 'Ready', value: statusCounts.ready || 0 },
    { name: 'Delivered', value: statusCounts.delivered || 0 },
  ], [statusCounts]);

  // Revenue data (last 7 days)
  const revenueData = useMemo(() => {
    return orders
      .filter(o => o.totalAmount)
      .reduce((acc, order) => {
        const date = new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const existing = acc.find(item => item.date === date);
        if (existing) {
          existing.revenue += order.totalAmount || 0;
        } else {
          acc.push({ date, revenue: order.totalAmount || 0 });
        }
        return acc;
      }, [])
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(-7);
  }, [orders]);

  // Orders by day (last 7 days)
  const ordersByDay = useMemo(() => {
    return orders.reduce((acc, order) => {
      const date = new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});
  }, [orders]);

  const ordersData = useMemo(() => {
    return Object.entries(ordersByDay)
      .map(([date, count]) => ({ date, orders: count }))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(-7);
  }, [ordersByDay]);

  // Top products
  const topProducts = useMemo(() => {
    return orders.reduce((acc, order) => {
      const product = order.productType || 'Unknown';
      acc[product] = (acc[product] || 0) + 1;
      return acc;
    }, {});
  }, [orders]);

  const topProductsData = useMemo(() => {
    return Object.entries(topProducts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [topProducts]);

  const StatCard = memo(({ title, value, icon, color, delay = 0 }) => (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: `${color}20`, color }}>
        {icon}
      </div>
      <div className="stat-content">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>
    </div>
  ));

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="modern-dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Real-time insights and analytics</p>
      </div>

      {/* Predictive Alerts */}
      <PredictiveAlerts
        onAlertAction={(action) => {
          if (action === 'view_orders') {
            console.log('Navigate to orders');
            if (typeof onNavigate === 'function') {
              onNavigate('orders');
            }
          }
        }}
      />

      {/* Smart Suggestions */}
      <SmartOrderSuggestions />

      <div className="stats-grid">
        <StatCard
          title="Total Orders"
          value={stats?.total_orders || orders.length}
          icon="📊"
          color="rgba(74, 144, 226, 1)"
          delay={0.1}
        />
        <StatCard
          title="Total Revenue"
          value={`$${(stats?.total_revenue || 0).toLocaleString()}`}
          icon="💰"
          color="rgba(80, 201, 206, 1)"
          delay={0.2}
        />
        <StatCard
          title="Pending Orders"
          value={stats?.pending_orders || statusCounts.pending || 0}
          icon="⏳"
          color="rgba(59, 130, 246, 1)"
          delay={0.3}
        />
        <StatCard
          title="Upcoming Deliveries"
          value={stats?.upcoming_deliveries || 0}
          icon="🚚"
          color="rgba(107, 207, 127, 1)"
          delay={0.4}
        />
      </div>

      <div className="charts-grid">
        <div
          className="chart-card"
          onClick={() => setFullViewChart('status')}
          role="button"
          tabIndex={0}
          aria-label="View order status distribution in full screen"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setFullViewChart('status');
            }
          }}
        >
          <h3>Order Status Distribution</h3>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={Math.min(chartHeight * 0.35, 120)}
                fill="#8884d8"
                dataKey="value"
                fontSize={14}
                fontWeight={600}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  fontSize: '14px', 
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px 12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', fontWeight: 500 }}
                iconSize={16}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          className="chart-card"
          onClick={() => setFullViewChart('revenue')}
          role="button"
          tabIndex={0}
          aria-label="View revenue trend in full screen"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setFullViewChart('revenue');
            }
          }}
        >
          <h3>Revenue Trend (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                fontSize={13}
                fontWeight={500}
                tick={{ fill: '#6b7280' }}
                height={50}
              />
              <YAxis 
                fontSize={13}
                fontWeight={500}
                tick={{ fill: '#6b7280' }}
                width={80}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                contentStyle={{ 
                  fontSize: '14px', 
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px 12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', fontWeight: 500 }}
                iconSize={16}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ r: 5, fill: '#3b82f6' }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="charts-grid">
        <div
          className="chart-card"
          onClick={() => setFullViewChart('orders')}
          role="button"
          tabIndex={0}
          aria-label="View orders by day in full screen"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setFullViewChart('orders');
            }
          }}
        >
          <h3>Orders by Day (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                fontSize={13}
                fontWeight={500}
                tick={{ fill: '#6b7280' }}
                height={50}
              />
              <YAxis 
                fontSize={13}
                fontWeight={500}
                tick={{ fill: '#6b7280' }}
                width={50}
              />
              <Tooltip 
                contentStyle={{ 
                  fontSize: '14px', 
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px 12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', fontWeight: 500 }}
                iconSize={16}
              />
              <Bar 
                dataKey="orders" 
                fill="#10b981" 
                radius={[8, 8, 0, 0]}
                label={{ position: 'top', fontSize: 12, fontWeight: 600 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          className="chart-card"
          onClick={() => setFullViewChart('topProducts')}
          role="button"
          tabIndex={0}
          aria-label="View top products in full screen"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setFullViewChart('topProducts');
            }
          }}
        >
          <h3>Top Products</h3>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={topProductsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                type="number" 
                fontSize={13}
                fontWeight={500}
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={140}
                fontSize={13}
                fontWeight={500}
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{ 
                  fontSize: '14px', 
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px 12px'
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: '14px', fontWeight: 500 }}
                iconSize={16}
              />
              <Bar 
                dataKey="count" 
                fill="#8b5cf6" 
                radius={[0, 8, 8, 0]}
                label={{ position: 'right', fontSize: 12, fontWeight: 600 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Full View Overlay for Charts */}
      {fullViewChart && (
        <div
          className="chart-fullscreen-backdrop"
          onClick={() => setFullViewChart(null)}
          role="presentation"
        >
          <div
            className="chart-fullscreen-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="chart-fullscreen-header">
              <h2>
                {fullViewChart === 'status' && 'Order Status Distribution'}
                {fullViewChart === 'revenue' && 'Revenue Trend (Last 7 Days)'}
                {fullViewChart === 'orders' && 'Orders by Day (Last 7 Days)'}
                {fullViewChart === 'topProducts' && 'Top Products'}
              </h2>
              <button
                type="button"
                className="chart-fullscreen-close"
                onClick={() => setFullViewChart(null)}
                aria-label="Close full screen chart view"
              >
                ×
              </button>
            </div>
            <div className="chart-fullscreen-body">
              {fullViewChart === 'status' && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={180}
                      fill="#8884d8"
                      dataKey="value"
                      fontSize={16}
                      fontWeight={600}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-full-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        fontSize: '16px', 
                        fontWeight: 600,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        padding: '10px 14px'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '16px', fontWeight: 500 }}
                      iconSize={20}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
              {fullViewChart === 'revenue' && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="date" 
                      fontSize={15}
                      fontWeight={500}
                      tick={{ fill: '#e5e7eb' }}
                      height={60}
                    />
                    <YAxis 
                      fontSize={15}
                      fontWeight={500}
                      tick={{ fill: '#e5e7eb' }}
                      width={100}
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                      contentStyle={{ 
                        fontSize: '16px', 
                        fontWeight: 600,
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid rgba(148, 163, 184, 0.3)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        color: '#e5e7eb'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '16px', fontWeight: 500, color: '#e5e7eb' }}
                      iconSize={20}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3b82f6" 
                      strokeWidth={4} 
                      dot={{ r: 6, fill: '#3b82f6' }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
              {fullViewChart === 'orders' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ordersData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="date" 
                      fontSize={15}
                      fontWeight={500}
                      tick={{ fill: '#e5e7eb' }}
                      height={60}
                    />
                    <YAxis 
                      fontSize={15}
                      fontWeight={500}
                      tick={{ fill: '#e5e7eb' }}
                      width={60}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        fontSize: '16px', 
                        fontWeight: 600,
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid rgba(148, 163, 184, 0.3)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        color: '#e5e7eb'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '16px', fontWeight: 500, color: '#e5e7eb' }}
                      iconSize={20}
                    />
                    <Bar 
                      dataKey="orders" 
                      fill="#10b981" 
                      radius={[10, 10, 0, 0]}
                      label={{ position: 'top', fontSize: 14, fontWeight: 600, fill: '#e5e7eb' }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
              {fullViewChart === 'topProducts' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topProductsData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      type="number" 
                      fontSize={15}
                      fontWeight={500}
                      tick={{ fill: '#e5e7eb' }}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={180}
                      fontSize={15}
                      fontWeight={500}
                      tick={{ fill: '#e5e7eb' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        fontSize: '16px', 
                        fontWeight: 600,
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid rgba(148, 163, 184, 0.3)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        color: '#e5e7eb'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '16px', fontWeight: 500, color: '#e5e7eb' }}
                      iconSize={20}
                    />
                    <Bar 
                      dataKey="count" 
                      fill="#8b5cf6" 
                      radius={[0, 12, 12, 0]}
                      label={{ position: 'right', fontSize: 14, fontWeight: 600, fill: '#e5e7eb' }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ModernDashboard);

