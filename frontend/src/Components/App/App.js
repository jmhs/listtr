import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux'

import Home from '../Home/Home'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import EventDisplay from '../EventDisplay/EventDisplay'
import CreateEvent from '../CreateEvent/CreateEvent'
import PopulateGuests from '../PopulateGuests/PopulateGuests'
import Dashboard from '../Dashboard/Dashboard'
import AccountPage from '../AccountPage/AccountPage'
import MainContent from '../Dashboard/MainContent/MainContent'
import Form from '../Form/Form'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/form" component={Form}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/eventdisplay" component={EventDisplay}/>
          <Route exact path="/CreateEvent" component={CreateEvent}/>
          <Route exact path="/Guests" component={PopulateGuests}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/account" component={AccountPage}/>
          <Route exact path="/maincontent" component={MainContent}/>


        </Switch>
      </Router>
    );
  }
}

export default App;
