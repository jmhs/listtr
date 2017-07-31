import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'progressbar.js'
import {Link} from 'react-router-dom'
import { activeEvent, deleteEvent, updateEvent} from '../../Actions/Event';
import './Preview.css';
// import { Button, Modal } from 'semantic-ui-react'
import Button from 'react-uikit-notify';



class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

    }
  }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })



  onDelete= () => {
    console.log('delete pressed')
    this.props.deleteEvent(this.props.events)

  }

  componentDidMount(){

    if(this.props.events.guests === []){
      var bar = new ProgressBar.SemiCircle('#progress-bar', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 6000,
        svgStyle: null,
        text: {
          value: '',
          alignToBottom: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        // Set default step function for all animate calls
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
          var value = Math.round(bar.value() * 100);
          if (value === 0) {
            bar.setText('');
          } else {
            bar.setText(value);
          }

          bar.text.style.color = state.color;
        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';

      bar.animate(1.0);
    }

  }
/*{this.props.response === "success" ? renderNotifyCreateSuccess : (<div>Not success</div>)}
*/
  render() {

    const { open, size } = this.state
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

        <a href="/dashboard">
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
          <Link to="/guest">
            <button type="button"
                    className="btn-custom"
                    onClick={this.onClick}>Manage Guest</button>
          </Link>
          <Link to="/invitetemplate">
            <button type="button"
                    className="btn-custom"
                    onClick={this.onClick}>Manage Invite</button>
          </Link>
            <button type="button"
                    className="btn-custom"
                    onClick={this.onDelete}>Delete</button>
          <Link to="/updateEvent">
            <button type="button"
                    className="btn-custom"
                    onClick={this.onEdit}>Edit</button>
            </Link>
        </div>

       </div>
     );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.active,
    response: state.response
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    activeEvent: (event) => {dispatch(activeEvent(event))},
    deleteEvent: (event) => {dispatch(deleteEvent(event))},
    updateEvent: (event) => {dispatch(updateEvent(event))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
