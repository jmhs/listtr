import { createStore, compose, combineReducers, applyMiddleware } from 'redux'; // compose is used

import thunk from 'redux-thunk';

import UserReducer from '../Reducers/User'

export let initStore = () => {

  const reducer = combineReducers({
    user: UserReducer

  });

  const store = createStore( reducer,     // passing all reducer-- each reducer creates as an array inside this.props
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f is just a way to do nothing
  ) )

  return store;
}
