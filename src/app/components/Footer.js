import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        {/* Phone Icon */}
        <div className="icon">
          <Image 
            src="/phone.png"
            alt="Phone icon"
            width={30}
            height={30}
          />
          <span>+91 8837825641</span>
        </div>

        {/* Email Icon */}
        <div className="icon">
          <Image 
            src="/email.png"
            alt="Email icon"
            width={30}
            height={30}
          />
          <span>ayuush8757@gmail.com</span>
        </div>

        {/* LinkedIn Icon */}
        <Link href="https://www.linkedin.com/in/ayush9060/" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <Image 
              src="/linkedin.png"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </div>
        </Link>

        {/* GitHub Icon */}
        <Link href="https://github.com/ayushlpu2024" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <Image 
              src="/github.png"
              alt="GitHub"
              width={30}
              height={30}
            />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
