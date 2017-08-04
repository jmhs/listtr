import React, {PropTypes} from 'react';

import { connect } from 'react-redux';
import {postEvents} from '../../Actions/Event'
import { activeEvent} from '../../Actions/Event'
import {updateNavPath} from '../../Actions/Navigation'

import {Link} from 'react-router-dom'
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
    user_id: this.props.user._id,

    currentNav: this.props.navigation,
  };

}
  toCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
//saves user's input into local state before sending to "actons" together
  onChange = (e) => {
    // let state = this.state.events;
    let object = {};
    switch (e.target.name) {
      case 'title':
        let title = this.toCapitalize(e.target.value)
        if (title.length ===0){
          let titleInput = document.getElementById('event-title-input');
          titleInput.className += " input-required"
        } else {
          let titleInput = document.getElementById('event-title-input');
          titleInput.className = " uk-input"
        }
        this.setState({
          eventName: title,
        })
        break;
      case 'type':
        let type = this.toCapitalize(e.target.value)
        this.setState({
          type: type
        })
        break;
      case 'dresscode':
        let dressCode = this.toCapitalize(e.target.value)
        if (dressCode.length ===0){
          let dressCodeInput = document.getElementById('event-dressCode-input');
          dressCodeInput.className += " input-required"
        } else {
          let dressCodeInput = document.getElementById('event-dressCode-input');
          dressCodeInput.className = " uk-input"
        }
        this.setState({
          dressCode
        })
        break;
      case 'description':
        let description = this.toCapitalize(e.target.value)
        if (description.length ===0){
          let descriptionInput = document.getElementById('event-description-input');
          descriptionInput.className += " input-required"
        } else {
          let descriptionInput = document.getElementById('event-description-input');
          descriptionInput.className = " uk-input"
        }
        this.setState({
          description
        })
        break;

      case 'location':
        let location = this.toCapitalize(e.target.value)
        if (location.length ===0){
          let locationInput = document.getElementById('event-location-input');
          locationInput.className += " input-required"
        } else {
          let locationInput = document.getElementById('event-location-input');
          locationInput.className = " uk-input"
        }
        this.setState({
          location
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
    console.log('clicked on: ', e.target.id);
    this.setState({currentNav: e.target.id});
    this.props.updateNavPath(e.target.id);
    this.props.postEvents(this.state)
    // this.props.activeEvent(this.state)
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

    let date = new Date()
    return (
      <div className="container">
        <div className="picture-row-create-event">
          <h1 id="create-event-brand">Listtr</h1>
          <h1 id="create-event">Create Event</h1>
        </div>
        <div>* required</div>
        <div className="create-row">
          <legend className="uk-legend">Title *</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="title"
                   placeholder="Title"
                   onChange={this.onChange}
                   id="event-title-input"/>

          </div>
        </div>

        <div className="create-row">
          <legend className="uk-legend">Dresscode *</legend>
          <div className="uk-margin">
            <input className="uk-input" type="text"
                   name="dresscode"
                   placeholder="Dresscode"
                   onChange={this.onChange}
                   id = "event-dressCode-input"/>
          </div>
        </div>

        <div className="create-row">
          <legend className="uk-legend">Start Date And Time *</legend>
          <div className="uk-margin">

            <input type="datetime-local" name="startDateAndTime" id="date-and-time" onChange={this.onTimeChangeHandler}/>
          </div>
        </div>

        <div className="create-row">
          <legend className="uk-legend">End Date and Time *</legend>
          <div className="uk-margin">

            <input type="datetime-local" name="endDateAndTime" id="date-and-time" onChange={this.onTimeChangeHandler}/>
          </div>
        </div>
        <div className="create-row">
          <legend className="uk-legend">Description *</legend>
          <div className="uk-margin">
            <textarea className="uk-textarea" rows={5} name="description"
                   placeholder="Description"
                   onChange={this.onChange}
                   id="event-description-input"/>
          </div>
        </div>
        <div className="create-row">

          <legend className="uk-legend">Location *</legend>
          <div className="uk-margin">
            <input className="uk-input" name="location"
                   placeholder="Location"
                   onChange={this.onChange}
                   id="event-location-input"/>
          </div>
        </div>

        <div className="create-row">
        <legend className="uk-legend">Event Image</legend>

          <input name="file" type="file" onChange={this.imageUpload}/>

          <button type="submit"
                  className="uk-button uk-button-primary"
                  id="postEventToPreview"
                  onClick={this.onClick}>Create Event</button>


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
    user: state.user,
    navigation: state.navigation,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    postEvents: (events) => {dispatch(postEvents(events))},
    activeEvent: (event) => {
      dispatch(activeEvent(event))
    },
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

// <Link to='/preview'>
// </Link>

// <div className="create-row">
//   <legend className="uk-legend">Type</legend>
//   <div className="uk-margin">
//     <input className="uk-input" type="text"
//            name="type"
//            placeholder="Type"
//            onChange={this.onChange}/>
//   </div>
// </div>
