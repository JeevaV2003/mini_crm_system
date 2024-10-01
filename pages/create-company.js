import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const CreateCompany = () => {
  const [formData, setFormData] = useState({ name: '', industry: '', description: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Company added successfully');
      router.push('/');
    } else {
      alert('Error adding company');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Company Component</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>Add Company</button>
      </form>
    </div>
  );
};

export default CreateCompany;
