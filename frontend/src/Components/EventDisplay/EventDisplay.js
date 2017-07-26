import React, {PropTypes} from 'react';

import {Link} from 'react-router-dom'
import {activeHome} from  '../../Actions/Event';
import { connect } from 'react-redux'
import EventDisplayItem from './EventDisplayItem/EventDisplayItem'

class EventDisplay extends React.Component {
  constructor(props) {
    super(props);

  }



  renderEventDisplayItem = () => {
    let events = this.props.events;//user.hostFor;
    console.log(events)
    console.log(events.length)

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
      // <div className="container">
        <div className="masonry">
          {renderlist}
        </div>
      // </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
    active: state.active,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDisplay);
