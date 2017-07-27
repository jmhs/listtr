import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { activeEvent } from '../../Actions/Event';
import axios from 'axios';

import LogIn from '../LogIn/LogIn';

class InviteTemplate extends React.Component {
  constructor(props) {
    super(props);

    // UPDATE THESE STATES WITH CURRENT EVENTID KEYS
    this.state = {
      inviteFrom: '',
      inviteSubject: '', // 'You are invited to ' + this.props.events.eventName
      inviteName: '', //this.props.events.eventName
      inviteDescription: '', //this.props.events.description
      isOpen: false
    }
    console.log(this.props.events)
  }

  onChange = (e) => {
    // console.log(e.target.value)
    switch (e.target.name) {
      case 'inviteFrom':
        this.setState({
          inviteFrom: e.target.value
        })
        // console.log('updating inviteFrom: ', e.target.value)
        break;
      case 'inviteSubject':
        this.setState({
          inviteSubject: e.target.value
        })
        // console.log('updating inviteSubject: ', e.target.value)
        break;
      case 'inviteName':
        this.setState({
          inviteName: e.target.value
        })
        // console.log('updating eventName: ', e.target.value)
        break;
      case 'inviteDescription':
        this.setState({
          inviteDescription: e.target.value
        })
        // console.log('updating inviteDescription: ', e.target.value)
        break;

      default:
    }
  }

  saveAndSendInvite = (e) => {
    e.preventDefault();
    console.log("saveAndUpdateInvite clicked!");
    const inviteFromUpdate = this.state.inviteFrom;
    const inviteSubjectUpdate = this.state.inviteSubject;
    const inviteNameUpdate = this.state.inviteName;
    const inviteDescriptionUpdate = this.state.inviteDescription;
    // axios.put('/auth/account/profile', {
    //   inviteFrom: inviteFromUpdate,
    //   inviteSubject: inviteSubjectUpdate,
    //   inviteName: inviteNameUpdate,
    //   inviteDescription: inviteDescriptionUpdate
    // })
    // .then( (response) => {
    //   console.log(response);
    //   console.log("AJAX: Updated @ '/auth/account/profile'");
    //   window.location.href = "/dashboard";
    // })
    // .catch((error)=> {
    //   console.log(error);
    // });
  }

// function to check if user is loggedin before accessing inviteTemplate page. if user not loggedin, redirect to '/login'
// function also renders different invite template depending on whether its a new or existing invitation
  isLoggedInInviteTemplate = () => {

    if(this.props.user.hasOwnProperty('_id')){
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h1>Update Invite</h1>
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Invite From:</label>
                <input type="text"
                       className="form-control"
                       id="inviteFromInviteTemplate"
                       placeholder="Please input email you would like guests to receive from"
                       defaultValue=""
                       onChange={this.onChange}
                       name="inviteFrom"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Invite Subject</label>
                <input type="text"
                       className="form-control"
                       id="inviteSubjectInviteTemplate"
                       placeholder="Please input email subject you would like guests to see"
                       defaultValue={this.props.events.eventName}
                       onChange={this.onChange}
                       name="inviteSubject"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event Name</label>
                <input type="text"
                       className="form-control"
                       id="eventNameInviteTemplate"
                       placeholder=""
                       defaultValue={this.props.events.eventName}
                       onChange={this.onChange}
                       name="inviteName"/>
              </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Invite Description</label>
                  <input type="email"
                         className="form-control"
                         id="inviteDescriptionInviteTemplate"
                         placeholder=""
                         defaultValue={this.props.events.description}
                         onChange={this.onChange}
                         name="inviteDescription"/>
                </div>
                <button className="uk-button uk-button-default"
                        id="inviteTemplatePreviewBtn" onClick=''>Preview</button>
                <button className="uk-button uk-button-default"
                        id="inviteTemplateBackToEventBtn" onClick=''>Back to Event</button>
                <hr/>
                <button className="uk-button uk-button-primary"
                        id="updateAccountDetailsBtn" onClick={this.saveAndSendInvite}>Save and Send Invitation</button>
                <button className="uk-button uk-button-danger"
                        id="updateAccountDetailsBtn" onClick=''>Delete Invite</button>
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
      {this.isLoggedInInviteTemplate()}
      </div>
    );
  }
}

InviteTemplate.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
    events: state.active,
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InviteTemplate);
