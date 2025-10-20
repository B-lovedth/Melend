'use client';
import styles from './dashboard.module.scss';
import { 
  dashboardStats, 
  userGrowthData, 
  loanDistributionData, 
  transactionData,
  recentActivities 
} from '@/constants/mockData';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaUsers, FaMoneyBillWave, FaChartLine, FaPiggyBank, FaFileInvoiceDollar, FaExchangeAlt } from 'react-icons/fa';

export default function DashboardPage() {
  const statCards = [
    { 
      title: 'Total Users', 
      value: dashboardStats.totalUsers.toLocaleString(), 
      icon: <FaUsers />, 
      color: '#39CDCC',
      subtitle: `${dashboardStats.activeUsers.toLocaleString()} active`
    },
    { 
      title: 'Active Loans', 
      value: dashboardStats.activeLoans.toLocaleString(), 
      icon: <FaMoneyBillWave />, 
      color: '#F55F44',
      subtitle: `${dashboardStats.totalLoans} total loans`
    },
    { 
      title: 'Total Savings', 
      value: `₦${(dashboardStats.totalSavings / 1000000).toFixed(1)}M`, 
      icon: <FaPiggyBank />, 
      color: '#5718FF',
      subtitle: 'Across all accounts'
    },
    { 
      title: 'Monthly Revenue', 
      value: `₦${(dashboardStats.monthlyRevenue / 1000000).toFixed(1)}M`, 
      icon: <FaChartLine />, 
      color: '#FF33F7',
      subtitle: 'This month'
    },
    { 
      title: 'Pending Requests', 
      value: dashboardStats.pendingRequests.toLocaleString(), 
      icon: <FaFileInvoiceDollar />, 
      color: '#FFA500',
      subtitle: 'Awaiting review'
    },
    { 
      title: 'Transactions', 
      value: dashboardStats.transactions.toLocaleString(), 
      icon: <FaExchangeAlt />, 
      color: '#00C9A7',
      subtitle: 'This week'
    }
  ];

  return (
    <section className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>Welcome back 👋</h1>
          <p className={styles.sub}>Here's what's happening with your platform today</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.cards}>
        {statCards.map((stat, index) => (
          <div key={index} className={styles.card} style={{ borderLeft: `4px solid ${stat.color}` }}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon} style={{ background: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
              <h3>{stat.title}</h3>
            </div>
            <p className={styles.cardValue}>{stat.value}</p>
            <span className={styles.cardSubtitle}>{stat.subtitle}</span>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className={styles.chartsGrid}>
        {/* User Growth Chart */}
        <div className={styles.chartCard}>
          <h3>User Growth Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#39CDCC" strokeWidth={2} name="Total Users" />
              <Line type="monotone" dataKey="activeUsers" stroke="#5718FF" strokeWidth={2} name="Active Users" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Loan Distribution Chart */}
        <div className={styles.chartCard}>
          <h3>Loan Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={loanDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {loanDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Transaction Chart */}
        <div className={styles.chartCard}>
          <h3>Weekly Transaction Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={transactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Bar dataKey="amount" fill="#F55F44" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activities */}
        <div className={styles.chartCard}>
          <h3>Recent Activities</h3>
          <div className={styles.activitiesList}>
            {recentActivities.map((activity) => (
              <div key={activity.id} className={styles.activityItem}>
                <div className={styles.activityIcon} data-type={activity.type}>
                  {activity.type === 'loan' && <FaMoneyBillWave />}
                  {activity.type === 'account' && <FaUsers />}
                  {activity.type === 'transaction' && <FaExchangeAlt />}
                  {activity.type === 'profile' && <FaUsers />}
                </div>
                <div className={styles.activityContent}>
                  <p className={styles.activityUser}>{activity.user}</p>
                  <p className={styles.activityAction}>{activity.action}</p>
                </div>
                <span className={styles.activityTime}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={styles.quickActions}>
        <h3>Quick Actions</h3>
        <div className={styles.actionButtons}>
          <button className={styles.actionBtn}>
            <FaUsers /> View All Users
          </button>
          <button className={styles.actionBtn}>
            <FaMoneyBillWave /> Process Loans
          </button>
          <button className={styles.actionBtn}>
            <FaFileInvoiceDollar /> Review Requests
          </button>
          <button className={styles.actionBtn}>
            <FaChartLine /> Generate Report
          </button>
        </div>
      </div>
    </section>
  );
}
