import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {storeGuestsToActive, postGuest} from '../../Actions/Event'
import RenderGuests from './RenderGuests'
import './AddGuest.css'
import CreateGuestRow from './CreateGuestRow'
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
      return <RenderGuests name={guest.name} email={guest.email} contact={guest.contact} id={guest.id} key={guest.id} removeGuestRow={this.removeGuestRow}/>
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
  render() {
    const renderGuestsRows = this.renderGuests()
    return (
      <div className="container">


        <Link to="/preview">

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
    active: state.active
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    storeGuestsToActive: (active, guests) => {dispatch(storeGuestsToActive(active, guests))},
    postGuest: (active_id, guest) => {dispatch(postGuest(active_id, guest))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGuest);//to include guest population
