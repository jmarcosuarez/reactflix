import React from 'react';
import PropTypes from 'prop-types';

import styles from '../components/Layout/Layout.css';

const App = props =>
  <div className={styles.container}>
    {
      props.children
    }
  </div>;

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.defaultProps = {
};

export default App;
