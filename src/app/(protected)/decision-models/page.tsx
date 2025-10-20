'use client';
import styles from '../guarantors/page.module.scss';
import { FaHandshake } from 'react-icons/fa';

export default function DecisionModelsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Decision Models</h1>
        <p>Configure automated loan decision algorithms and credit scoring models</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaHandshake className={styles.icon} />
          <div>
            <p className={styles.value}>5</p>
            <p className={styles.label}>Active Models</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaHandshake style={{ fontSize: '4rem', color: '#39CDCC', marginBottom: '1rem' }} />
          <h3>Decision Models Management</h3>
          <p>Configure and manage credit decision algorithms</p>
        </div>
      </div>
    </section>
  );
}
