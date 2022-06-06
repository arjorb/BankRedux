import { createStore } from 'redux';
import reducer from '../reducers/index.js';

const initialState = {
  username: 'John Uwimana',
  amount: 2500000,
};
export const store = createStore(reducer, initialState);
