import React, {PropTypes} from 'react';
import EventDisplayItem from './EventDisplayItem/EventDisplayItem'
class EventDisplay extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <EventDisplayItem/>
          <EventDisplayItem/>
          <EventDisplayItem/>
          <EventDisplayItem/>
          <EventDisplayItem/>
          <EventDisplayItem/>
          <EventDisplayItem/>
          <EventDisplayItem/>
          <EventDisplayItem/>
        </div>
      </div>
    );
  }
}

export default EventDisplay;
