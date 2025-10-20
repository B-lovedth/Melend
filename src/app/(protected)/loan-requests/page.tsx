'use client';
import { loanRequestsData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaFileInvoiceDollar, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function LoanRequestsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Loan Requests</h1>
        <p>Review and process new loan applications</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaFileInvoiceDollar className={styles.icon} />
          <div>
            <p className={styles.value}>{loanRequestsData.length}</p>
            <p className={styles.label}>Total Requests</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaClock className={styles.icon} style={{ color: '#FFA500' }} />
          <div>
            <p className={styles.value}>{loanRequestsData.filter(r => r.status.includes('Pending') || r.status.includes('Review')).length}</p>
            <p className={styles.label}>Pending Review</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Amount</th>
              <th>Purpose</th>
              <th>Status</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {loanRequestsData.map((request) => (
              <tr key={request.id}>
                <td>{request.applicant}</td>
                <td>₦{request.amount.toLocaleString()}</td>
                <td>{request.purpose}</td>
                <td>
                  <span className={`${styles.status} ${
                    request.status === 'Approved' ? styles.active :
                    request.status === 'Rejected' ? styles.inactive : ''
                  }`}>
                    {request.status === 'Approved' && <FaCheckCircle />}
                    {request.status === 'Rejected' && <FaTimesCircle />}
                    {request.status.includes('Review') && <FaClock />}
                    {request.status}
                  </span>
                </td>
                <td>{request.dateSubmitted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
