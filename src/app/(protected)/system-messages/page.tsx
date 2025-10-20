'use client';
import styles from '../guarantors/page.module.scss';
import { FaBell } from 'react-icons/fa';

export default function SystemMessagesPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>System Messages</h1>
        <p>Manage platform notifications and system announcements</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaBell className={styles.icon} />
          <div>
            <p className={styles.value}>3</p>
            <p className={styles.label}>Active Messages</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaBell style={{ fontSize: '4rem', color: '#FFA500', marginBottom: '1rem' }} />
          <h3>System Messaging</h3>
          <p>Create and manage platform-wide notifications</p>
        </div>
      </div>
    </section>
  );
}
