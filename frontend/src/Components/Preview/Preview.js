import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'progressbar.js'
import {Link} from 'react-router-dom'

import { activeEvent, deleteEvent, updateEvent} from '../../Actions/Event';
import {storeLiveEventDetails} from '../../Actions/LiveRegistration'
import {updateNavPath} from '../../Actions/Navigation'
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


onLive = () => {
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

      <div className ='card'>

        {this.props.response.createEvent === "success" ? renderNotifyCreateSuccess() : (<div></div>)}

        <a href="" id="previewBackToDashboard" name="previewBackToDashboard" onClick={this.onClick}>
          <div className="back-button">
            <button className="btn-custom">Back to dashboard</button>
          </div>
        </a>

        <div className ='cardimage'>
          <img src={events.eventImage}/>
        </div>

        <div id="progress-bar">

        </div>

        <div id="event-preview-info">
          <h2 id="event-preview-title">{events.eventName}</h2>
          <h3 className="event-preview-location">{events.location}</h3>

          <h4>Start: {events.startDate}</h4>
          <h4>End: {events.endDate}</h4>
          <h4>Time Start: {events.timeStart}</h4>
          <h4>Time End: {events.timeEnd}</h4>
          <h4>{events.description}</h4>
        </div>

        {this.props.response.deleteEvent === "success" ? renderNotifyDeleteSuccess() : (<div></div>)}

        <div className="event-preview-button">

            <button type="button"
                    className="btn-custom"
                    id="addGuest"
                    onClick={this.onClick}>Add Guest</button>

            <button type="button"
                    className="btn-custom"
                    id="manageInvite"
                    onClick={this.onClick}>Manage Invite</button>

            <button type="button"
                    className="btn-custom"
                    onClick={this.onDelete}>Delete</button>

            <button type="button"
                    className="btn-custom"
                    id="updateEvent"
                    onClick={this.onEdit}>Edit</button>

              <button type="button"
                      className="btn-custom"
                      id="goLive"
                      onClick={this.OnLive}>Go Live!</button>
        </div>

       </div>
     );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.active,
    response: state.response,
    navigation: state.navigation,
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    activeEvent: (event) => {dispatch(activeEvent(event))},
    deleteEvent: (event) => {dispatch(deleteEvent(event))},
    updateEvent: (event) => {dispatch(updateEvent(event))},

    storeLiveEventDetails:(event) => {dispatch(storeLiveEventDetails(event))}
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);

// <Link to="/guest">
// </Link>

// <Link to="/invitetemplate">
// </Link>

// <Link to="/updateEvent">
// </Link>

// <Link to="/LiveRegistration">
// </Link>
