import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class ResponseDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventImage: this.props.events.eventImage,
      startDate: this.props.events.startDate,
      endDate: this.props.events.startDate,
      eventName: this.props.events.eventName,
      description: this.props.events.description,
      location: this.props.events.location,
      type: "",
      dressCode: this.props.events.dressCode,
      timeStart: this.props.events.timeStart,
      timeEnd: this.props.events.timeEnd,

      guestName: "",
      guestEmail: "",
      guestContact: "",

      response: "pending",
    }
  }

componentWillMount() {

}



  render() {
    return (
      <div>
      <h1>ResponseDisplay component</h1>

      </div>
    );
  }
}

ResponseDisplay.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    events: state.active,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResponseDisplay);
