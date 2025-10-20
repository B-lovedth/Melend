'use client';
import styles from '../guarantors/page.module.scss';
import { FaTag } from 'react-icons/fa';

export default function FeesPricingPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Fees and Pricing</h1>
        <p>Set pricing tiers and subscription fees</p>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaTag style={{ fontSize: '4rem', color: '#5718FF', marginBottom: '1rem' }} />
          <h3>Pricing Management</h3>
          <p>Configure pricing tiers and subscription models</p>
        </div>
      </div>
    </section>
  );
}
