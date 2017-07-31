import { createStore, compose, combineReducers, applyMiddleware } from 'redux'; // compose is used

import thunk from 'redux-thunk';

import UserReducer from '../Reducers/User'

import Events from '../Reducers/Event'

import NavigationReducer from '../Reducers/Navigation'

import Active from '../Reducers/Active'

import Invites from '../Reducers/Invite'

import LiveRegistration from '../Reducers/LiveRegistration'

export let initStore = () => {

  const reducer = combineReducers({
    user: UserReducer,
    events: Events,
    navigation: NavigationReducer,
    active: Active,
    invites: Invites,
    LiveRegistration: LiveRegistration

  });

  const store = createStore( reducer,     // passing all reducer-- each reducer creates as an array inside this.props
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f is just a way to do nothing
  ) )

  return store;
}
