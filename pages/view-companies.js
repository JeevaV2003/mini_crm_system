import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'; // Use a separate CSS file

const ViewCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/companies');
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Company Directory</h1>
        <p className={styles.subtitle}>Explore all registered companies</p>
      </header>
      {loading && <p className={styles.loading}>Loading companies...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.cardContainer}>
        {companies.length > 0 ? (
          companies.map((company) => (
            <div key={company._id} className={styles.card}>
              <h2 className={styles.companyName}>Company Name: {company.name}</h2>
              <p className={styles.industry}>Industry: {company.industry}</p>
              <p className={styles.description}>Description: {company.description}</p>
              <p className={styles.date}>Created At: {new Date(company.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          !loading && <p className={styles.noCompanies}>No companies found</p>
        )}
      </div>
    </div>
  );
};

export default ViewCompanies;