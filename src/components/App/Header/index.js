import React from 'react';
import styles from '../App.css';

const Header = () =>
  <header className={styles.header}>
    <p>TITLE</p>
    <div className="btn-group">
      <button type="button" className="btn btn-primary">About</button>
      <button type="button" className="btn btn-primary">LogIn</button>
      <button type="button" className="btn btn-primary">Register</button>
    </div>
  </header>;

export default Header;
