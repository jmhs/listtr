import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

import { getUser} from '../../Actions/User';


class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   user: this.props.user
    // }
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
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Username" value={this.props.username}/>
            </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" value={this.props.user.email}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(<div>please login</div>)
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
