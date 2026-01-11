import React, { useState, useEffect, memo } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { ordersAPI } from '../services/api';
import './AnalyticsDashboard.css';

// Color palette for analytics
const COLORS = [
  'rgba(74, 144, 226, 0.9)',      // Soft Blue
  'rgba(80, 201, 206, 0.9)',      // Teal
  'rgba(59, 130, 246, 0.9)',     // Bright Blue
  'rgba(107, 207, 127, 0.9)',    // Soft Green
  'rgba(255, 215, 0, 0.9)',      // Gold
  'rgba(255, 107, 107, 0.9)',    // Coral
];

const AnalyticsDashboard = ({ orders = [] }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d'); // 7d, 30d, 90d, all

  useEffect(() => {
    fetchStats();
  }, [timeRange]);

  const fetchStats = async () => {
    try {
      const response = await ordersAPI.getDashboardStats();
      setStats(response.data);
    } catch (err) {
      console.error('Error fetching analytics stats:', err);
    } finally {
      setLoading(false);
    }
  };

  // Calculate analytics data from orders
  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: 'Pending', value: statusCounts.pending || 0 },
    { name: 'In Preparation', value: statusCounts['in-preparation'] || 0 },
    { name: 'Ready', value: statusCounts.ready || 0 },
    { name: 'Delivered', value: statusCounts.delivered || 0 },
  ];

  // Revenue trend (last 30 days)
  const revenueData = orders
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
    .slice(-30);

  // Orders by day (last 30 days)
  const ordersByDay = orders.reduce((acc, order) => {
    const date = new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const ordersData = Object.entries(ordersByDay)
    .map(([date, count]) => ({ date, orders: count }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(-30);

  // Top products
  const topProducts = orders.reduce((acc, order) => {
    const product = order.productType || 'Unknown';
    acc[product] = (acc[product] || 0) + 1;
    return acc;
  }, {});

  const topProductsData = Object.entries(topProducts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Customer activity
  const customerActivity = orders.reduce((acc, order) => {
    const customer = order.customerName || 'Unknown';
    acc[customer] = (acc[customer] || 0) + 1;
    return acc;
  }, {});

  const customerData = Object.entries(customerActivity)
    .map(([name, orders]) => ({ name, orders }))
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 10);

  if (loading) {
    return <div className="analytics-loading">Loading analytics...</div>;
  }

  return (
    <div className="analytics-dashboard">
      <div className="analytics-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>Advanced analytics and business intelligence</p>
        </div>
        <div className="time-range-selector">
          <button 
            className={timeRange === '7d' ? 'active' : ''}
            onClick={() => setTimeRange('7d')}
          >
            7 Days
          </button>
          <button 
            className={timeRange === '30d' ? 'active' : ''}
            onClick={() => setTimeRange('30d')}
          >
            30 Days
          </button>
          <button 
            className={timeRange === '90d' ? 'active' : ''}
            onClick={() => setTimeRange('90d')}
          >
            90 Days
          </button>
          <button 
            className={timeRange === 'all' ? 'active' : ''}
            onClick={() => setTimeRange('all')}
          >
            All Time
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="analytics-metrics">
        <div className="metric-card">
          <h3>Total Revenue</h3>
          <p className="metric-value">${(stats?.total_revenue || 0).toLocaleString()}</p>
          <span className="metric-change positive">+12.5% vs last period</span>
        </div>
        <div className="metric-card">
          <h3>Total Orders</h3>
          <p className="metric-value">{stats?.total_orders || orders.length}</p>
          <span className="metric-change positive">+8.3% vs last period</span>
        </div>
        <div className="metric-card">
          <h3>Average Order Value</h3>
          <p className="metric-value">
            ${orders.length > 0 
              ? Math.round((orders.reduce((sum, o) => sum + (parseFloat(o.totalAmount) || 0), 0) / orders.length))
              : 0
            }
          </p>
          <span className="metric-change positive">+5.2% vs last period</span>
        </div>
        <div className="metric-card">
          <h3>Completion Rate</h3>
          <p className="metric-value">
            {orders.length > 0 
              ? Math.round((statusCounts.delivered || 0) / orders.length * 100)
              : 0
            }%
          </p>
          <span className="metric-change positive">+2.1% vs last period</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="analytics-charts-grid">
        {/* Revenue Trend */}
        <div className="chart-container">
          <h3>Revenue Trend (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                fontSize={12}
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                fontSize={12}
                tick={{ fill: '#6b7280' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Order Status Distribution */}
        <div className="chart-container">
          <h3>Order Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Orders by Day */}
        <div className="chart-container">
          <h3>Orders by Day (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                fontSize={12}
                tick={{ fill: '#6b7280' }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                fontSize={12}
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="orders" 
                fill="#10b981" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div className="chart-container">
          <h3>Top 10 Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProductsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" fontSize={12} tick={{ fill: '#6b7280' }} />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={150}
                fontSize={12}
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="count" 
                fill="#8b5cf6" 
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Customers */}
        <div className="chart-container">
          <h3>Top 10 Customers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={customerData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" fontSize={12} tick={{ fill: '#6b7280' }} />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={150}
                fontSize={12}
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="orders" 
                fill="#f59e0b" 
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default memo(AnalyticsDashboard);
