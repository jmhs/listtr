import React, {PropTypes} from 'react';
import './EventDisplayItem.css'
import image from './event.jpg';
class EventDisplayItem extends React.Component {

  render() {
    return (
      <div className="event-item uk-card uk-card-default uk-card-body" >

          <div className="image">
            <img src={image}/>
          </div>


          <h4 className="eventName">{this.props.eventName}</h4>
          <p>{this.props.description}</p>


        
      </div>
    );
  }
}

export default EventDisplayItem;
