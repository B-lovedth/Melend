'use client';
import { auditLogsData } from '@/constants/mockData';
import styles from '../guarantors/page.module.scss';
import { FaClipboard, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function AuditLogsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Audit Logs</h1>
        <p>Track all system activities and user actions</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaClipboard className={styles.icon} />
          <div>
            <p className={styles.value}>{auditLogsData.length}</p>
            <p className={styles.label}>Total Logs</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaCheckCircle className={styles.icon} style={{ color: '#00C9A7' }} />
          <div>
            <p className={styles.value}>{auditLogsData.filter(l => l.status === 'Success').length}</p>
            <p className={styles.label}>Successful</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Action</th>
              <th>Performer</th>
              <th>IP Address</th>
              <th>Timestamp</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {auditLogsData.map((log) => (
              <tr key={log.id}>
                <td>{log.action}</td>
                <td>{log.performer}</td>
                <td>{log.ipAddress}</td>
                <td>{log.timestamp}</td>
                <td>
                  <span className={`${styles.status} ${
                    log.status === 'Success' ? styles.active : styles.inactive
                  }`}>
                    {log.status === 'Success' ? <FaCheckCircle /> : <FaTimesCircle />}
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
