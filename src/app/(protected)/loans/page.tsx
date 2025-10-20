'use client';
import { loansData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaMoneyBillWave, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';

export default function LoansPage() {
  const activeLoans = loansData.filter(l => l.status === 'Active').length;
  const pendingLoans = loansData.filter(l => l.status === 'Pending').length;

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Loans</h1>
        <p>Monitor and manage all loan applications and disbursements</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaMoneyBillWave className={styles.icon} />
          <div>
            <p className={styles.value}>{loansData.length}</p>
            <p className={styles.label}>Total Loans</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaCheckCircle className={styles.icon} style={{ color: '#00C9A7' }} />
          <div>
            <p className={styles.value}>{activeLoans}</p>
            <p className={styles.label}>Active</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaClock className={styles.icon} style={{ color: '#FFA500' }} />
          <div>
            <p className={styles.value}>{pendingLoans}</p>
            <p className={styles.label}>Pending</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Borrower</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Interest Rate</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {loansData.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.borrower}</td>
                <td>₦{loan.amount.toLocaleString()}</td>
                <td>{loan.type}</td>
                <td>
                  <span className={`${styles.status} ${styles[loan.status.toLowerCase()]}`}>
                    {loan.status === 'Active' && <FaCheckCircle />}
                    {loan.status === 'Pending' && <FaClock />}
                    {loan.status === 'Completed' && <FaCheckCircle />}
                    {loan.status}
                  </span>
                </td>
                <td>{loan.interestRate}</td>
                <td>{loan.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
