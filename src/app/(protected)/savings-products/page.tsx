'use client';
import styles from '../guarantors/page.module.scss';
import { FaPiggyBank } from 'react-icons/fa';

export default function SavingsProductsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Savings Products</h1>
        <p>Configure savings plans and interest schemes</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaPiggyBank className={styles.icon} />
          <div>
            <p className={styles.value}>6</p>
            <p className={styles.label}>Products Available</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaPiggyBank style={{ fontSize: '4rem', color: '#5718FF', marginBottom: '1rem' }} />
          <h3>Savings Products Catalog</h3>
          <p>Manage savings plans and interest rates</p>
        </div>
      </div>
    </section>
  );
}
