import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';

import styles from './app.css';

const App = props =>
  <div>
    <div className={styles.container}>
      <div className={styles.layout}>
        { props.children }
      </div>

      <Footer />

    </div>
    <p className={styles.info}>
      Inspired by @makv25s <a href="https://dribbble.com/shots/3720358-Daily-Ui-025-TV-app">daily dribble</a>
    </p>
  </div>;

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
