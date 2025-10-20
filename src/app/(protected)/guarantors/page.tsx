'use client';
import { guarantorsData } from '@/constants/mockData';
import styles from './page.module.scss';
import { FaUserShield, FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function GuarantorsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Guarantors</h1>
        <p>Manage guarantor information and verification status</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaUserShield className={styles.icon} />
          <div>
            <p className={styles.value}>{guarantorsData.length}</p>
            <p className={styles.label}>Total Guarantors</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaCheckCircle className={styles.icon} style={{ color: '#00C9A7' }} />
          <div>
            <p className={styles.value}>{guarantorsData.filter(g => g.status === 'Active').length}</p>
            <p className={styles.label}>Active</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Relationship</th>
              <th>Status</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {guarantorsData.map((guarantor) => (
              <tr key={guarantor.id}>
                <td>
                  <div className={styles.nameCell}>
                    <FaUserShield />
                    <span>{guarantor.name}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.emailCell}>
                    <FaEnvelope />
                    <span>{guarantor.email}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.phoneCell}>
                    <FaPhone />
                    <span>{guarantor.phone}</span>
                  </div>
                </td>
                <td>{guarantor.relationship}</td>
                <td>
                  <span className={`${styles.status} ${styles[guarantor.status.toLowerCase()]}`}>
                    {guarantor.status === 'Active' ? <FaCheckCircle /> : <FaTimesCircle />}
                    {guarantor.status}
                  </span>
                </td>
                <td>{guarantor.dateAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
