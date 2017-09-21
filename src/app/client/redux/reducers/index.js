import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movie from './movie';

export default combineReducers({
  movie,
  routing: routerReducer,
});
