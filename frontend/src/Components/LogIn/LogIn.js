import React, {PropTypes} from 'react';

import { connect } from 'react-redux';

import { getUser, localLogin} from '../../Actions/User';
import happy from './happy-face.jpeg'
import {Link} from 'react-router-dom';
// import Chat from '../Chat/Chat';

import axios from 'axios';

import './LogIn.css';

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  onChange = (e) => {
    var state = this.state
    var key = e.target.id;
    var value = e.target.value;

    state[key] = value;
    console.log(state);
    //console.log(typeof(this.state.latitude));
    this.setState(state);
  }

  localLogin = (e) => {
    e.preventDefault();
    var state = this.state
    // this.props.localLogin(this.state);
    axios.post('/auth/login', this.state).then((response) => {
      let data = response.data;
      if (data.error) {
        console.log(data.message)
      } else {
        console.log("AJAX: Logged in @ '/auth/user'");
        // this.props.updateUser(data)
        this.props.getUser()
      }
    })
    .then(()=> {window.location.href = '/dashboard'})
    .catch((error) => {
      console.error("AJAX: Could not login @ '/auth/login'")
      this.setState({error: "Login error, notify the dev team!"});
    });
  }

  signUp = (e) => {
    e.preventDefault();
    window.location.href = "/signup";
  }

  backToHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  }

  // linkedinLogin = (e) => {
  //   e.preventDefault();
  //   window.location.href = "/auth/linkedin";
  // }

  render() {
      return (
        <div className="container-login">
          <h1 className="brand-title-auth">Listtr</h1>
          <div className="col-md-4 col-md-offset-4 form-container">
            <div className="panel panel-primary" id="loginContainer">
              <h4 className="panel-heading" id="formHeader">LOGIN</h4>
              <form id="loginForm" role="form">

                <div className="error">{this.state.error}</div>

                <label htmlFor="email">Email address</label>
                <input type="email" className="text-input-line" id="email" placeholder="Please enter email" value={this.state.email} onChange={this.onChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" className="text-input-line" id="password" placeholder="Please enter password" value={this.state.password} onChange={this.onChange}/>

                <br />

                <button type="submit" className="uk-button uk-button-default login-button-green login-button-default" id="loginBtnl" onClick={this.localLogin}>{'Login'}</button>

                <button type="submit" className="uk-button uk-button-default login-button-default" id="signupBtnl" onClick={this.signUp}>Sign up here!</button>

                <button type="submit" className="uk-button uk-button-default login-button-default" id="homeBtnl" onClick={this.backToHome}>{'Back to home'}</button>


              </form>
            </div>
          </div>
          <div className="happy-face-picture">
          <img className="happy-face-picture" src={happy}/>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {dispatch(getUser())},
    //updateUser: (user) => {dispatch(updateUser(user))},
    localLogin: (credentials) => {dispatch(localLogin(credentials))},
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

// <div className="or">or</div>
// <button type="submit" className="btn btn-primary linkedin" onClick={this.linkedinLogin}>Login with Linkedin</button>
