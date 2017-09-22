import { keys } from 'ramda';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function setMovies(state, action) {
  const { movies } = action;
  return { ...state, ...movies };
}

export default function movie(state = initialState.movie, action) {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return setMovies(state, action);
    default:
      return state;
  }
}

/*  Selectors */
export function getMovies(state) {
  const moviesById = state.movie.movies;
  const moviesIdArray = keys(moviesById);
  return [moviesById, moviesIdArray];
}
