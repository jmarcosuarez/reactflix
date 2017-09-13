import React from 'react';

import styles from './Header.css';

const Header = () =>
  <div className={styles.header}>
    <div className={styles.logo} />
    <div className={styles.signin}>
      <p>Logo - Links and so forth</p>
    </div>
  </div>;

export default Header;
