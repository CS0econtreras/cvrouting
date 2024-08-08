// src/app/contact/page.js
"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css'; // Adjust the path if necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    emailjs.send('service_thpe8ji', 'template_qv71f38', formData, 'FK3zYr6_S9SnnIHx5')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or to get a quote.</p>
      <form className={styles.infoInput} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div className={styles.formRow}>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
