'use client';
import styles from '../guarantors/page.module.scss';
import { FaFileInvoice } from 'react-icons/fa';

export default function SettlementsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Settlements</h1>
        <p>Track payment settlements and reconciliations</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaFileInvoice className={styles.icon} />
          <div>
            <p className={styles.value}>45</p>
            <p className={styles.label}>Pending Settlements</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaFileInvoice style={{ fontSize: '4rem', color: '#F55F44', marginBottom: '1rem' }} />
          <h3>Settlement Management</h3>
          <p>Track and manage payment settlements</p>
        </div>
      </div>
    </section>
  );
}
