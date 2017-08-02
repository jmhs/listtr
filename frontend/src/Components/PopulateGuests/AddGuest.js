import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {storeGuestsToActive, postGuest, deleteGuest} from '../../Actions/Event'
import RenderGuests from './RenderGuests'
import './AddGuest.css'
import CreateGuestRow from './CreateGuestRow'
import { reminderEmail } from '../../Actions/Invite';

class AddGuest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: this.props.active.guests
    }
  }
  componentWillMount(){
    if(this.state.guests === undefined ){
      window.location.href = "/dashboard"
    }
  }
  renderGuests = () => {
    let guests = this.state.guests;
    return guests.map( (guest) => {
      return (<RenderGuests name={guest.name} email={guest.email} contact={guest.contact} id={guest.id} key={guest.id} removeGuestRow={this.removeGuestRow}/>)
    })
  }

  updateGuests = (guest) => {
    let guests = this.state.guests;
    guests.push(guest)
    // this.props.storeGuestsToActive(this.props.active, guest)
    this.props.postGuest(this.props.active._id, guest)
    this.setState({
      guests
    })
  }

  removeGuestRow = (id) => {
    let guests = this.state.guests;
    guests.forEach((guest, index) => {
      if (guest.id === id){
        this.props.deleteGuest(this.props.active._id, guest)
        guests.splice(index, 1);

      }
    })
    //console.log(products);
    this.renderGuests();

    // this.updateGrandTotal(id);

    this.setState({
      guests: guests
    })
  }

  reminderEmail = (e) => {
    e.preventDefault();
    console.log("clicked sendReminderEmails!");
    this.props.reminderEmail(this.props.active._id, this.state)
    console.log("dispatching to action... reminderEmail")
  }



  render() {
    const renderGuestsRows = this.renderGuests()
    return (
      <div className="container add-guest-container">


        <Link to="/preview">

          <div className="back-button">
            <button className="btn btn-default" >Back</button>
          </div>
        </Link>
        <div className="add-guest-header">
          <h1>Manage Guest</h1>
          <hr/>
        </div>
        <div className="row">
          {renderGuestsRows}
        </div>
        <CreateGuestRow updateGuests={this.updateGuests}/>
        <button className="uk-button uk-button-primary"
                id="sendReminderEmailsBtn" onClick={this.reminderEmail}>SEND REMINDER!</button>
      </div>


    );
  }
}



//export default PopulateGuests;
const mapStateToProps = (state) => {
  return {
    active: state.active
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    storeGuestsToActive: (active, guests) => {dispatch(storeGuestsToActive(active, guests))},
    postGuest: (active_id, guest) => {dispatch(postGuest(active_id, guest))},
    deleteGuest: (active_id, guest) => {dispatch(deleteGuest(active_id, guest))},
    reminderEmail: (active_id, event) => {dispatch(reminderEmail(active_id, event))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGuest);//to include guest population
