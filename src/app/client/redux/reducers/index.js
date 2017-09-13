import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import bank from './bank';

export default combineReducers({
  bank,
  routing: routerReducer,
});
