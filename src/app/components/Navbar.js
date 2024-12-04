'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { useState } from 'react';

// Specify subsets, weights, and display for Roboto
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400'],
  display: 'swap',
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle the menu state
  };

  return (
    <nav className={`navbar ${roboto.className}`}>
      <Link href="/" className="logo">
        <Image src="/ayush.png" alt="Logo" width={70} height={30} />
      </Link>

      {/* Menu links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/certification">Certifications</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>

      {/* Hamburger button */}
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
