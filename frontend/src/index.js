import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { getUser} from './Actions/User';
import { getEvents} from './Actions/Event';
import { Provider } from 'react-redux';   // yarn add react-redux
import { initStore } from './Store/Store';

const storeAndHistory = initStore()
export const store = storeAndHistory[0];
export const history = storeAndHistory[1];

// const store = initStore();
store.dispatch(getUser());
store.dispatch(getEvents());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
