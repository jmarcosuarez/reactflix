/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../';
import styles from './Layout.css';

class Layout extends Component {

  componentDidMount() {
    document.title = this.props.title;
    this.props.onFetchmovies();
  }

  render() {
    return (
      <section className={styles.container}>
        <Header />
        <div className={styles.layout}>
          {this.props.children}
        </div>
        <Footer />
      </section>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  title: PropTypes.string,
  onFetchmovies: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
