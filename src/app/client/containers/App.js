import React from 'react';
import PropTypes from 'prop-types';

import styles from '../components/Layout/Layout.css';

const App = props =>
  <div className={styles.container}>
    {
      props.children
    }
    <p>Inspired by @makv25s <a href="https://dribbble.com/shots/3720358-Daily-Ui-025-TV-app">daily dribble</a></p>
  </div>;

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.defaultProps = {
};

export default App;
