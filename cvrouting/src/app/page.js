// src/app/page.js
import React from 'react';
import ServiceCard from './components/ServiceCard/ServiceCard';
import styles from './styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.heading}>Welcome to CV Roofing</h1>
      <p className={styles.description}>We provide the best roofing services.</p>
      <div className={styles.services}>
        <ServiceCard 
          title="Roof Repair" 
          description="We fix all types of roof damages." 
          img1="/images/ss1.png" 
          img2="/images/ss2.png" 
        />
        <ServiceCard 
          title="New Roof Installation" 
          description="We install new roofs with high-quality materials." 
          img1="/images/ss3.png" 
          img2="/images/ss4.png"
        />
      </div>
      <p className={styles.hyperlink}>
        Visit 
        <a 
          href="https://www.facebook.com/cvroofing970/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
          title="Go to https://www.facebook.com/cvroofing970/">
          CV Roofing Facebook 
        </a> 
        for more information.
      </p>
    </div>
  );
}
