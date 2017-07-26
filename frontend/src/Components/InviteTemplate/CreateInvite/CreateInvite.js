import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import LogIn from '../../LogIn/LogIn';

class CreateInvite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteFrom: '',
      inviteSubject: '',
      inviteName: '',
      inviteDescription: ''
    }
  }

    onChange = (e) => {
      // console.log(e.target.value)
      switch (e.target.name) {
        case 'inviteFrom':
          this.setState({inviteFrom: e.target.value})
          // console.log('updating inviteFrom: ', e.target.value)
          break;
        case 'inviteSubject':
          this.setState({inviteSubject: e.target.value})
          // console.log('updating inviteSubject: ', e.target.value)
          break;
        case 'inviteName':
          this.setState({inviteName: e.target.value})
          // console.log('updating eventName: ', e.target.value)
          break;
        case 'inviteDescription':
          this.setState({inviteDescription: e.target.value})
          // console.log('updating inviteDescription: ', e.target.value)
          break;

        default:
      }
    }

    createInvite = (e) => {
      this.props.postInvite(this.state)
    }
      // e.preventDefault();
      // console.log("createInvite clicked!");
      // const inviteFrom = this.state.inviteFrom;
      // const inviteSubject = this.state.inviteSubject;
      // const inviteName = this.state.inviteName;
      // const inviteDescription = this.state.inviteDescription;
      // axios.post('/auth/account/profile', {
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
    // }

    isLoggedInCreateInvite = () => {
      if (this.props.event.hasOwnProperty('_id')) {
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h1>Create Invite</h1>
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Invite From:</label>
                  <input type="text" className="form-control" id="inviteFromInviteTemplate" placeholder="Please input email you would like guests to receive from" defaultValue={this.state.from} onChange={this.onChange} name="inviteFrom"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Invite Subject</label>
                  <input type="text" className="form-control" id="inviteSubjectInviteTemplate" placeholder="Please input email subject you would like guests to see" defaultValue={this.state.subject} onChange={this.onChange} name="inviteSubject"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Event Name</label>
                  <input type="text" className="form-control" id="eventNameInviteTemplate" placeholder="" defaultValue={this.state.inviteName} onChange={this.onChange} name="inviteName"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Invite Description</label>
                  <input type="email" className="form-control" id="inviteDescriptionInviteTemplate" placeholder="" defaultValue={this.state.inviteDescription} onChange={this.onChange} name="inviteDescription"/>
                </div>
                <button className="uk-button uk-button-default" id="inviteTemplatePreviewBtn" onClick=''>Preview</button>
                <button className="uk-button uk-button-default" id="inviteTemplateBackToEventBtn" onClick=''>Back to Event</button>
                <hr/>
                <button className="uk-button uk-button-primary" id="updateAccountDetailsBtn" onClick={this.createInvite}>Create Invitation</button>
                <hr/>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <LogIn/>
          </div>
        )
      }
    }

    render() {
      return (
        <div>{this.isLoggedInCreateInvite()}</div>
      );
    }
  }

  CreateInvite.propTypes = {};

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
  export default connect(mapStateToProps, mapDispatchToProps)(CreateInvite);
