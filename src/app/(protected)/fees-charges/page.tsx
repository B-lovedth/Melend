'use client';
import styles from '../guarantors/page.module.scss';
import { FaDollarSign } from 'react-icons/fa';

export default function FeesChargesPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Fees and Charges</h1>
        <p>Manage transaction fees, processing charges, and penalties</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaDollarSign className={styles.icon} />
          <div>
            <p className={styles.value}>12</p>
            <p className={styles.label}>Fee Categories</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaDollarSign style={{ fontSize: '4rem', color: '#00C9A7', marginBottom: '1rem' }} />
          <h3>Fee Management</h3>
          <p>Configure platform fees and charges</p>
        </div>
      </div>
    </section>
  );
}
