import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          {/* Replace with actual logo */}
          <div style={{ color: '#d71920', fontWeight: 'bold', fontSize: '1.2rem' }}>
            intact insurance
          </div>
        </Link>
      </div>
      
      <div className={styles.title}>
        BondClick Underwriting
      </div>
      
      <nav className={styles.nav}>
        <Link href="/referrals" className={styles.navLink}>
          Referrals
        </Link>
        <Link href="/fr" className={styles.navLink}>
          Français
        </Link>
      </nav>
    </header>
  );
};

export default Header;
