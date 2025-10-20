'use client';
import { organizationsData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaBriefcase, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function OrganizationsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Organizations</h1>
        <p>Manage partner organizations and business accounts</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaBriefcase className={styles.icon} />
          <div>
            <p className={styles.value}>{organizationsData.length}</p>
            <p className={styles.label}>Total Organizations</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaCheckCircle className={styles.icon} style={{ color: '#00C9A7' }} />
          <div>
            <p className={styles.value}>{organizationsData.filter(o => o.status === 'Active').length}</p>
            <p className={styles.label}>Active</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Employees</th>
              <th>Status</th>
              <th>Date Joined</th>
            </tr>
          </thead>
          <tbody>
            {organizationsData.map((org) => (
              <tr key={org.id}>
                <td>{org.name}</td>
                <td>{org.type}</td>
                <td>{org.employees}</td>
                <td>
                  <span className={`${styles.status} ${styles[org.status.toLowerCase()]}`}>
                    {org.status === 'Active' ? <FaCheckCircle /> : <FaTimesCircle />}
                    {org.status}
                  </span>
                </td>
                <td>{org.dateJoined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
