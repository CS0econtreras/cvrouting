import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; // Import styles from the CSS module

const Header = () => {
  const cvlogo = '/images/cvlogo.png';
  return (
    <header className={styles.topHeader}> {/* Use styles.topHeader */}
      <div className={styles.headerInfo}> {/* Use styles.headerInfo */}
        <img src={cvlogo} alt="Logo" className={styles.headerLogo} /> {/* Use styles.headerLogo */}
        <h1>CV Roofing</h1>
        <h2>(970) 948-4860</h2>
      </div>
      <nav className={styles.headerNav}> {/* Use styles.headerNav */}
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
