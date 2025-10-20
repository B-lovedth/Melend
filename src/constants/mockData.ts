// Mock data for dashboard and various pages

export const dashboardStats = {
  totalUsers: 2312,
  activeUsers: 1856,
  totalLoans: 843,
  activeLoans: 612,
  pendingRequests: 129,
  totalSavings: 45600000,
  monthlyRevenue: 12500000,
  transactions: 5432
};

export const userGrowthData = [
  { month: 'Jan', users: 1200, activeUsers: 980 },
  { month: 'Feb', users: 1450, activeUsers: 1180 },
  { month: 'Mar', users: 1680, activeUsers: 1390 },
  { month: 'Apr', users: 1920, activeUsers: 1560 },
  { month: 'May', users: 2150, activeUsers: 1750 },
  { month: 'Jun', users: 2312, activeUsers: 1856 }
];

export const loanDistributionData = [
  { name: 'Personal Loans', value: 435, color: '#39CDCC' },
  { name: 'Business Loans', value: 268, color: '#F55F44' },
  { name: 'Education Loans', value: 140, color: '#5718FF' }
];

export const transactionData = [
  { day: 'Mon', amount: 45000 },
  { day: 'Tue', amount: 52000 },
  { day: 'Wed', amount: 48000 },
  { day: 'Thu', amount: 61000 },
  { day: 'Fri', amount: 55000 },
  { day: 'Sat', amount: 38000 },
  { day: 'Sun', amount: 42000 }
];

export const recentActivities = [
  { id: 1, user: 'Grace Effiom', action: 'Applied for loan', time: '2 mins ago', type: 'loan' },
  { id: 2, user: 'John Doe', action: 'Account activated', time: '15 mins ago', type: 'account' },
  { id: 3, user: 'Jane Smith', action: 'Made deposit', time: '1 hour ago', type: 'transaction' },
  { id: 4, user: 'Mike Johnson', action: 'Loan approved', time: '2 hours ago', type: 'loan' },
  { id: 5, user: 'Sarah Williams', action: 'Profile updated', time: '3 hours ago', type: 'profile' }
];

// Mock data for Guarantors
export const guarantorsData = [
  { id: 1, name: 'Debby Ogana', email: 'debby@gmail.com', phone: '07060780922', relationship: 'Sister', status: 'Active', dateAdded: 'Jan 10, 2024' },
  { id: 2, name: 'Michael Brown', email: 'michael@gmail.com', phone: '08012345678', relationship: 'Friend', status: 'Active', dateAdded: 'Jan 15, 2024' },
  { id: 3, name: 'Susan White', email: 'susan@gmail.com', phone: '09087654321', relationship: 'Colleague', status: 'Inactive', dateAdded: 'Feb 5, 2024' },
  { id: 4, name: 'David Lee', email: 'david@gmail.com', phone: '08123456789', relationship: 'Brother', status: 'Active', dateAdded: 'Feb 20, 2024' }
];

// Mock data for Loans
export const loansData = [
  { id: 1, borrower: 'Grace Effiom', amount: 500000, type: 'Personal', status: 'Active', dueDate: 'Dec 31, 2024', interestRate: '5%' },
  { id: 2, borrower: 'John Doe', amount: 1200000, type: 'Business', status: 'Pending', dueDate: 'Jan 15, 2025', interestRate: '7%' },
  { id: 3, borrower: 'Jane Smith', amount: 300000, type: 'Education', status: 'Active', dueDate: 'Nov 30, 2024', interestRate: '4%' },
  { id: 4, borrower: 'Mike Johnson', amount: 800000, type: 'Personal', status: 'Completed', dueDate: 'Oct 10, 2024', interestRate: '5.5%' }
];

// Mock data for Savings
export const savingsData = [
  { id: 1, user: 'Grace Effiom', balance: 250000, plan: 'Target Savings', interestRate: '10%', startDate: 'Jan 1, 2024', maturityDate: 'Dec 31, 2024' },
  { id: 2, user: 'John Doe', balance: 500000, plan: 'Fixed Deposit', interestRate: '12%', startDate: 'Feb 15, 2024', maturityDate: 'Feb 14, 2025' },
  { id: 3, user: 'Jane Smith', balance: 150000, plan: 'Flex Save', interestRate: '8%', startDate: 'Mar 10, 2024', maturityDate: 'Mar 9, 2025' },
  { id: 4, user: 'Mike Johnson', balance: 800000, plan: 'Target Savings', interestRate: '10%', startDate: 'Apr 5, 2024', maturityDate: 'Apr 4, 2025' }
];

// Mock data for Transactions
export const transactionsData = [
  { id: 1, user: 'Grace Effiom', type: 'Deposit', amount: 50000, status: 'Completed', date: 'Oct 20, 2024 10:30 AM', reference: 'TXN001234' },
  { id: 2, user: 'John Doe', type: 'Withdrawal', amount: 30000, status: 'Completed', date: 'Oct 20, 2024 09:15 AM', reference: 'TXN001235' },
  { id: 3, user: 'Jane Smith', type: 'Transfer', amount: 100000, status: 'Pending', date: 'Oct 20, 2024 08:45 AM', reference: 'TXN001236' },
  { id: 4, user: 'Mike Johnson', type: 'Deposit', amount: 75000, status: 'Completed', date: 'Oct 19, 2024 05:20 PM', reference: 'TXN001237' }
];

// Mock data for Loan Requests
export const loanRequestsData = [
  { id: 1, applicant: 'Sarah Williams', amount: 400000, purpose: 'Business Expansion', status: 'Pending Review', dateSubmitted: 'Oct 18, 2024' },
  { id: 2, applicant: 'Robert Taylor', amount: 600000, purpose: 'Education', status: 'Under Review', dateSubmitted: 'Oct 17, 2024' },
  { id: 3, applicant: 'Emily Davis', amount: 250000, purpose: 'Medical Emergency', status: 'Approved', dateSubmitted: 'Oct 15, 2024' },
  { id: 4, applicant: 'James Wilson', amount: 1000000, purpose: 'Real Estate', status: 'Rejected', dateSubmitted: 'Oct 14, 2024' }
];

// Mock data for Organizations
export const organizationsData = [
  { id: 1, name: 'Melend', type: 'FinTech', employees: 150, status: 'Active', dateJoined: 'Jan 1, 2020' },
  { id: 2, name: 'GreatCorp', type: 'Technology', employees: 300, status: 'Active', dateJoined: 'Mar 15, 2021' },
  { id: 3, name: 'TechVentures', type: 'Consulting', employees: 75, status: 'Inactive', dateJoined: 'Jun 20, 2022' },
  { id: 4, name: 'InnovateHub', type: 'Software', employees: 200, status: 'Active', dateJoined: 'Sep 10, 2023' }
];

// Mock data for Reports
export const reportsData = [
  { id: 1, title: 'Monthly Revenue Report', type: 'Financial', generatedBy: 'System', date: 'Oct 1, 2024', status: 'Available' },
  { id: 2, title: 'User Activity Report', type: 'Analytics', generatedBy: 'Admin', date: 'Oct 10, 2024', status: 'Available' },
  { id: 3, title: 'Loan Performance Report', type: 'Operations', generatedBy: 'System', date: 'Oct 15, 2024', status: 'Processing' },
  { id: 4, title: 'Compliance Report', type: 'Legal', generatedBy: 'Admin', date: 'Sep 30, 2024', status: 'Available' }
];

// Mock data for Audit Logs
export const auditLogsData = [
  { id: 1, action: 'User Login', performer: 'admin@melend.com', ipAddress: '192.168.1.1', timestamp: 'Oct 20, 2024 10:30 AM', status: 'Success' },
  { id: 2, action: 'User Status Update', performer: 'admin@melend.com', ipAddress: '192.168.1.1', timestamp: 'Oct 20, 2024 10:15 AM', status: 'Success' },
  { id: 3, action: 'Loan Approval', performer: 'manager@melend.com', ipAddress: '192.168.1.5', timestamp: 'Oct 20, 2024 09:45 AM', status: 'Success' },
  { id: 4, action: 'Failed Login Attempt', performer: 'unknown@email.com', ipAddress: '203.45.67.89', timestamp: 'Oct 20, 2024 09:30 AM', status: 'Failed' }
];

// Mock data for Whitelist
export const whitelistData = [
  { id: 1, user: 'Grace Effiom', email: 'grace@gmail.com', reason: 'VIP Customer', addedBy: 'Admin', dateAdded: 'Sep 10, 2024' },
  { id: 2, user: 'John Doe', email: 'john@gmail.com', reason: 'Premium Member', addedBy: 'Manager', dateAdded: 'Sep 15, 2024' },
  { id: 3, user: 'Corporate Client A', email: 'client@corp.com', reason: 'Corporate Partner', addedBy: 'Admin', dateAdded: 'Oct 1, 2024' }
];

// Mock data for Karma/Blacklist
export const karmaData = [
  { id: 1, user: 'Suspicious User', email: 'sus@email.com', reason: 'Multiple failed payments', score: 25, addedBy: 'System', dateAdded: 'Aug 20, 2024' },
  { id: 2, user: 'Fraud Account', email: 'fraud@email.com', reason: 'Fraudulent activities', score: 10, addedBy: 'Admin', dateAdded: 'Sep 5, 2024' },
  { id: 3, user: 'Defaulter User', email: 'defaulter@email.com', reason: 'Loan default', score: 40, addedBy: 'System', dateAdded: 'Sep 25, 2024' }
];
