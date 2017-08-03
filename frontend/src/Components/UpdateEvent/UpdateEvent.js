import React, {PropTypes} from 'react';
// import TimePicker from 'react-bootstrap-time-picker';
import { connect } from 'react-redux';
import {updateEvent} from '../../Actions/Event'
import { activeEvent} from '../../Actions/Event'
import 'react-date-picker/index.css'
import {Link} from 'react-router-dom'
import { DateField, Calendar } from 'react-date-picker'
// import PopulateGuests from '../PopulateGuests/PopulateGuests'
import './UpdateEvent.css'
class UpdateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    _id: this.props.active._id,
    eventImage: this.props.active.eventImage ,
    startDate: this.props.active.startDate,
    endDate: this.props.active.endDate,
    eventName: this.props.active.eventName,
    description: this.props.active.description,
    location: this.props.active.location,
    type: this.props.active.type,
    dressCode: this.props.active.dressCode,
    timeStart: this.props.active.timeStart,
    timeEnd: this.props.active.timeEnd,
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
      case 'location':
        this.setState({
          location: e.target.value
        })
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
    this.props.updateEvent(this.state)

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

  onTimeChangeHandler = (e) => {
    console.log(e.target.value)
    let string = e.target.value;
    let dateAndTime = string.split("T");
    dateAndTime[0] = dateAndTime[0].split("-")

    //put year at the back
    dateAndTime[0].push(dateAndTime[0].shift())

    //swap month and date
    let month = dateAndTime[0][0]
    dateAndTime[0][0] = dateAndTime[0][1];
    dateAndTime[0][1] = month;

    let date = dateAndTime[0].join('-');

    console.log(dateAndTime[0].join('-'))
    if(e.target.name === "startDateAndTime"){
      this.setState({
        startDate: date,
        timeStart: dateAndTime[1]
      })
      // console.log(dateAndTime[0])
    } else {
      this.setState({
        endDate: date,
        timeEnd: dateAndTime[1]
      })
    }
   }

  render() {
    let active = this.props.active
    let date = new Date()
    return (
      <div className="container">
        <div className="picture-row-create-event">
          <h1 id="create-event-brand">Listtr</h1>
          <h1 id="create-event">Edit Event</h1>
        </div>
        <div>* required</div>
        <div className="create-row">

          <legend className="uk-legend">Title</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="title"
                   value={this.state.eventName}
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Type</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="type"
                   value={this.state.type}
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Dresscode</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="dresscode"
                   value={this.state.dressCode}
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Start Date</legend>
          <div className="uk-margin">
            <input type="datetime-local" name="startDateAndTime" id="date-and-time" onChange={this.onTimeChangeHandler}
            />

          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">End Date</legend>
          <div className="uk-margin">
          <input type="datetime-local" name="endDateAndTime" id="date-and-time" onChange={this.onTimeChangeHandler}
          />

          </div>
        </div>

        <div className="create-row">
          <legend className="uk-legend">Description</legend>
          <div className="uk-margin">
            <textarea className="uk-textarea" rows={5} name="description"
                   value={this.state.description}
                   onChange={this.onChange}
                   />
          </div>
        </div>
        <div className="create-row">

          <legend className="uk-legend">Location</legend>
          <div className="uk-margin">
            <input className="uk-input" name="location"
                   value={this.state.location}
                   onChange={this.onChange}
                   />
          </div>
        </div>

        <div className="create-row">
        <legend className="uk-legend">Event Image</legend>

          <input name="file" type="file" onChange={this.imageUpload}/>

          <Link to='/dashboard'>
          <button type="button"
                  className="btn btn-success"
                  id="preview-button"
                  onClick={this.onClick}>Update Event!</button></Link>


        </div>
      </div>
    );
  }
}

UpdateEvent.propTypes = {
};


const mapStateToProps = (state) => {
  return {
    active: state.active,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    updateEvent: (event) => {dispatch(updateEvent(event))},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEvent);
