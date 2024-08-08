// src/components/ServiceCard.js
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css'; // Adjust the path as necessary

const ServiceCard = ({ title, description, img1, img2 }) => {
  return (
    <div className={styles.serviceCard}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.serviceImages}>
        <Image src={img1} alt={`${title} Image 1`} width={220} height={220} />
        <Image src={img2} alt={`${title} Image 2`} width={220} height={220} />
      </div>
    </div>
  );
}

export default ServiceCard;
