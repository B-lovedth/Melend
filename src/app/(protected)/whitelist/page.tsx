'use client';
import { whitelistData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaUserCheck } from 'react-icons/fa';

export default function WhitelistPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Whitelist</h1>
        <p>Manage trusted users and VIP customers</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaUserCheck className={styles.icon} />
          <div>
            <p className={styles.value}>{whitelistData.length}</p>
            <p className={styles.label}>Whitelisted Users</p>
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
              <th>Added By</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {whitelistData.map((item) => (
              <tr key={item.id}>
                <td>{item.user}</td>
                <td>{item.email}</td>
                <td>{item.reason}</td>
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
