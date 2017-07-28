import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { activeEvent, deleteEvent, updateEvent} from '../../Actions/Event';
import './Preview.css';
import { Button, Modal } from 'semantic-ui-react'


class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })



  onDelete= () => {
    console.log('delete pressed')
    this.props.deleteEvent(this.props.events)

  }



  render() {
    const { open, size } = this.state
    let events = this.props.events
    return (
      <div className ='card'>
      <Link to="/dashboard">
        <div className="back-button">
          <button className="btn btn-default">Back</button>
        </div>
      </Link>
        <div className ='cardimage'>
          <img src={events.eventImage}/>
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
        <div className="event-preview-button">
          <Link to="/guest">
            <button type="button"
                    className="btn-custom"
                    onClick={this.onClick}>Add Guest</button>
          </Link>
          <Link to="/invitetemplate">
            <button type="button"
                    className="btn-custom"
                    onClick={this.onClick}>Create Invite</button>
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
