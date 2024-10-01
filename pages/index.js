import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'; // Ensure this path is correct

// Use relative paths from the public directory
const images = [
  '/images/crm-1.jpg', 
  '/images/crm-01.jpg',
  '/images/crm-02.webp',
  '/images/crm-03.jpg',
];

export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to Create Company page
  const navigateToCreateCompany = () => {
    router.push('/create-company');
  };

  // Navigate to View Companies page
  const navigateToViewCompanies = () => {
    router.push('/view-companies');
  };

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Set up an interval to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.magicalHeader}>
        <h1 className={styles.title}> mini Company Relationship Management</h1>
        <p className={styles.subtitle}>Manage your companies efficiently</p>
      </header>
      
      {/* Image Carousel */}
      <div className={styles.carousel}>
        <button onClick={prevImage} className={styles.carouselButton}>
          ❮
        </button>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className={styles.carouselImage} 
        />
        <button onClick={nextImage} className={styles.carouselButton}>
          ❯
        </button>
      </div>

      <main className={styles.main}>
        <div className={styles.buttonContainer}>
          <button 
            onClick={navigateToCreateCompany} 
            className={`${styles.button} ${styles.createButton}`}
            aria-label="Create a new company"
          >
            Create Company
          </button>
          <button 
            onClick={navigateToViewCompanies} 
            className={`${styles.button} ${styles.viewButton}`}
            aria-label="View all companies"
          >
            View All Companies
          </button>
        </div>
      </main>
    
      <footer className={styles.footer}>
        <p>© 2024 Company Management System</p>
      </footer>
    </div>
  );
}