import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import LogIn from '../LogIn/LogIn';

class EmailTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteFrom: '',
      inviteSubject: '',
      eventName: '',
      inviteDescription: ''
    }
  }

  isLoggedInEmailTemplate = () => {
    if(this.props.user.hasOwnProperty('_id')){
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1>Invite</h1>
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Invite From:</label>
              <input type="text"
                     className="form-control"
                     id="inviteFromEmailTemplate"
                     placeholder="Please input email you would like guests to receive from"
                     defaultValue={this.state.from}
                     onChange={this.onChange}
                     name="inviteFrom"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Invite Subject</label>
              <input type="text"
                     className="form-control"
                     id="inviteSubjectEmailTemplate"
                     placeholder="Please input email subject you would like guests to see"
                     defaultValue={this.state.subject}
                     onChange={this.onChange}
                     name="inviteSubject"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Event Name</label>
              <input type="text"
                     className="form-control"
                     id="eventNameEmailTemplate"
                     placeholder=""
                     defaultValue={this.state.eventName}
                     onChange={this.onChange}
                     name="lastName"/>
            </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Event Description</label>
                <input type="email"
                       className="form-control"
                       id="eventDescriptionEmailTemplate"
                       placeholder=""
                       defaultValue={this.state.inviteDescription}
                       onChange={this.onChange}
                       name="email"/>
              </div>
              <button className="uk-button uk-button-primary"
                      id="updateAccountDetailsBtn" onClick=''>Save and Update Invite Template</button>
              <button className="uk-button uk-button-danger"
                      id="updateAccountDetailsBtn" onClick=''>Delete Invite Template</button>
              <hr />
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

  render() {
    return (
      <div>
      {this.isLoggedInEmailTemplate()}
      </div>
    );
  }
}

EmailTemplate.propTypes = {
};

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
export default connect(mapStateToProps, mapDispatchToProps)(EmailTemplate);
