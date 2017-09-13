import * as types from '../actions/actionTypes';
import initialState from './initialState';

function setTransactions(state, action) {
  const { transactions } = action;
  return { ...state, ...transactions };
}
function setChoosenBank(state, action) {
  const { choosenBank } = action;
  return { ...state, choosenBank };
}

export default function bank(state = initialState.bank, action) {
  switch (action.type) {
    case types.BANK_SELECT:
      return setChoosenBank(state, action);
    case types.FETCH_TRANSACTIONS:
      return setTransactions(state, action);
    default:
      return state;
  }
}
