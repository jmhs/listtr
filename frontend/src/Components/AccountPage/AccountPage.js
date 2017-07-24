import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

import { getUser} from '../../Actions/User';


class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

  isLoggedIn = () => {
    if(this.props.user.hasOwnProperty('_id')){
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1>Account Page</h1>
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
                     defaultValue={this.props.username}
                     onChange={this.onChange}
                     name="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">First Name</label>
              <input type="text"
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="First Name"
                     defaultValue={this.props.firstName}
                     name="firstName"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Last Name</label>
              <input type="text"
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="Last Name"
                     defaultValue={this.props.lastName}
                     name="lastName"/>
            </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                       className="form-control"
                       id="exampleInputEmail1"
                       placeholder="Email"
                       defaultValue={this.props.user.email}
                       name="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"
                       className="form-control"
                       id="exampleInputPassword1"
                       placeholder="Password"
                       name="password"/>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(<div>please login</div>)
    }
  }

  onChange = (e) => {
    console.log(e.target.value)
    switch (e.target.name) {
      case 'username':
        this.setState({
          username: e.target.value
        })
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

  render() {
    return(
      <div>
        {this.isLoggedIn()}
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
    // getUser: () => {dispatch(getUser())},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
