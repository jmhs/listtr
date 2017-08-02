import React, {PropTypes} from 'react';

import {Link} from 'react-router-dom'
import {activeHome} from  '../../Actions/Event';
import { connect } from 'react-redux'
import EventDisplayItem from './EventDisplayItem/EventDisplayItem'
import {updateNavPath} from '../../Actions/Navigation'

import './EventDisplay.css'
class EventDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: this.props.navigation,
    }

  }

  // onClick, updateNavPath is fired in the actions to send to reducer, to be exported as props for conditional rendering
  onClick = (e) => {
    // const state = this.state;
    console.log('clicked on: ', e.target.id);
    this.setState({currentNav: e.target.id});
    //console.log('new component state', this.state)
    this.props.updateNavPath(e.target.id);
    //console.log('curretNav state: ', this.state.currentNav)
  }

  renderEventDisplayItem = () => {
    console.log(this.props.navigation)
    let events = this.props.user.hostFor;
    // console.log(events)
    // console.log(events.length)

    return events.map( (event) => {
      return <EventDisplayItem key={event._id}
                               id={event._id}
                               eventName={event.eventName}
                               description={event.description}
                               eventImage ={event.eventImage}
                               everything = {event}/>
    })
  }

  render() {

    const renderlist = this.renderEventDisplayItem();
    return (
      <div>

        <button className="button" id="createEventBtn" onClick={this.onClick}>Create Event</button>

        <div className="masonry">
          {renderlist}
        </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
    active: state.active,
    user: state.user,
    navigation: state.navigation,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDisplay);

// <Link to="/createevent">
// </Link>
