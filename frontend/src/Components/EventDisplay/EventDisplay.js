import React, {PropTypes} from 'react';

import { connect } from 'react-redux'
import EventDisplayItem from './EventDisplayItem/EventDisplayItem'

class EventDisplay extends React.Component {
  constructor(props) {
    super(props);

  }
  renderEventDisplayItem = () => {
    let events = this.props.events;
    console.log(events)
    console.log(events.length)

    return events.map( (event) => {
      return <div><EventDisplayItem key={event._id}
                               id={event._id}
                               eventName={event.eventName}
                               description={event.description}/></div>
    })
  }
  render() {

    const renderlist = this.renderEventDisplayItem();
    return (
      <div className="container">
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center" uk-grid-parallax="translate:200">
          {renderlist}

        </div>
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center" uk-grid-parallax="translate:200">
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
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
