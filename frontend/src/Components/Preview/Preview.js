import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { activeEvent} from '../../Actions/Event';
import './Preview.css';
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let events = this.props.events
    return (
      <div className = "Firreee">
      <div className ='card'>

      <div className ='cardimage'>
      <img src={events.eventImage}>
      </img>

      </div>
      <h2>{events.eventName}</h2>
      <h3>{events.location}</h3>
      <h4>{events.description}</h4>
      <h4>{events.startDate}</h4>
      <h4>{events.endDate}</h4>
      <h4>{events.timeStart}</h4>
      <h4>{events.timeEnd}</h4>

      <Link to="/guest">
      <button type="button"
              className="btn btn-default"
              onClick={this.onClick}>AddGuest</button></Link>


        <h1 className="uk-article-title">
        <a className="uk-link-reset" href> Headin </a> </h1>
          <div>
            <a className="uk-button uk-button-text" href="#">Read more</a>
          </div>
          <div>
            <a className="uk-button uk-button-text" href="#">5 Comments</a>
          </div>
        </div>
        </div>


  );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.active,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    activeEvent: (event) => {
      dispatch(activeEvent(event))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
