import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import * as moviesSelectors from '../../redux/reducers/movie';

import styles from './Footer.css';

class Footer extends Component {

  componentDidMount() {
    this.props.onFetchmovies();
  }

  render() {
    return (
      <footer className={styles.footer}>
        <div>
          <p>
            &copy; ThisCompany Limited 2017 All rights reserved.
            Except as permitted by the copyright law applicable to you,
            you may reproduce or communicate any of the content on this website,
            including files downloadable from this website, without the permission of the copyright owner.
          </p>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  onFetchmovies: PropTypes.func,
};

Footer.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
