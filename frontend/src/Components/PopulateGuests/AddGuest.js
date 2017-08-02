import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ProgressBar from 'progressbar.js'
import { Link } from 'react-router-dom'
import {storeGuestsToActive, postGuest, deleteGuest} from '../../Actions/Event'
import RenderGuests from './RenderGuests'
import './AddGuest.css'
import CreateGuestRow from './CreateGuestRow'
import { reminderEmail } from '../../Actions/Invite';
import {updateNavPath} from '../../Actions/Navigation'

class AddGuest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: this.props.active.guests,
      viewPending: false,
      query: "",
      filteredGuests: this.props.active.guests
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
      to: {color: '#00ad1f'},
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('');
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
    guests.forEach((el, index) => {
      if (el.response ==="yes"){
        numberOfGuestsYes++
      }
    })
    let percentageYes = numberOfGuestsYes / guests.length;
    yesBar.animate(percentageYes);

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
      to: {color: '#00ad1f'},
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
    guests.forEach((el, index) => {
      if (el.response ==="no"){
        numberOfGuestsNo++
      }
    })
    let percentageNo = numberOfGuestsNo / guests.length;
    noBar.animate(percentageNo);

    var pendingBar = new ProgressBar.SemiCircle('#progress-bar-pending', {
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
      to: {color: '#00ad1f'},
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
    guests.forEach((el, index) => {
      if (el.response ==="pending"){
        numberOfGuestsPending++
      }
    })
    let percentagePending = numberOfGuestsPending / guests.length;
    pendingBar.animate(percentagePending);


  }
  renderGuests = () => {
    let guests = this.state.guests;
    if (this.state.viewPending){
      let filteredGuests = guests.filter((guest) => {
        return guest.response === "pending"
      })
      let filteredAgainGuests = filteredGuests.filter((guest) => {
        return (guest.name.toLowerCase().includes(this.state.query.toLowerCase()) ? guest : "")
      })
      return filteredAgainGuests.map( (guest) => {
        return (<RenderGuests name={guest.name} email={guest.email} contact={guest.contact} response={guest.response} id={guest.id} key={guest.id} removeGuestRow={this.removeGuestRow}/>)
      })
    } else {
      let filteredAgainGuests = guests.filter((guest) => {
        return (guest.name.toLowerCase().includes(this.state.query.toLowerCase()) ? guest : "")
      })
      return filteredAgainGuests.map( (guest) => {
        return (<RenderGuests name={guest.name} email={guest.email} contact={guest.contact} response={guest.response} id={guest.id} key={guest.id} removeGuestRow={this.removeGuestRow}/>)
      })
    }

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
    return (
      <div className="container add-guest-container">


          <div className="back-button">
            <button className="btn btn-default" id="backToPreviewAddGuestBtn" onClick={this.onClick} >Back</button>
          </div>

        <div className="add-guest-header">
          <h1>Manage Guest</h1>
          <hr/>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="checkbox" name="view-pending" value="Car" onChange={this.toggleViewPending}/>View pending only<br/>
            <button className="btn btn-default" >Send reminder</button>
          </div>
          <div className="col-sm-3">
            <input type="text" className="uk-input" placeholder="Search Name" onChange={this.searchName}/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 progress-bar-box">
            <h4 className="progress-bar-title">Percentage Yes</h4>
            <div id="progress-bar-yes">
            </div>
          </div>
          <div className="col-sm-4 progress-bar-box">
            <h4 className="progress-bar-title">Percentage No</h4>
            <div id="progress-bar-no">
            </div>
          </div>
          <div className="col-sm-4 progress-bar-box">
            <h4 className="progress-bar-title">Percentage Pending</h4>
            <div id="progress-bar-pending">
            </div>
          </div>
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
    active: state.active,
    events: state.active,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    storeGuestsToActive: (active, guests) => {dispatch(storeGuestsToActive(active, guests))},
    postGuest: (active_id, guest) => {dispatch(postGuest(active_id, guest))},
    deleteGuest: (active_id, guest) => {dispatch(deleteGuest(active_id, guest))},
    reminderEmail: (active_id, event) => {dispatch(reminderEmail(active_id, event))},
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGuest);//to include guest population

<Link to="/preview">
</Link>
