import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import EventDisplay from '../../EventDisplay/EventDisplay'
import AccountPage from '../../AccountPage/AccountPage'
import Billing from '../../Billing/Billing'

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: this.props.navigation
    }
    console.log(this.state.currentNav[0]);
  }

  conditionalRender = () => {
    console.log("this.props.nav ", this.props.navigation)
    console.log(this.state.currentNav[0]);
    // switch(this.props.navigation) {
    //   case "HostingNav":
    //   return <EventDisplay />
    //     break;
    //
    //   case "AttendingNav":
    //   return <EventDisplay />
    //     break;
    //
    //   case "AccountNav":
    //   return <AccountPage />
    //     break;
    //
    //   case "Billing":
    //    return <Billing />
    //     break;
    //
    //   case "Logout":
    //     return window.location.href = "/"
    //     break;
    //
    //   default:
    //     <div> MAIN CONTENT AREA </div>
    // }

  }


  render() {
    const grids = this.conditionalRender();
    console.log("grids: ", grids);

    return (
    <div></div>
    )

    // switch(this.props.navigation.toString()) {
    //   case "HostingNav":
    //   return (<EventDisplay />)
    //     break;
    //
    //   case "AttendingNav":
    //   return (<EventDisplay />)
    //     break;
    //
    //   case "AccountNav":
    //   return (<AccountPage />)
    //     break;
    //
    //   case "Billing":
    //    return (<Billing />)
    //     break;
    //
    //   case "Logout":
    //     return window.location.href = "/"
    //     break;
    //
    //   default:
    //     <div> MAIN CONTENT AREA </div>
    //     console.log(this.state)
    // }
  }
}

MainContent.propTypes = {
};

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
