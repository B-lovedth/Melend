'use client';
import { karmaData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaUserSlash } from 'react-icons/fa';

export default function KarmaPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Karma</h1>
        <p>Monitor blacklisted users and negative credit scores</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaUserSlash className={styles.icon} style={{ color: '#F55F44' }} />
          <div>
            <p className={styles.value}>{karmaData.length}</p>
            <p className={styles.label}>Flagged Users</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Reason</th>
              <th>Karma Score</th>
              <th>Added By</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {karmaData.map((item) => (
              <tr key={item.id}>
                <td>{item.user}</td>
                <td>{item.email}</td>
                <td>{item.reason}</td>
                <td>
                  <span className={styles.status} style={{
                    background: item.score < 30 ? '#F55F4420' : '#FFA50020',
                    color: item.score < 30 ? '#F55F44' : '#FFA500'
                  }}>
                    {item.score}/100
                  </span>
                </td>
                <td>{item.addedBy}</td>
                <td>{item.dateAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
