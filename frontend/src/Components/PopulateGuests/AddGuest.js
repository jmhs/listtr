import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {postGuests} from '../../Actions/Event'
import RenderGuests from './RenderGuests'
import './AddGuest.css'
import CreateGuestRow from './CreateGuestRow'
class AddGuest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: []
    }
  }

  renderGuests = () => {
    let guests = this.state.guests;
    return guests.map( (guest) => {
      return <RenderGuests name={guest.name} email={guest.email} contact={guest.contact} id={guest.id} key={guest.id}/>
    })
  }

  updateGuests = (guest) => {
    let guests = this.state.guests;
    guests.push(guest)
    this.props.postGuests(guest)
    this.setState({
      guests
    })
  }

  render() {
    const renderGuestsRows = this.renderGuests()
    return (
      <div className="container">
        <Link to="/createevent">
          <div className="back-button">
            <button className="btn btn-default" >Back</button>
          </div>
        </Link>
        <div className="add-guest-header">
          <h1>Add Guest</h1>
          <hr/>
        </div>
        <div className="row">
          {renderGuestsRows}
        </div>
        <CreateGuestRow updateGuests={this.updateGuests}/>
      </div>
    );
  }
}



//export default PopulateGuests;
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    postGuests: (guests) => {dispatch(postGuests(guests))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGuest);//to include guest population
