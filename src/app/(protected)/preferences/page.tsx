'use client';
import styles from '../guarantors/page.module.scss';
import { FaSlidersH } from 'react-icons/fa';

export default function PreferencesPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Preferences</h1>
        <p>Configure system preferences and user settings</p>
      </div>

      <div className={styles.tableContainer}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          <FaSlidersH style={{ fontSize: '4rem', color: '#39CDCC', marginBottom: '1rem' }} />
          <h3>System Preferences</h3>
          <p>Customize platform settings and configurations</p>
        </div>
      </div>
    </section>
  );
}
