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
      <p>HomePage text</p>
      <Button to="/">Get started</Button>

    </div>

  </Layout>;

export default HomePage;
