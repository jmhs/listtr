import React, {PropTypes} from 'react';

import { connect } from 'react-redux';

import { getUser, updateUser } from '../../Actions/User';

import axios from 'axios';

import './LogIn.css';

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    console.log(typeof(this.state.latitude));
    this.setState(state);
  }

  localLogin = (e) => {
    e.preventDefault();

    var state = this.state

    axios.post('/auth/login', this.state).then((response) => {
      let data = response.data;
      if (data.error) {
        console.log(data.message)
      } else {
        console.error("AJAX: Logged in @ '/auth/user'");
        this.props.updateUser(data)
       this.props.getUser()
      }
    }).catch((error) => {
      console.error("AJAX: Could not login @ '/auth/login'")
      this.setState({error: "Login error, notify the dev team!"});
    });
  }

  signUp = (e) => {
    e.preventDefault();
    this.props.history.push("/signup");
  }

  backToHome = (e) => {
    e.preventDefault();
    this.props.history.push('/')
  }

  // linkedinLogin = (e) => {
  //   e.preventDefault();
  //   window.location.href = "/auth/linkedin";
  // }

  render() {
      return (
        <div className="container">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-primary" id="loginContainer">
              <div className="panel-heading" id="formHeader">LOGIN</div>
              <form id="loginForm" role="form">
                <div className="error">{this.state.error}</div>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Please enter email" value={this.state.email} onChange={this.onChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Please enter password" value={this.state.password} onChange={this.onChange}/>
                <br />
                <button type="submit" className="btn btn-primary submit" id="loginBtnl" onClick={this.localLogin}>Login</button>
                <button type="submit" className="btn btn-default submit" id="signupBtnl" onClick={this.signUp}>Don't have an account yet? Sign up here!</button>
                <button type="submit" className="btn btn-default submit" id="homeBtnl" onClick={this.backToHome}>Back to home</button>
              </form>
            </div>
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
    updateUser: (user) => {dispatch(updateUser(user))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

// <div className="or">or</div>
// <button type="submit" className="btn btn-primary linkedin" onClick={this.linkedinLogin}>Login with Linkedin</button>
