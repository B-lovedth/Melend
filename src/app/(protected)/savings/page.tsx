'use client';
import { savingsData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaPiggyBank } from 'react-icons/fa';

export default function SavingsPage() {
  const totalBalance = savingsData.reduce((sum, s) => sum + s.balance, 0);

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Savings</h1>
        <p>Track customer savings plans and balances</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaPiggyBank className={styles.icon} />
          <div>
            <p className={styles.value}>{savingsData.length}</p>
            <p className={styles.label}>Savings Accounts</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaPiggyBank className={styles.icon} style={{ color: '#5718FF' }} />
          <div>
            <p className={styles.value}>₦{(totalBalance / 1000000).toFixed(1)}M</p>
            <p className={styles.label}>Total Balance</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Balance</th>
              <th>Plan</th>
              <th>Interest Rate</th>
              <th>Start Date</th>
              <th>Maturity Date</th>
            </tr>
          </thead>
          <tbody>
            {savingsData.map((saving) => (
              <tr key={saving.id}>
                <td>{saving.user}</td>
                <td>₦{saving.balance.toLocaleString()}</td>
                <td>{saving.plan}</td>
                <td>{saving.interestRate}</td>
                <td>{saving.startDate}</td>
                <td>{saving.maturityDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
