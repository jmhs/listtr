import React, {PropTypes} from 'react';

import { connect } from 'react-redux'
import EventDisplayItem from './EventDisplayItem/EventDisplayItem'

class EventDisplay extends React.Component {
  constructor(props) {
    super(props);

  }

  onClick = (id, active) => {
  this.props.activeHome(active)
  }

  renderEventDisplayItem = () => {
    let events = this.props.events;
    console.log(events)
    console.log(events.length)

    return events.map( (event) => {
      return <EventDisplayItem key={event._id}
                               id={event._id}
                               eventName={event.eventName}
                               description={event.description}

                               onClick={this.onClick}/></div>

                               eventImage ={event.eventImage}/>

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
    events: state.events
    activeHome: state.activeHome
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    activeHome: (active) => {dispatch(activeHome(active));},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDisplay);
