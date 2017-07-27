import React, {PropTypes} from 'react';
import './EventDisplayItem.css';
import {activeEvent} from  '../../../Actions/Event';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";




class EventDisplayItem extends React.Component {

  onClick = (e) => {
  this.props.activeEvent(this.props.everything)
  console.log(this.props.everything)
  //everything refers to everything inherited from clicked event
}
  render() {
    return (
      <div className="grid-item" onClick={this.onClick} >
        <Link to="/preview">
          <div className="image">
            <img src={this.props.eventImage === "" ? "https://d13yacurqjgara.cloudfront.net/users/12668/screenshots/615481/thinkwallpaperpreview.jpg" : this.props.eventImage}/>
          </div>
        </Link>
          <h4 className="eventName">{this.props.eventName}</h4>
          <p>{this.props.description === "" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." : this.props.description}</p>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    active: state.active
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    activeEvent: (event) => {dispatch(activeEvent(event));},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDisplayItem);
