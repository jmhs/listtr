import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { activeEvent } from '../../Actions/Event';
import { postInvite, handleEmail } from '../../Actions/Invite';
import {updateNavPath} from '../../Actions/Navigation'
import axios from 'axios';

import LogIn from '../LogIn/LogIn';
import InvitePreview from './InvitePreview/InvitePreview';

/**
* Import CSS styles for the Invite template
*/
import './InviteTemplate.css'

class InviteTemplate extends React.Component {
  constructor(props) {
    super(props);

    // INITIAL state is props of event clicked
    this.state = {
      inviteEventImage: this.props.events.eventImage,
      inviteName: this.props.events.eventName,
      inviteStartDate: this.props.events.startDate,
      inviteEndDate: this.props.events.endDate,
      inviteTimeStart: this.props.events.timeStart,
      inviteTimeEnd: this.props.events.timeEnd,
      inviteDressCode: this.props.events.dressCode,
      inviteLocation: this.props.events.location,
      inviteSubject: this.props.events.eventName,
      inviteDescription: this.props.events.description,

      // invitePreviewIsOpen: false
    }
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'inviteName':
        this.setState({
          inviteName: e.target.value
        })
        // console.log('updating inviteName: ', e.target.value)
        break;
      case 'inviteStartDate':
        this.setState({
          inviteStartDate: e.target.value
        })
        // console.log('updating inviteStartDate: ', e.target.value)
        break;
      case 'inviteEndDate':
        this.setState({
          inviteEndDate: e.target.value
        })
        // console.log('updating inviteEndDate: ', e.target.value)
        break;
      case 'inviteTimeStart':
        this.setState({
          inviteTimeStart: e.target.value
        })
        // console.log('updating inviteTimeStart: ', e.target.value)
        break;
      case 'inviteTimeEnd':
        this.setState({
          inviteTimeEnd: e.target.value
        })
        // console.log('updating inviteTimeEnd: ', e.target.value)
        break;
      case 'inviteDressCode':
        this.setState({
          inviteDressCode: e.target.value
        })
        // console.log('updating eventDressCode: ', e.target.value)
        break;
      case 'inviteLocation':
        this.setState({
          inviteLocation: e.target.value
        })
        // console.log('updating eventLocation: ', e.target.value)
        break;
      case 'inviteSubject':
        this.setState({
          inviteSubject: e.target.value
        })
        // console.log('updating inviteSubject: ', e.target.value)
        break;
      case 'inviteDescription':
        this.setState({
          inviteDescription: e.target.value
        })
        // console.log('updating inviteDescription: ', e.target.value)
        break;

        // TO DELETE, testing for emails
        case 'getEventGuestEmails':
          this.setState({
            getEventGuestEmails: e.target.value
          })
          // console.log('updating inviteDescription: ', e.target.value)
          break;

      default:
    }
  }

// To save and update invitation in the backend
  saveInvite = (e) => {
    e.preventDefault();
    console.log("Save Invite Clicked!");
    this.props.postInvite(this.props.events._id, this.state)
    console.log(this.state)
  }

  // To send email
  emailSend = (e) => {
    e.preventDefault();
    console.log("clicked send email!");
    this.props.postEmail(this.props.events._id, this.state);
  }

  // To POST GUEST EMAILS
  handleEmail = (e) => {
    e.preventDefault();
    console.log("clicked sendGuestEmails!");
    this.props.handleEmail(this.props.events._id, this.state);
    console.log("dispatching to action... handleEmail");
  }

  onClick = (e) => {
    console.log('clicked on: ', e.target.id);
    this.setState({currentNav: e.target.id});
    this.props.updateNavPath(e.target.id);
  }


// function to check if user is loggedin before accessing inviteTemplate page. if user not loggedin, redirect to '/login'
// function also renders different invite template depending on whether its a new or existing invitation
  isLoggedInInviteTemplate = () => {
    let hasInvite = this.props.events.invites._id
    if(this.props.user.hasOwnProperty('_id')){

        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h1>Manage Invitation</h1>
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
              <div className="eventImage">
                <label htmlFor="exampleInputPassword1">Event Cover</label>
                <img src={this.state.inviteEventImage}/>
                <input type="text"
                       className="form-control"
                       id="inviteEventImage"
                       placeholder="Input Invitation subject"
                       defaultValue={this.state.inviteEventImage}
                       name="inviteImage"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event Name</label>
                <input type="text"
                       className="form-control"
                       id="eventNameInviteTemplate"
                       placeholder="Input Event Name"
                       defaultValue={this.state.inviteName}
                       onChange={this.onChange}
                       name="inviteName"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event Start Date</label>
                <input type="text"
                       className="form-control"
                       id="inviteStartDate"
                       placeholder="Input Event Start Date"
                       defaultValue={this.state.inviteStartDate}
                       onChange={this.onChange}
                       name="inviteStart"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event End Date</label>
                <input type="text"
                       className="form-control"
                       id="inviteEndDate"
                       placeholder="Input Event End Date"
                       defaultValue={this.state.inviteEndDate}
                       onChange={this.onChange}
                       name="inviteEndDate"/>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event Start Time</label>
                <input type="text"
                       className="form-control"
                       id="inviteStartTime"
                       placeholder="Input Event Start Time"
                       defaultValue={this.state.inviteTimeStart}
                       onChange={this.onChange}
                       name="inviteStartTime"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event End Time</label>
                <input type="text"
                       className="form-control"
                       id="inviteEndTime"
                       placeholder="Input Event End Time"
                       defaultValue={this.state.inviteTimeEnd}
                       onChange={this.onChange}
                       name="inviteEndTime"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Location</label>
                <input type="text"
                       className="form-control"
                       id="inviteLocation"
                       placeholder="Input Event Location"
                       defaultValue={this.state.inviteLocation}
                       onChange={this.onChange}
                       name="inviteLocation"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Dress Code</label>
                <input type="text"
                       className="form-control"
                       id="inviteDressCode"
                       placeholder="Input Event Dress Code"
                       defaultValue={this.state.inviteDressCode}
                       onChange={this.onChange}
                       name="inviteDressCode"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Invitation Subject</label>
                <input type="text"
                       className="form-control"
                       id="inviteSubjectInviteTemplate"
                       placeholder="Input Email Invitation Subject "
                       defaultValue={this.state.inviteSubject}
                       onChange={this.onChange}
                       name="inviteSubject"/>
              </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Invite Description</label>
                  <input type="text"
                         className="form-control"
                         id="inviteDescriptionInviteTemplate"
                         placeholder="Input Event Description"
                         defaultValue={this.state.inviteDescription}
                         onChange={this.onChange}
                         name="inviteDescription"/>
                </div>

                <button className="uk-button uk-button-default"
                        id="inviteTemplateBackToEventBtn" onClick={this.onClick}>Back to Event Preview</button>

                <hr/>
                <button className="uk-button uk-button-primary"
                        id="saveInviteBtn" onClick={this.saveInvite}>Create Invite</button>

                <hr />

                    <button className="uk-button uk-button-primary"
                            id="sendGuestEmailsBtn" onClick={this.handleEmail}>Send Guest Invitations</button>

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
    events: state.active,
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    postInvite: (active_id, invite) => {dispatch(postInvite(active_id, invite))},
    handleEmail: (active_id, event) => {dispatch(handleEmail(active_id, event))},
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InviteTemplate);

// <Link to="/preview">
// </Link>

// {hasInvite
//   ? (  )
//       : (<hr/>)
//   }


// <button className="uk-button uk-button-danger"
//         id="updateAccountDetailsBtn" onClick=''>Delete Invite</button>

// <Link to="/invitepreview">
// <button className="uk-button uk-button-default"
//         id="invitePreviewBtn" onClick={this.invitePreview}>Update and Preview Invitation</button>
//         </Link>
