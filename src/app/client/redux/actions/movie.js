import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actions/actionTypes';

export function setMovies(movies) {
  return {
    type: actionTypes.FETCH_MOVIES,
    movies,
  };
}
/**
 * Called synchronously when app loads
 */
export function fetchMovies() {
  return (dispatch, getState) => {
    if (getState().movies) {
      return; // No need to fetch
    }
    /* eslint-disable consistent-return */
    return fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(movies => dispatch(setMovies(movies)));
  };
}
