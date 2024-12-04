'use client';


import styles from './certification.module.css';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const roboto = Roboto({
  weight: '400', // Increased weight for better readability
  subsets: ['latin'],
  display: 'swap',
});

const Certification = () => {
  

  

  return (
    <section className={`${styles.CertificationSection} ${roboto.className}`}>
      <h1
        className={styles.heading}
      >
        Certifications
      </h1 >
      <div className={styles.imageContainer}>
      <Link
          href="https://ibb.co/ZLrH2jD"
          // target="_blank"
          // rel="noopener noreferrer"
        >
        <Image
        
          className={styles.certificationImage}
          src="/c1.jpg"
          alt="Certificate 1: React certification"
          width={450}
          height={350}
        /></Link>
        {/* External Links */}
        <Link
          href="https://media.geeksforgeeks.org/courses/certificates/04da455124a58cba1aef6f16572746c8.pdf"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <Image
            className={styles.certificationImage}
            src="/c2.jpg"
            alt="Certificate 2: Advanced DSA from GeeksforGeeks"
            width={450}
            height={350}
          />
        </Link>
        <Link
          href="https://www.coursera.org/account/accomplishments/verify/GBHVM5BM96AS"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <Image
            className={styles.certificationImage}
            src="/c3.jpg"
            alt="Certificate 3: Node js from coursera"
            width={450}
            height={350}
          />
        </Link>
      </div>
    </section>
  );
};

export default Certification;
