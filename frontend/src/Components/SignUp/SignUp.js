import React, {PropTypes} from 'react';

import axios from 'axios';
import happy from '../LogIn/happy-face.jpeg'
import './SignUp.css';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      error: ""
    };
  }

  onChange = (e) => {
    var state = this.state
    var key = e.target.id;
    var value = e.target.value;

    state[key] = value;
    console.log(state);
    this.setState(state);
  }

  localSignup = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', this.state).then((response) => {

      let data = response.data;
      if (data.error) {
        console.log(data.message)
        this.setState({error: data.message});
      } else {
        console.log("AJAX: Signed up @ '/auth/signup'");
        window.location.href = "/login"
      }
    }).catch((error) => {
      console.error("AJAX: Could not signup @ '/auth/signup'", error)
      this.setState({error: "Notify the dev team!"});
    });
  }

  backToLogin = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  }

  backToHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  }

  render() {
    return (
      <div className="container-signup">
        <h1 className="brand-title-auth">Listtr</h1>
        <div className="col-md-4 col-md-offset-4 form-container">
          <div className="panel panel-primary" id="signupContainer">
            <h4 className="panel-heading" id="formHeader">SIGNUP</h4>

            <form id="signupForm" role="form">

              <div className="error">{this.state.error}</div>

              <label htmlFor="username">Username</label>
              <input type="email" className="text-input-line" id="username" placeholder="Please enter username" value={this.state.username} onChange={this.onChange}/>

              <label htmlFor="email">Email address</label>
              <input type="email" className="text-input-line" id="email" placeholder="Please enter email" value={this.state.email} onChange={this.onChange}/>

              <label htmlFor="password">Password</label>
              <input type="password" className="text-input-line" id="password" placeholder="Please enter password" value={this.state.password} onChange={this.onChange}/>

              <br/>
              <button type="submit" className="uk-button uk-button-default login-button-green login-button-default" id="signupBtn" onClick={this.localSignup}>Sign me up!</button>

              <button type="submit" className="uk-button uk-button-default login-button-default" id="loginBtn" onClick={this.backToLogin}>Back to Login</button>

              <button type="submit" className="uk-button uk-button-default login-button-default" id="homeBtn" onClick={this.backToHome}>Back To Home</button>
            </form>
          </div>
        </div>
        <div className="happy-face-picture-signup"><img className="happy-face-picture-signup" src={happy}/></div>
      </div>
    );
  }
}

SignUp.propTypes = {};
