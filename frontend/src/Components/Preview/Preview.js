import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'progressbar.js'
import {Link} from 'react-router-dom'

import { activeEvent, deleteEvent, updateEvent} from '../../Actions/Event';
import {storeLiveEventDetails} from '../../Actions/LiveRegistration'
import {updateNavPath} from '../../Actions/Navigation'
import Loading from '../LoadingPage/LoadingPage'
import './Preview.css';

// import { Button, Modal } from 'semantic-ui-react'
import Button from 'react-uikit-notify';



class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

      currentNav: this.props.navigation,
    }
  }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })



  onDelete= () => {
    console.log('delete pressed')
    this.props.deleteEvent(this.props.events)

  }

componentWillMount() {

}

  componentDidMount(){
    let events = this.props.events
    // if(events.guests.length !== 0){
    //   var bar = new ProgressBar.SemiCircle('#progress-bar', {
    //     strokeWidth: 6,
    //     color: '#FFEA82',
    //     trailColor: '#eee',
    //     trailWidth: 1,
    //     easing: 'easeInOut',
    //     duration: 6000,
    //     svgStyle: null,
    //     text: {
    //       value: '',
    //       alignToBottom: false
    //     },
    //     from: {color: '#FFEA82'},
    //     to: {color: '#ED6A5A'},
    //     // Set default step function for all animate calls
    //     step: (state, bar) => {
    //       bar.path.setAttribute('stroke', state.color);
    //       var value = Math.round(bar.value() * 100);
    //       if (value === 0) {
    //         bar.setText('');
    //       } else {
    //         bar.setText(value);
    //       }
    //
    //       bar.text.style.color = state.color;
    //     }
    //   });
    //   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    //   bar.text.style.fontSize = '2rem';
    //
    //   bar.animate(1.0);
    // }




  }
/*{this.props.response === "success" ? renderNotifyCreateSuccess : (<div>Not success</div>)}
*/


onLive = (e) => {
  this.setState({currentNav: e.target.id});
  this.props.updateNavPath(e.target.id);
  this.props.storeLiveEventDetails(this.props.events)

}

// onClick, updateNavPath is fired in the actions to send to reducer, to be exported as props for conditional rendering
onClick = (e) => {
  // const state = this.state;
  console.log('clicked on: ', e.target.id)
  this.setState({currentNav: e.target.id});
  //console.log('new component state', this.state)
  this.props.updateNavPath(e.target.id);
  //console.log('curretNav state: ', this.state.currentNav)
}

onEdit = (e) => {
  console.log('clicked on: ', e.target.id)
  this.setState({currentNav: e.target.id});
  this.props.updateNavPath(e.target.id);
}


  render() {

    // const { open, size } = this.state
    let events = this.props.events

    const renderNotifyCreateSuccess = () => {
      return (<div className="col-sm-12">
        <div className="success-alert">
          <strong>Success!</strong> Event Created
        </div>
      </div>)
    }

    const renderNotifyDeleteSuccess = () => {
      return (<div className="col-sm-12">
        <div className="success-alert">
          <strong>Success!</strong> Event Deleted
        </div>
      </div>)
    }


    return (

      <div className="container-fluid previewContainer">

        {this.props.response.createEvent === "success" ? renderNotifyCreateSuccess() : (<div></div>)}


      <div className="row">

        <div className="card eventCoverCard">
          <div className="card-header">
            <p id="eventCoverCardHeader"><i className="fa fa-picture-o fa-lg previewIcons" aria-hidden="true"/> {events.eventName}</p>
          </div>
          <div className="card-block">
            <img src={events.eventImage} id="previewImg"/>
          </div>

        </div>

        <div className="card eventActions">
          <div className="card-header">
          <p id="eventActionsHeader">ACTIONS</p>
          </div>
        <ul className="list-group">
          <a><li className="list-group-item" id="goLive" onClick={this.onLive}>GO LIVE!</li></a>
          <a><li className="list-group-item" id="addGuest" onClick={this.onClick}>Manage Guests</li></a>
          <a><li className="list-group-item" id="manageInvite" onClick={this.onClick}>Manage Invitation</li></a>
          <a><li className="list-group-item" id="updateEvent" onClick={this.onEdit}>Edit Event</li></a>
          <a><li className="list-group-item" onClick={this.onDelete}>Delete</li></a>
          <a><li className="list-group-item" id="previewBackToDashboard" onClick={this.onClick}>Back to Dashboard</li></a>
        </ul>
      </div>


      {this.props.response.deleteEvent === "success" ? renderNotifyDeleteSuccess() : (<div></div>)}

            <button type="button"
                    className="btn-custom"
                    id="addGuest"
                    onClick={this.onClick}>Manage Guest and Collaborators</button>

      </div>

      <div className="row">

      <div className="card eventDetailsCard">
        <div className="card-header">
          <p id="eventDetailsHeader"><i className="fa fa-picture-o fa-lg previewIcons" aria-hidden="true"/> DETAILS</p>
        </div>
        <div className="card-block">
          <p><strong>Location:</strong> {events.location}</p>
          <p><strong>Start Date:</strong> {events.startDate}</p>
          <p><strong>End Date:</strong> {events.endDate}</p>
          <p><strong>Time Start:</strong> {events.timeStart}</p>
          <p><strong>Time End:</strong> {events.timeEnd}</p>
        </div>
      </div>

      <div className="card eventDescriptionCard">
        <div className="card-header">
          <p id="eventDescriptionHeader"><i className="fa fa-picture-o fa-lg previewIcons" aria-hidden="true"/> DESCRIPTION</p>
        </div>
        <div className="card-block">
          <p><strong>Description:</strong> {events.description}</p>
        </div>
      </div>

      </div>

       </div>

     );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.active,
    response: state.responseAJAX,
    navigation: state.navigation,
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    activeEvent: (event) => {dispatch(activeEvent(event))},
    deleteEvent: (event) => {dispatch(deleteEvent(event))},
    updateEvent: (event) => {dispatch(updateEvent(event))},

    storeLiveEventDetails:(event) => {dispatch(storeLiveEventDetails(event))},
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);

// <div className ='card'>
//    </div>

// <Link to="/guest">
// </Link>

// <Link to="/invitetemplate">
// </Link>

// <Link to="/updateEvent">
// </Link>

// <Link to="/LiveRegistration">
// </Link>
