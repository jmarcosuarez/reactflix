import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

const Footer = props => (
  <footer className={styles.footer}>
    <div>
      <p>{props.onFetchmovies}
        &copy; ThisCompany Limited 2017 All rights reserved.
        Except as permitted by the copyright law applicable to you,
        you may reproduce or communicate any of the content on this website,
        including files downloadable from this website, without the permission of the copyright owner.
      </p>
    </div>
  </footer>
  );

Footer.propTypes = {
  onFetchmovies: PropTypes.func,
};

Footer.defaultProps = {
  onFetchmovies: () => {},
};

export default Footer;
