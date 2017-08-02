import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './LiveRegistration.css';
import Table from 'react-uikit-table'
import {storeLiveEventDetails, fetchLiveEventData, updateLiveEventData, fetchupdateLiveEventData} from '../../Actions/LiveRegistration'
import {updateNavPath} from '../../Actions/Navigation'





class LiveRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        searchValue: "",
        guests: this.props.LiveRegistration.guests,
        filteredGuests:""
    }
  }

  componentDidMount(){
    // this.props.active.
    // const io = require('socket.io-client/dist/socket.io.js');
    // const socket = io.connect('http://localhost:3001');
    // socket.emit('getAllGuests', "597c13505c76595c4eaa469b");
    // socket.on('guest list', (data) => {
    // console.log(data);
    // this.props.storeLiveEventDetails(data)
    console.log('component did mount')
    this.props.fetchLiveEventData(this.props.active._id);
    this.props.fetchupdateLiveEventData()
  }

  componentDidUpdate(){


  }

  renderGuests = (filter) => {
    let guests
    filter ? guests = this.state.filteredGuests : guests = this.props.LiveRegistration.guests

    console.log(guests)
    if (guests) {
    return guests.map((guest) => {
      return (
              <tbody key={guest.id}>
                 <tr>
                   <td><input className="uk-checkbox" type="checkbox" onChange={this.Checkbox} name={guest.id} checked={guest.checkedIn}/></td>
                   <td><img className="uk-preserve-width uk-border-circle" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/17015b52218827.5909281cb99f2.jpg" width={40} alt /></td>
                   <td className="uk-table-link">
                     <a className="uk-link-reset" href>{guest.email}</a>
                   </td>
                   <td className="uk-text-truncate">{guest.name}</td>
                   <td className="uk-text-nowrap">{guest.response}</td>
                 </tr>
               </tbody>
            )
          })
        }
      else if (guests == undefined){
        return (
                <tbody key>
                   <tr>
                     <td className="uk-table-link"><h2>You do not have Any guests!</h2></td>
                   </tr>
                 </tbody>
              )
      }
    }

  // renderChecked = (guest) =>{
  //   if (guest.checkedIn === false){
  //     return false
  //   }else if(guest.checkedIn===true){
  //     return true
  //   }
  // }
  // addGuests = (e) => {
  //   this.setState({
  //     addGuests: true
  //   })
  //   e.preventDefault()
  // }

Checkbox = (e) => {
  // const io = require('socket.io-client/dist/socket.io.js');
  // const socket = io.connect('http://localhost:3001');
  // this.props.fetchupdateLiveEventData()
  console.log(e.target.checked)
  let guests = this.props.LiveRegistration.guests
  let guest = guests.filter( (guest,index) => {
      return guest.id === e.target.name;
    })

  if(e.target.checked == true){

    guest[0].checkedIn = true
    this.props.updateLiveEventData(this.props.LiveRegistration);

    console.log("TRUEEE")

  }else if (e.target.checked == false) {
    guest[0].checkedIn = false
    this.props.updateLiveEventData(this.props.LiveRegistration);

    console.log("FALSE")
  }
}


Search =(e)=>{
  let originalState = this.state.guests
    let state = this.state
    let filtered = ""
    let queryText = e.target.value

    // If user is searching, filter
    if (queryText !== '') {
      filtered = this.state.guests.filter((el) => {

        return el.name.toLowerCase().includes(queryText.toLowerCase()) ||
               el.email.toLowerCase().includes(queryText.toLowerCase()) ||
               el.contact.toLowerCase().includes(queryText.toLowerCase())
      })
    } else {
      // else, return back to original state
      filtered = originalState
    }

    state.searchValue = queryText
    state.filteredGuests = filtered
    this.setState(state)

}

onClick = (e) => {
  console.log('clicked on: ', e.target.id)
  this.setState({currentNav: e.target.id});
  this.props.updateNavPath(e.target.id);
}

  render() {
    console.log(this.state)
    return (
    <div className="uk-container uk-container-small uk-position-relative container">
    <div>
    <h1>Registrations</h1>
    </div>
      <div className="uk-overflow-auto uk-position-relative uk-margin-medium" >
      <div className="uk-margin">
          <form className="uk-search uk-search-default">
            <input className="uk-search-input" type="search" placeholder="Search..." onChange={this.Search} />
          </form>
        </div>
              <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-shrink">Attd</th>
                    <th className="uk-table-shrink">Name</th>
                    <th className="uk-table-expand">Email</th>
                    <th className="uk-width-small">Contact No.</th>
                    <th className="uk-table-shrink uk-text-nowrap">RSVP Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input className="uk-checkbox" type="checkbox" /></td>
                    <td><img className="uk-preserve-width uk-border-circle" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/17015b52218827.5909281cb99f2.jpg" width={40} alt /></td>
                    <td className="uk-table-link">
                      <a className="uk-link-reset" href>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                    </td>
                    <td className="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                    <td className="uk-text-nowrap">Lorem ipsum dolor</td>
                  </tr>
                </tbody>
                {this.state.filteredGuests !== '' ? this.renderGuests(true) : this.renderGuests(false)}
              </table>
              <button onClick={this.addGuests}>Add Guests</button>
              <button id="liveRegistrationBackToDashboardBtn" onClick={this.onClick}>Back to dashboard</button>

            </div>
      </div>
    );
  }
}

LiveRegistration.propTypes = {
};


const mapStateToProps = (state) => {
  return {
    active: state.active,
    user: state.user,
    LiveRegistration: state.LiveRegistration
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    storeLiveEventDetails: (data) => { dispatch(storeLiveEventDetails(data))},
    fetchLiveEventData: (eventID) => {dispatch(fetchLiveEventData(eventID))},
    updateLiveEventData: (data) => {dispatch(updateLiveEventData(data))},
    fetchupdateLiveEventData: () => {dispatch(fetchupdateLiveEventData())},
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))},
}}

export default connect(mapStateToProps, mapDispatchToProps)(LiveRegistration);
