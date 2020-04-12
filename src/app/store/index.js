import { createStore } from 'redux';
import { defaultState } from '../../server/defaultState';

export const store = createStore(
  function reducer(store = defaultState, action) {
    return store;
  }
)