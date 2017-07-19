import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import UserReducer from '../Reducers/User'

export let initStore = () => {

  const reducer = combineReducers( {
    user: UserReducer
  });

  const store = createStore( reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
