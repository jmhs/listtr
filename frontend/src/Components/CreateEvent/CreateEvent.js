import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {postEvents} from '../../Actions/Event'
import 'react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'
import PopulateGuests from '../PopulateGuests/PopulateGuests'
import './CreateEvent.css'
class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    eventImage: null,
    date: null,
    title: "",
    description: "",
    location: ""
  };

}

//saves user's input into local state before sending to "actons" together
  onChange = (e) => {
    // let state = this.state.events;
    let object = {};
    switch (e.target.name) {
      case 'title':
        this.setState({
          title: e.target.value
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
    this.props.postEvents(this.state)
  }
  dateChange = (dateString, { dateMoment, timestamp }) => {
    console.log(dateString)
    this.setState({
      date: dateString
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
          <legend className="uk-legend">Date</legend>
          <div className="uk-margin">
          <Calendar
              dateFormat="YYYY-MM-DD"
              date={date}
              onChange={this.dateChange}
              name="date"
              />
          </div>
          <legend className="uk-legend">Description</legend>
          <div className="uk-margin">
            <textarea className="uk-textarea" rows={5} name="description"
                   placeholder="Description"
                   onChange={this.onChange}
                   />
          </div>
          <legend className="uk-legend">Location</legend>
          <div className="uk-margin">
            <input className="uk-input" name="location"
                   placeholder="Location"
                   onChange={this.onChange}
                   />
          </div>
          <input name="file" type="file" onChange={this.imageUpload}/>
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Create</button>

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
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    postEvents: (pic,events) => {dispatch(postEvents(pic,events))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
