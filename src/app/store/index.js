import { createStore, applyMiddleware } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';

export const store = createStore(
  function reducer(store = defaultState, action) {
    return store;
  },
  applyMiddleware(createLogger())
);