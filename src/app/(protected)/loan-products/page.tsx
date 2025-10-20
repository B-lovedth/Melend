'use client';
import styles from '../guarantors/page.module.scss';
import { FaMoneyBillWave } from 'react-icons/fa';

export default function LoanProductsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Loan Products</h1>
        <p>Manage different types of loan offerings and terms</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaMoneyBillWave className={styles.icon} />
          <div>
            <p className={styles.value}>8</p>
            <p className={styles.label}>Products Available</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaMoneyBillWave style={{ fontSize: '4rem', color: '#F55F44', marginBottom: '1rem' }} />
          <h3>Loan Products Catalog</h3>
          <p>Manage loan products, interest rates, and terms</p>
        </div>
      </div>
    </section>
  );
}
