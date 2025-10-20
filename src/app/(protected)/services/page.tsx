'use client';
import styles from '../guarantors/page.module.scss';
import { FaCog } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Services</h1>
        <p>Manage integrated services and third-party integrations</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaCog className={styles.icon} />
          <div>
            <p className={styles.value}>15</p>
            <p className={styles.label}>Active Services</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaCog style={{ fontSize: '4rem', color: '#39CDCC', marginBottom: '1rem' }} />
          <h3>Platform Services</h3>
          <p>Configure and monitor integrated services</p>
        </div>
      </div>
    </section>
  );
}
