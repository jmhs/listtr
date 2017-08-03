import React, {PropTypes} from 'react';
import './EventDisplayItem.css';
import {activeEvent} from  '../../../Actions/Event';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

import {updateNavPath} from '../../../Actions/Navigation'


class EventDisplayItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNav: this.props.navigation,
    }

  }

  onClick = (e) => {
  console.log('clicked on: ', e.target.id);
  this.setState({currentNav: e.target.id});
  this.props.updateNavPath(e.target.id);
  let events = this.props.events;
  let eventToBeActive = events.filter((event) => {
    return event._id === this.props.id
  })
  this.props.activeEvent(eventToBeActive[0])
  console.log(this.props.everything)
  //everything refers to everything inherited from clicked event
}

  render() {
    return (
      <div className="grid-item-item">

        <div className="event-display-item-image" >
          <a><img onClick={this.onClick} id="eventDisplayItemImagePreview" src={this.props.eventImage === "" ? "https://d13yacurqjgara.cloudfront.net/users/12668/screenshots/615481/thinkwallpaperpreview.jpg" : this.props.eventImage}/></a>
        </div>

      <div className="event-grid-text" >
      <div className="eventName-box">
        <h4 className="eventName">{this.props.eventName}</h4>
        </div>
        <a><span className="link-to-preview" id="eventDisplayItemTextPreview" onClick={this.onClick}>EVENT DETAILS</span></a>
        <p className="event-display-item-description">{this.props.description === "" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." : this.props.description}</p>


      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    active: state.active,
    navigation: state.navigation,
    events: state.events
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    activeEvent: (event) => {dispatch(activeEvent(event));},
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDisplayItem);

// <Link to="/preview">
// </Link>

// <Link to = "/preview">
// </Link>
