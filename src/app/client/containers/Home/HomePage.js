import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import * as moviesSelectors from '../../redux/reducers/movie';

import { Layout } from '../../components';
import styles from './Home.css';

const HomePage = props =>
  <Layout onFetchmovies={props.onFetchmovies} title="Welcome!">
    <div className={styles.wrapper}>
      <div className={styles.main}>

        <h1>reactflix</h1>
        <p>Select a movie below from the list of critically acclaimed Christopher Nolan films.</p>

      </div>
    </div>

  </Layout>;

HomePage.propTypes = {
  onFetchmovies: PropTypes.func,
};

HomePage.defaultProps = {
  onFetchmovies: () => {},
};

function mapStateToProps(state) {
  const [moviesById, moviesIdArray] = moviesSelectors.getMovies(state);
  return {
    moviesById,
    moviesIdArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchmovies: bindActionCreators(actions.fetchMovies, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
