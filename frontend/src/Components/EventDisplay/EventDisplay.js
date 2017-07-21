import React, {PropTypes} from 'react';

import { connect } from 'react-redux'
import EventDisplayItem from './EventDisplayItem/EventDisplayItem'
class EventDisplay extends React.Component {
  constructor(props) {
    super(props);

  }
  renderEventDisplayItem = () => {
    let events = this.props.events;
    return events.map( (event) => {
      return <EventDisplayItem eventName={event.eventName}/>
    })
  }
  render() {
    const renderlist = this.renderEventDisplayItem();
    return (
      <div className="container">
        <div className="row">
          {renderlist}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDisplay);
