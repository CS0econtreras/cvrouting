"use client";

import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.text}>
          We are a local family-owned and operated roofing company. With 20+ years of experience in the industry, we strive to deliver high-quality and well-built roofs. Our focus points are honest work and strong attention to detail in order to ensure premium roofs. We value all project sizes, from small fixtures to large reroofs, and promise to always exceed our customers’ expectations.
        </p>
      </div>
    </section>
  );
};

export default About;
