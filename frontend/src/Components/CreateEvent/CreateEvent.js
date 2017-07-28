import React, {PropTypes} from 'react';
// import TimePicker from 'react-bootstrap-time-picker';
import { connect } from 'react-redux';
import {postEvents} from '../../Actions/Event'
import { activeEvent} from '../../Actions/Event'
import 'react-date-picker/index.css'
import {Link} from 'react-router-dom'
import { DateField, Calendar } from 'react-date-picker'
// import PopulateGuests from '../PopulateGuests/PopulateGuests'
import './CreateEvent.css'
class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    eventImage: null,
    startDate: null,
    endDate: null,
    eventName: "",
    description: "",
    location: "",
    type: "",
    dressCode: "",
    timeStart: "",
    timeEnd: "",
    user_id: this.props.user._id
  };

}

//saves user's input into local state before sending to "actons" together
  onChange = (e) => {
    // let state = this.state.events;
    let object = {};
    switch (e.target.name) {
      case 'title':
        this.setState({
          eventName: e.target.value,
        })
        break;
      case 'type':
        this.setState({
          type: e.target.value
        })
        break;
      case 'dresscode':
        this.setState({
          dressCode: e.target.value
        })
        break;
      case 'description':
        this.setState({
          description: e.target.value
        })
        break;
      case 'timeStart':
        this.setState({
          timeStart: e.target.value
        })
        break;
      case 'timeEnd':
        this.setState({
          timeEnd: e.target.value
        })
        break;
      case 'location':
        this.setState({
          location: e.target.value
        })
        break;
      default:
        object

    }

  }



//Accesses uploded files via files[0] and appends to state
  imageUpload = (e) => {
    let eventImage = e.target.files[0]
    this.setState({
      eventImage: eventImage
    })
  }

// if loop for when create button pressed with & without image(different actions)
  onClick = (e) => {
    this.props.postEvents(this.state)
    this.props.activeEvent(this.state)
  }



  startdateChange = (dateString, { dateMoment, timestamp }) => {
    console.log(dateString)
    this.setState({
      startDate: dateString
    })
  }

  enddateChange = (dateString, { dateMoment, timestamp }) => {
    console.log(dateString)
    this.setState({
      endDate: dateString
    })
  }



  render() {

    let date = new Date()
    return (
      <div className="container">
        <div className="picture-row-create-event">
          <h1 id="create-event-brand">Listtr</h1>
          <h1 id="create-event">Create Event</h1>
        </div>

        <div className="create-row">

          <legend className="uk-legend">Title</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="title"
                   placeholder="Title"
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Type</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="type"
                   placeholder="Type"
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Dresscode</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="dresscode"
                   placeholder="Dresscode"
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row calendar-form">
          <legend className="uk-legend">Start Date</legend>
          <div className="uk-margin">
            <Calendar
                dateFormat="YYYY-MM-DD"
                date={date}
                onChange={this.startdateChange}
                name="startDate"
                />
          </div>
        </div>
        <div className="create-row calendar-form">
          <legend className="uk-legend">End Date</legend>
          <div className="uk-margin">
          <Calendar
              dateFormat="YYYY-MM-DD"
              date={date}
              onChange={this.enddateChange}
              name="startDate"
              />
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Start Time</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="timeStart"
                   placeholder="Start Time"
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">End Time</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="timeEnd"
                   placeholder="End Time"
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Description</legend>
          <div className="uk-margin">
            <textarea className="uk-textarea" rows={5} name="description"
                   placeholder="Description"
                   onChange={this.onChange}
                   />
          </div>
        </div>
        <div className="create-row">

          <legend className="uk-legend">Location</legend>
          <div className="uk-margin">
            <input className="uk-input" name="location"
                   placeholder="Location"
                   onChange={this.onChange}
                   />
          </div>
        </div>

        <div className="create-row">
        <legend className="uk-legend">Event Image</legend>

          <input name="file" type="file" onChange={this.imageUpload}/>
          <Link to='/preview'>
          <button type="button"
                  className="btn btn-success"
                  id="preview-button"
                  onClick={this.onClick}>Create Event</button></Link>


        </div>
      </div>
    );
  }
}

CreateEvent.propTypes = {
};


const mapStateToProps = (state) => {
  return {
    events: state.events,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    postEvents: (events) => {dispatch(postEvents(events))},
    activeEvent: (event) => {
      dispatch(activeEvent(event))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
