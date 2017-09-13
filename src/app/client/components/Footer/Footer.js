import React from 'react';
import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <p>
          &copy; ThisCompany Limited 2017 All rights reserved.
          Except as permitted by the copyright law applicable to you,
          you may reproduce or communicate any of the content on this website,
          including files downloadable from this website, without the permission of the copyright owner.
        </p>
      <p>
        We are not going to change these terms of use anytime.
        No need to check before re-using any content from this website.
      </p>
    </div>
  </footer>
  );

export default Footer;
