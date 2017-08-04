import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'progressbar.js'
import { Link } from 'react-router-dom'
import {storeGuestsToActive, postGuest, deleteGuest, addCollabToBackend} from '../../Actions/Event'

import RenderGuests from './RenderGuests'
import './AddGuest.css'
import CreateGuestRow from './CreateGuestRow'
import { reminderEmail } from '../../Actions/Invite';
import {updateNavPath} from '../../Actions/Navigation'
import AddCollab from './AddCollab'
class AddGuest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: this.props.active.guests,
      viewPending: false,
      query: "",
      // filteredGuests: this.props.active.guests
    }
  }
  componentWillMount(){
    if(this.state.guests === undefined ){
      window.location.href = "/dashboard"
    }
  }

  componentDidMount(){
    var yesBar = new ProgressBar.SemiCircle('#progress-bar-yes', {
      strokeWidth: 6,
      color: '#0FB28A',
      trailColor: '#eee',
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 6000,
      svgStyle: null,
      text: {
        value: '',
        alignToBottom: false
      },
      from: {color: '#0FB28A'},
      to: {color: '#0FB28A'},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('0%');
        } else {
          bar.setText(value +'%');
        }

        bar.text.style.color = state.color;
      }
    });
    yesBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    yesBar.text.style.fontSize = '2rem';
    let numberOfGuestsYes = 0;
    let guests = this.state.guests;
    if(guests.length===0){
      yesBar.animate(0)
    } else {
      guests.forEach((el, index) => {
        if (el.response ==="yes"){
          numberOfGuestsYes++
        }
      })
      let percentageYes = numberOfGuestsYes / guests.length;
      yesBar.animate(percentageYes);
    }


    var noBar = new ProgressBar.SemiCircle('#progress-bar-no', {
      strokeWidth: 6,
      color: '#ED6A5A',
      trailColor: '#eee',
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 6000,
      svgStyle: null,
      text: {
        value: '',
        alignToBottom: false
      },
      from: {color: '#ED6A5A'},
      to: {color: '#ED6A5A'},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('0%');
        } else {
          bar.setText(value +'%');
        }

        bar.text.style.color = state.color;
      }
    });
    noBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    noBar.text.style.fontSize = '2rem';
    let numberOfGuestsNo = 0;
    // let guests = this.state.guests;
    if(guests.length===0){
      noBar.animate(0)
    } else {
      guests.forEach((el, index) => {
        if (el.response ==="no"){
          numberOfGuestsNo++
        }
      })
      let percentageNo = numberOfGuestsNo / guests.length;
      noBar.animate(percentageNo);
    }


    var pendingBar = new ProgressBar.SemiCircle('#progress-bar-pending', {
      strokeWidth: 6,
      color: '#939393',
      trailColor: '#eee',
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 6000,
      svgStyle: null,
      text: {
        value: '',
        alignToBottom: false
      },
      from: {color: '#939393'},
      to: {color: '#939393'},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('0%');
        } else {
          bar.setText(value +'%');
        }

        bar.text.style.color = state.color;
      }
    });
    pendingBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    pendingBar.text.style.fontSize = '2rem';
    let numberOfGuestsPending = 0;
    // let guests = this.state.guests;

    if(guests.length===0){
      pendingBar.animate(0)
    } else {
      guests.forEach((el, index) => {
        if (el.response ==="pending"){
          numberOfGuestsPending++
        }
      })
      let percentagePending = numberOfGuestsPending / guests.length;
      pendingBar.animate(percentagePending);
    }

  }

  renderGuests = () => {
    let guests = this.state.guests;
    if (guests.length === 0){
      return (<div>No guests added!</div>)
    } else if (this.state.viewPending){
      let filteredGuests = guests.filter((guest) => {
        return guest.response === "pending"
      })
      let filteredAgainGuests = filteredGuests.filter((guest) => {
        return (guest.name.toLowerCase().includes(this.state.query.toLowerCase()) ? guest : "")
      })
      return filteredAgainGuests.map( (guest) => {
        return (<RenderGuests name={guest.name} email={guest.email} contact={guest.contact} response={guest.response} id={guest.id} key={guest.id} removeGuestRow={this.removeGuestRow} guestDetails={guest}/>)
      })
    } else {
      let filteredAgainGuests = guests.filter((guest) => {
        return (guest.name.toLowerCase().includes(this.state.query.toLowerCase()) ? guest : "")
      })
      return filteredAgainGuests.map( (guest) => {
        return (<RenderGuests name={guest.name} email={guest.email} contact={guest.contact} response={guest.response} id={guest.id} key={guest.id} removeGuestRow={this.removeGuestRow} guestDetails={guest}/>)
      })
    }

  }

  addCollab = (event_id, email) => {
    this.props.addCollabToBackend(event_id, email)
  }

  toggleViewPending = (e) => {
    console.log('toggle view pending')
    if(this.state.viewPending){
      this.setState({
        viewPending: false
      })
    } else {
      this.setState({
        viewPending: true
      })
    }

  }

  searchName = (e) => {
    this.setState({
      query: e.target.value
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
    this.props.reminderEmail(this.props.events._id, this.state)
    console.log("dispatching to action... reminderEmail")
  }

  onClick = (e) => {
    console.log('clicked on: ', e.target.id);
    this.setState({currentNav: e.target.id});
    this.props.updateNavPath(e.target.id);
  }

  render() {
    const renderGuestsRows = this.renderGuests()
    const renderNotifyAddCollabSuccess = () => {
      return (<div className="col-sm-12">
        <div className="success-alert">
          <strong>Success!</strong> Collab Added
        </div>
      </div>)
    }
    const renderNotifyAddCollabFail = () => {
      return (<div className="col-sm-12">
        <div className="fail-alert">
          <strong>Fail</strong> to add collab. Email is not a user!
        </div>
      </div>)
    }
    return (
      <div className="container add-guest-container">


        <div className="add-guest-header">
          <h1>Manage Guest</h1>
          <hr/>
        </div>

        <div className="row">

        <div className="card progressbarContainer" id="yesProgressBar">
          <div className="card-header">
          <p id="progressbarHeaderYes">  YES</p>
          </div>
          <div className="card-block">
          <div className="col-sm-4 progress-bar-box">
            <div id="progress-bar-yes">
            </div>
          </div>
          </div>
          </div>

          <div className="card progressbarContainer" id="noProgressBar">
            <div className="card-header">
            <p id="progressbarHeaderNo">  NO</p>
            </div>
            <div className="card-block">
            <div className="col-sm-4 progress-bar-box">
              <div id="progress-bar-no">
              </div>
            </div>
            </div>
            </div>

          <div className="card progressbarContainer" id="pendingProgressBar">
            <div className="card-header">
            <p id="progressbarHeaderPending">  PENDING</p>
            </div>
            <div className="card-block">
            <div className="col-sm-4 progress-bar-box">
              <div id="progress-bar-pending">
              </div>
            </div>
            </div>
            </div>

            </div>

          <br/>
          <br/>

        <div className="row">

        <div className="col-sm-3 searchName">
          <input type="text" className="uk-input" placeholder="Search Name" onChange={this.searchName}/>
        </div>

          <div className="col-sm-6">
            <input type="checkbox" name="view-pending" value="Car" onChange={this.toggleViewPending}/>View pending only<br/>
          </div>

          <button className="uk-button uk-button-primary"
                  id="sendReminderEmailsBtn" onClick={this.reminderEmail}>Send Reminder</button>

        </div>

        <div className="row">
          <div className="card guestRowContainer" id="">
            <div className="card-header">
              <p id="eventActionsHeader">  INVITED GUESTS</p>
            </div>
            <div className="card-block guestRows">
            <div className="row">
              {renderGuestsRows}
            </div>
            </div>
            </div>
          </div>

      <div className="row">
        <div className="col-sm-12 createGuests">
          <CreateGuestRow updateGuests={this.updateGuests}/>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 addCollabRow">
          <AddCollab addCollabFunction={this.addCollab} event={this.props.active}/>
        </div>
        </div>
        {this.props.responseAJAX.addCollab === "success" ? renderNotifyAddCollabSuccess() : (<div></div>)}
        {this.props.responseAJAX.addCollab === "fail add collab" ? renderNotifyAddCollabFail() : (<div></div>)}
      </div>


    );
  }
}



//export default PopulateGuests;
const mapStateToProps = (state) => {
  return {
    active: state.active,
    events: state.active,
    responseAJAX: state.responseAJAX
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    storeGuestsToActive: (active, guests) => {dispatch(storeGuestsToActive(active, guests))},
    postGuest: (active_id, guest) => {dispatch(postGuest(active_id, guest))},
    deleteGuest: (active_id, guest) => {dispatch(deleteGuest(active_id, guest))},
    reminderEmail: (active_id, event) => {dispatch(reminderEmail(active_id, event))},
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))},
    addCollabToBackend: (event_id, email) => {dispatch(addCollabToBackend(event_id, email))},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGuest);//to include guest population
