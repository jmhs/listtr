import React, {PropTypes} from 'react';
import './EventDisplayItem.css'
import image from './event.jpg';
class EventDisplayItem extends React.Component {

  render() {
    return (
      <div className="event-item">
        <div className="col-sm-12">
          <div className="image">
            <img src={image}/>
          </div>
          <h4 className="eventName">{this.props.eventName}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default EventDisplayItem;
