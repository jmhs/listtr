import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import EventDisplay from '../../EventDisplay/EventDisplay'
// import Account from '../../Account/Account'
// import Billing from '../../Billing/Billing'

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: this.props.state
    }
    console.log(this.state.currentNav)
  }

  render() {
    const toRenderComponent = this.props.currentNav;

    if (toRenderComponent === "HostingNav") {
      return (
        <EventDisplay />
      )
    } else if (toRenderComponent === "AttendingNav") {
      return (
      <EventDisplay />
      )
    }  else if (toRenderComponent === "Logout"){
      return (
        window.location.href = "/"
      )
    }

    // else if (toRenderComponent === "AccountNav") {
    //   return (
    //   <Account />
    //   )
    // } else if (toRenderComponent === "Billing") {
    //   return (
    //   <Billing />
    //   )
    // }

    return (
      <div>MAIN CONTENT AREA</div>
    );
  }
}

MainContent.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    navigation: state.NavigationReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
