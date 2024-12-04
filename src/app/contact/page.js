'use client'
import { useState } from 'react';
import styles from './contact.module.css';
import { Roboto } from 'next/font/google';
import emailjs from 'emailjs-com'; 

const roboto = Roboto({
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual EmailJS credentials
    emailjs
      .sendForm(
        'service_6x0hm84',    // Service ID from EmailJS
        'template_510abts',    // Template ID from EmailJS
        e.target,              // The form element
        '5ufvKdakWfeRsifaw'         // User ID from EmailJS
      )
      .then(
        (result) => {
          alert('Your message has been sent!');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form after submission
        },
        (error) => {
          alert('An error occurred. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className={`${styles.contactsection} ${roboto.className}`}>
      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.contact}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button className={styles.button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
