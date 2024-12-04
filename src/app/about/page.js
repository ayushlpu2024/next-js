'use client'
import styles from './about.module.css';
import { Roboto } from 'next/font/google';
import Chatbot from '../chatbot/page';
const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap',
});

const About = () => {
  return (
    <section className={`${styles.about} ${roboto.className}`}>
      <h1 style={{ color: '#ff5733', fontSize: '3rem', marginBottom: '2rem' }}>
        Know! About Me
      </h1>
      <Chatbot /> 
    </section>
  );
};

export default About;

