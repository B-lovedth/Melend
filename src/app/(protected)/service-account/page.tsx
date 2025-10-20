'use client';
import styles from '../guarantors/page.module.scss';
import { FaUserCog } from 'react-icons/fa';

export default function ServiceAccountPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Service Account</h1>
        <p>Manage service accounts and API credentials</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaUserCog className={styles.icon} />
          <div>
            <p className={styles.value}>8</p>
            <p className={styles.label}>Service Accounts</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaUserCog style={{ fontSize: '4rem', color: '#5718FF', marginBottom: '1rem' }} />
          <h3>Service Account Management</h3>
          <p>Configure API access and service credentials</p>
        </div>
      </div>
    </section>
  );
}
