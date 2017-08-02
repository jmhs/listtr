import { createStore, compose, combineReducers, applyMiddleware } from 'redux'; // compose is used

import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory  from 'history/createBrowserHistory';

import thunk from 'redux-thunk';

import UserReducer from '../Reducers/User'

import Events from '../Reducers/Event'
import ResponseAJAX from '../Reducers/ResponseAJAX'
import NavigationReducer from '../Reducers/Navigation'

import Active from '../Reducers/Active'

import Invites from '../Reducers/Invite'

import ResponseActive from '../Reducers/Response'

import LiveRegistration from '../Reducers/LiveRegistration'



export let initStore = () => {
  const history = createHistory()
  const historyWare = routerMiddleware(history);
  const reducer = combineReducers({
    user: UserReducer,
    events: Events,
    navigation: NavigationReducer,
    active: Active,
    invites: Invites,

    response: ResponseActive,
    LiveRegistration: LiveRegistration,
    responseAJAX: ResponseAJAX,

    router: routerReducer


  });

  const store = createStore( reducer,     // passing all reducer-- each reducer creates as an array inside this.props


    compose(applyMiddleware(thunk, historyWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f is just a way to do nothing
  ) )

  return [store,history];
}
