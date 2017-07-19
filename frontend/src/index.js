import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import { getUser} from './Actions/User';

import { Provider } from 'react-redux';   // yarn add react-redux
import { initStore } from './Store/Store';

const store = initStore();
// store.dispatch(getUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
