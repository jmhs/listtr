import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getUser, updateUser} from '../../Actions/User';
import {updateNavPath} from '../../Actions/Navigation'

import axios from 'axios';
import MainContent from './MainContent/MainContent';
import LogIn from '../LogIn/LogIn'
import Loading from '../LoadingPage/LoadingPage'
import './Dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: "HostingNav",

    }
  }

  // onClick, updateNavPath is fired in the actions to send to reducer, to be exported as props for conditional rendering
  onClick = (e) => {
    // const state = this.state;
    console.log('clicked on: ', e.target.id)

    this.setState({currentNav: e.target.id});
    //console.log('new component state', this.state)
    this.props.updateNavPath(e.target.id);
    //console.log('curretNav state: ', this.state.currentNav)
  }

// on clicking logout, user is redirected to "/"
  logout = () => {
    axios.get('/auth/logout').then((response) => {
      console.log("AJAX: Logged out @ '/auth/logout'");
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {

    const isLoggedIn = this.props.user._id;
    // console.log("current user id: ", isLoggedIn);

    return (
      <div className="container-fluid">
      {isLoggedIn
        ? (

      <div>
      <div className="row">
        <div id="headerrownav" className="col-xs-12">
        <a className="logorow" id="listtrLogo" href="/">Listtr</a>
        </div>
      </div>

      {/*CONTENT AND SIDEBAR SEGMENT*/}
        <div className="row">
        {/*start SIDEBARNAV SEGMENT*/}
          <div className="col-xs-2" id="sidebarNav">

            <ul className="sidebarNavList">
              <li className="sidebarNavListItem">
                <a id="HostingNav" onClick={this.onClick}><i className="fa fa-fw fa-book fa-lg"/> Hosting </a>
              </li>

              <li className="sidebarNavListItem">
                <a id="AccountNav" onClick={this.onClick}><i className="fa fa-fw fa-user fa-lg"/> Account </a>
              </li>

              <li className="sidebarNavListItem">
                <a id="Logout" onClick={this.logout}><i className="fa fa-fw fa-sign-out fa-lg"/> Logout </a>
              </li>
            </ul>

          </div>
        {/*end SIDEBARNAV SEGMENT*/}


          <div className="col-xs-10" id="contentwrapper">

            <div className="row">
              <div className="col-md-12" id="contentNavHeader">
                <h1>Welcome back, {this.props.user.username}!</h1>
                <hr />
              </div>
              <div className="col-md-12" id="contentToRender">
              <MainContent />
              </div>
            </div>

          </div>
        </div>
        </div>

    )
    : (<Loading />)
  }
    </div>
  )}
}

Dashboard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// <li className="sidebarNavListItem">
//   <a id="AttendingNav" onClick={this.onClick}><i className="fa fa-fw fa-ticket"/> Attending </a>
// </li>
// <li className="sidebarNavListItem">
//   <a id="Billing" onClick={this.onClick}><i className="fa fa-fw fa-credit-card"/> Billing </a>
// </li>
