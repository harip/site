'use client';

import React from 'react';
import Header from '../../components/Header';
import Search from '../../components/Search';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.iconSection}>
          <div className={styles.arrowContainer}></div>
          
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#d71920" strokeWidth="2" />
                <path d="M8 12L11 15L16 9" stroke="#d71920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Analytics</span>
          </div>
          
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="15" rx="2" stroke="#0070f3" strokeWidth="2" />
                <path d="M3 10H21" stroke="#0070f3" strokeWidth="2" />
                <path d="M7 3V6" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 3V6" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 14H7.01" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 14H12.01" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 14H17.01" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 18H7.01" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 18H12.01" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 18H17.01" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span>Calculator</span>
          </div>
          
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19" stroke="#00a86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z" stroke="#00a86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 17H15" stroke="#00a86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 13H15" stroke="#00a86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Documents</span>
          </div>
        </div>
        
        <div className={styles.searchSection}>
          <Search />
        </div>
      </main>
    </div>
  );
}
