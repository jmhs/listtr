import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import EventDisplay from '../../EventDisplay/EventDisplay'
import {Link} from 'react-router-dom'
import AccountPage from '../../AccountPage/AccountPage'
import Billing from '../../Billing/Billing'
import CreateEvent from '../../CreateEvent/CreateEvent'
import Preview from '../../Preview/Preview'
import AddGuest from '../../PopulateGuests/AddGuest'
import InviteTemplate from '../../InviteTemplate/InviteTemplate'
import UpdateEvent from '../../UpdateEvent/UpdateEvent'
import LiveRegistration from '../../LiveRegistration/LiveRegistration'

import './MainContent.css'
class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: this.props.navigation
    }
    // console.log(this.state.currentNav[0]);
  }
// function to sort conditionally render components based on currentNav state.
  conditionalRender = () => {
    // console.log("this.props.nav ", this.props.navigation)
    switch(this.props.navigation.nav) {
      case "HostingNav":
      return (<EventDisplay />)
        break;

      case "AttendingNav":
      return (<EventDisplay />)
        break;

      case "AccountNav":
      return (<AccountPage />)
        break;

      case "Billing":
       return (<Billing />)
        break;

      case "Logout":
        return window.location.href = "/"
        break;

      case "createEventBtn":
        return (<CreateEvent />)
        break;

      case "postEventToPreview":
        return (<Preview />)
        break;

      case "previewBackToDashboard":
        return (<EventDisplay />)
        break;

      case "addGuest":
        return (<AddGuest />)
        break;

      case "manageInvite":
        return (<InviteTemplate />)
        break;

      case "updateEvent":
        return (<UpdateEvent />)
        break;

      case "goLive":
        return (<LiveRegistration />)
        break;

      case "eventDisplayItemImagePreview":
        return (<Preview />)
        break;

      case "eventDisplayItemTextPreview":
        return (<Preview />)
        break;

      case "inviteTemplateBackToEventBtn":
        return (<Preview />)
        break;

        case "backToPreviewAddGuestBtn":
          return (<Preview />)
          break;


      default:
        <div> <CreateEvent /> </div>
    }
  }


  render() {
    const componentToRender = this.conditionalRender();
    // console.log("grids: ", grids);

    return (

    <div className="main-content">

      {componentToRender}
    </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

// <Link to="/createevent">
//   <button className="button" id="createEventBtn"><span>Create Event </span></button>
// </Link>
