import React from 'react';
import { Layout, Button } from '../../components';
import styles from './Home.css';

const HomePage = () =>
  <Layout title="Welcome!">
    <div className={styles.main}>
      <div className={styles.logo}>
        <p>Logo</p>
      </div>

      <h1>This is the main home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Button to="/">Get started</Button>

    </div>

  </Layout>;

export default HomePage;
