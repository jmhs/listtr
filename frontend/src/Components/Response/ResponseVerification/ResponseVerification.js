import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {  getSpecificEvent, activeGuest } from '../../../Actions/Response';

// Import css styles
import './ResponseVerification.css'

class ResponseVerification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventid: this.props.match.params.event_id,
      guestid: this.props.match.params.guest_id,
    }
  }

componentWillMount() {
  // let event_id = this.props.match.params.event_id;
  // let guest_id = this.props.match.params.guest_id;

  console.log(this.props.match.params.event_id);
  console.log(this.props.match.params.guest_id);
//   // this.setState({
//   //   eventid: this.props.match.params.event_id,
//   //   guestid: this.props.match.params.guest_id,
//   // })
}

onChange = (e) => {
  switch (e.target.name) {
    case 'eventIdResponseField':
      this.setState({
        eventid: e.target.value
      })
      break;
    case 'guestIdResponseField':
      this.setState({
        guestid: e.target.value
      })
      break;

      default:
    }
}

onClick = (e) => {
  // e.preventDefault();
  console.log("clicked postResEventAndGuestId!");
  console.log(this.props.match.params.event_id)
  console.log(this.props.match.params.guest_id)
  let events = this.props.active
  let guest = events.guests.filter((guest, index) => {
    return guest.id === this.props.match.params.guest_id
  })
  console.log(guest)
  guest.id=this.props.match.params.guest_id
  // this.props.getSpecificEvent(this.props.match.params.event_id)
  this.props.activeGuest(guest)

  // this.props.postEventAndGuestId(this.state);
}

componentDidMount(){
  this.props.getSpecificEvent(this.props.match.params.event_id)
}
  render() {
    return (
      <div className="container-fluid" id="responseVerificationContainer">
        <div className="row">

          <div className="col-sm-6 col-sm-offset-3" id="responseVerificationHeader">
            <h1>RESPONSE VERIFICATION</h1>
            <p>Can't wait to hear from you!</p>
            <hr/>
          </div>

        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
          <Link to="/responsedisplay">
          <button className="uk-button uk-button-default"
                  id="respondToInvitationBtn" onClick={this.onClick}>Respond to Invitation</button>
          </Link>
          </div>
          </div>
          <input type="text" className="form-control" name="eventIdResponseField" id="eventIdResponse" placeholder="Current Response Event Id" defaultValue={this.props.match.params.event_id} onChange={this.onChange}/>
          <input type="text" className="form-control" name="guestIdResponseField" id="guestIdResponse" placeholder="Current Response Guest Id" defaultValue={this.props.match.params.guest_id} onChange={this.onChange}/>
          </div>
    );
  }
}

ResponseVerification.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    active: state.active
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // activeEvent: (event) => {dispatch(activeEvent(event))},
    getSpecificEvent: (event_id) => {dispatch(getSpecificEvent(event_id))},
    // getSpecificGuest: (guest_id) => {dispatch(getSpecificGuest(guest_id))},
    activeGuest: (guest_id) => {dispatch(activeGuest(guest_id))},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResponseVerification);
