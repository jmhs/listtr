import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import { getUser} from '../../Actions/User';

import LogIn from '../LogIn/LogIn';

import './AccountPage.css'

class AccountPage extends React.Component {
  constructor(props) {
    super(props);

// initial state is based on initial user details
    this.state = {
      username: this.props.user.username,
      firstName: this.props.user.firstName,
      lastName:  this.props.user.lastName,
      email:  this.props.user.email,
      password: this.props.user.password
    }
  }

// setting new state as user types in new information in form fields
  onChange = (e) => {
    switch (e.target.name) {
      case 'username':
        this.setState({
          username: e.target.value
        })
        console.log(e.target.value)
        break;
      case 'firstName':
        this.setState({
          firstName: e.target.value
        })
        break;
      case 'lastName':
        this.setState({
          lastName: e.target.value
        })
        break;
      case 'email':
        this.setState({
          email: e.target.value
        })
        break;
      case 'password':
        this.setState({
          password: e.target.value
        })
        break;

      default:
    }
  }

// update profile based on new state of username, firstname, lastname and email
  updateProfile = (e) => {
    e.preventDefault();
    console.log("updateAccountDetails clicked!");
    const usernameUpdate = this.state.username;
    const firstNameUpdate = this.state.firstName;
    const lastNameUpdate = this.state.lastName;
    const emailUpdate = this.state.email;
    console.log("username update: ", usernameUpdate);
    console.log("firstName update: ", firstNameUpdate);
    console.log("lastName update: ", lastNameUpdate);
    console.log("email update: ", emailUpdate);
    axios.put('/auth/account/profile', {
      username: usernameUpdate,
      firstName: firstNameUpdate,
      lastName: lastNameUpdate,
      email: emailUpdate
    })
    .then( (response) => {
      console.log(response);
      console.log("AJAX: Updated @ '/auth/account/profile'");
      window.location.href = "/dashboard";
    })
    .catch((error)=> {
      console.log(error);
    });
  }

// update profile based on new state of password
  updatePassword = (e) => {
    e.preventDefault();
    console.log("updatePassword clicked!");
    const data = this.state.password;
    console.log("password update: ", data);
    axios.put('/auth/account/password', {
      password: data
    })
    .then( (response) => {
      console.log(response);
      console.log("AJAX: Updated @ '/auth/account/password'");
      window.location.href = "/account";
    })
    .catch((error)=> {
      console.log(error);
    });
  }

// deleting account, after deleting, redirects to homepage '/'
  deleteAccount = (e) =>  {
    e.preventDefault();
    console.log("deleteAccount clicked!");
    axios.delete('/auth/account/delete')
    .then( (response) => {
      console.log("AJAX: Deleted @ '/auth/account/delete'");
      window.location.href = "/";
    })
    .catch((error)=> {
      console.log(error);
    });
  }

// function to check if user is loggedin before accessing account page. if user not loggedin, redirect to '/login'
  isLoggedInAccount = () => {
    if(this.props.user.hasOwnProperty('_id')){
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1>Account Details</h1>
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Username</label>
              <input type="text"
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="Username"
                     defaultValue={this.props.user.username}
                     onChange={this.onChange}
                     name="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">First Name</label>
              <input type="text"
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="First Name"
                     defaultValue={this.props.user.firstName}
                     onChange={this.onChange}
                     name="firstName"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Last Name</label>
              <input type="text"
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="Last Name"
                     defaultValue={this.props.user.lastName}
                     onChange={this.onChange}
                     name="lastName"/>
            </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                       className="form-control"
                       id="exampleInputEmail1"
                       placeholder="Email"
                       defaultValue={this.props.user.email}
                       onChange={this.onChange}
                       name="email"/>
              </div>
              <button className="uk-button uk-button-primary"
                      id="updateAccountDetailsBtn" onClick={this.updateProfile}>Update Account Details</button>
              <hr />
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"
                       className="form-control"
                       id="exampleInputPassword1"
                       placeholder="Password"
                       onChange={this.onChange}
                       name="password"/>
              </div>
              <button className="uk-button uk-button-primary"
                       id="updatePasswordBtn" onClick={this.updatePassword}>Update Password</button>
              <button className="uk-button uk-button-danger"
                       id="deleteAccountBtn" onClick={this.deleteAccount}>Delete Account</button>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div>
        <LogIn />
        </div>
      )
    }
  }

// render component depending if user is loggedin. refer to above function.
  render() {
    return(
      <div>
        {this.isLoggedInAccount()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
