import React, { useState } from 'react';
import styles from './Search.module.css';

const Search: React.FC = () => {
  const [searchType, setSearchType] = useState('account');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchTypeChange = (type: string) => {
    setSearchType(type);
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for', searchType, 'with value:', searchValue);
  };

  return (
    <div className={styles.searchContainer}>
      <h2 className={styles.title}>Which account are you working on today?</h2>
      
      <div className={styles.optionsContainer}>
        <div className={styles.option} onClick={() => handleSearchTypeChange('account')}>
          <span className={styles.radioCircle}>
            {searchType === 'account' ? 'o' : ''}
          </span>
          <span className={styles.labelText}>Account</span>
        </div>
        
        <div className={styles.option} onClick={() => handleSearchTypeChange('principal')}>
          <span className={styles.radioCircle}>
            {searchType === 'principal' ? 'o' : ''}
          </span>
          <span className={styles.labelText}>Principal</span>
        </div>
        
        <div className={styles.option} onClick={() => handleSearchTypeChange('bondNumber')}>
          <span className={styles.radioCircle}>
            {searchType === 'bondNumber' ? 'o' : ''}
          </span>
          <span className={styles.labelText}>Bond Number</span>
        </div>
        
        <div className={styles.option} onClick={() => handleSearchTypeChange('pofNumber')}>
          <span className={styles.radioCircle}>
            {searchType === 'pofNumber' ? 'o' : ''}
          </span>
          <span className={styles.labelText}>POF Number</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchValueChange}
            className={styles.searchInput}
            placeholder="Enter account"
            minLength={4}
            required
          />
          <button type="submit" className={styles.searchButton} aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
        <p className={styles.helperText}>Minimum 4 characters required</p>
      </form>
    </div>
  );
};

export default Search;
