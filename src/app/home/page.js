'use client'
import styles from './home.module.css';  
import { Roboto } from 'next/font/google';
import Image from 'next/image';


const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap',
});

const Home = () => {
  return (
    <section className={`${styles.home} ${roboto.className}`}>
      <div>
        <h4 className={styles.helloText}>Hello,</h4>
        <h1 className={styles.nameText}>I'm Ayush</h1>
        <h2 className={styles.roleText}>A Frontend Developer</h2>
        <p className={styles.para}>
          "Hi, I'm a passionate frontend developer with a keen eye for detail.
          I specialize in creating user-friendly and visually appealing web
          interfaces using the latest web technologies. I enjoy turning designs
          into interactive and responsive websites that deliver seamless user
          experiences."
        </p>
      </div>
      <div>
        <Image
          className={styles.image}  // Apply styles.image for consistent styling
          src="/profile.png"
          alt="Profile Image"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default Home;
