import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux'

import Home from '../Home/Home'
import LogIn from '../LogIn/LogIn'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LogIn}/>


        </Switch>
      </Router>
    );
  }
}

export default App;
