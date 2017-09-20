import React from 'react';
import { Layout } from '../../components';
import styles from './Home.css';

const HomePage = () =>
  <Layout title="Welcome!">
    <div className={styles.wrapper}>
      <div className={styles.main}>

        <h1>reactflix</h1>
        <p>Select a movie below from the list of critically acclaimed Christopher Nolan films.</p>

      </div>
    </div>

  </Layout>;

export default HomePage;
