'use client';
import { transactionsData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaExchangeAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

export default function TransactionsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Transactions</h1>
        <p>View all financial transactions and payment history</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaExchangeAlt className={styles.icon} />
          <div>
            <p className={styles.value}>{transactionsData.length}</p>
            <p className={styles.label}>Total Transactions</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaCheckCircle className={styles.icon} style={{ color: '#00C9A7' }} />
          <div>
            <p className={styles.value}>{transactionsData.filter(t => t.status === 'Completed').length}</p>
            <p className={styles.label}>Completed</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Reference</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.user}</td>
                <td>{txn.type}</td>
                <td>₦{txn.amount.toLocaleString()}</td>
                <td>
                  <span className={`${styles.status} ${styles[txn.status.toLowerCase()]}`}>
                    {txn.status === 'Completed' ? <FaCheckCircle /> : <FaClock />}
                    {txn.status}
                  </span>
                </td>
                <td>{txn.reference}</td>
                <td>{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
