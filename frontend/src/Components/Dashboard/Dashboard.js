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
    const state = this.state;
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
        <a className="logorow" id="listtrLogo" href="/">Listrr</a>
        </div>
      </div>

      {/*CONTENT AND SIDEBAR SEGMENT*/}
        <div className="row">
        {/*start SIDEBARNAV SEGMENT*/}
          <div className="col-xs-2" id="sidebarNav">

            <ul className="sidebarNavList">
              <li className="sidebarNavListItem">
                <a id="HostingNav" onClick={this.onClick}><i className="fa fa-fw fa-list"/> Hosting </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="AttendingNav" onClick={this.onClick}><i className="fa fa-fw fa-area-chart"/> Attending </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="AccountNav" onClick={this.onClick}><i className="fa fa-fw fa-user"/> Account </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="Billing" onClick={this.onClick}><i className="fa fa-fw fa-credit-card"/> Billing </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="Logout" onClick={this.logout}><i className="fa fa-fw fa-sign-out"/> Logout </a>
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

// <div>
// {/* NAVIGATION */}
// <nav id="mainNav" className="navbar static-top navbar-toggleable-md navbar-inverse bg-inverse">
//         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <a className="navbar-brand" href="#">Listtr</a>
//         <div className="collapse navbar-collapse" id="navbarExample">
//           <ul className="sidebar-nav navbar-nav">
//             <li className="nav-item active">
//               <a className="nav-link" href="#" id="HostingNav" onClick={this.onClick}><i className="fa fa-fw fa-list" /> Hosting</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" id="AttendingNav" onClick={this.onClick}><i className="fa fa-fw fa-area-chart" /> Attending</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" id="AccountNav" onClick={this.onClick}><i className="fa fa-fw fa-user" /> Account</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" id="Billing" onClick={this.onClick}><i className="fa fa-fw fa-credit-card" /> Billing</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" id="Logout" onClick={this.onClick}><i className="fa fa-fw fa-sign-out" /> Logout</a>
//             </li>
//             </ul>
//
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item dropdown">
//
//             </li>
//             <li className="nav-item dropdown">
//
//             </li>
//             <li className="nav-item">
//
//             </li>
//
//           </ul>
//         </div>
//       </nav>
//
//       <div class="content-wrapper py-3">
//       <div className="container-fluid">
//           {/*BREADCRUMBSS*/}
//         {/*  <ol className="breadcrumb">
//               <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
//               <li class="breadcrumb-item active">My Dashboard</li>
//           </ol> */}
//
//          {/*MAIN CONTENT AREA*/}
//             <div className="row">
//                 <div class="col-xl-3 col-sm-6 mb-3">
//                   {/*<MainContent />*/}
//                 </div>
//             </div>
//
//         </div>
//         </div>
//
//
// </div>


// <div className="main-container">
//
//   {isLoggedIn
//     ? (
//       <div>
//         <nav className="navbar fixed-top navbar-toggleable-sm navbar-inverse bg-primary mb-3" id="navbar-dashboard">
//           <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
//             <span className="navbar-toggler-icon"/>
//           </button>
//           <div className="flex-row d-flex">
//             <a className="navbar-brand mb-1" href="/dashboard" title="LISTT" id="dashboardHeaderTitle">Listtr</a>
//             <button type="button" className="hidden-md-up navbar-toggler" data-toggle="offcanvas" title="Toggle responsive left sidebar">
//               <span className="navbar-toggler-icon"/>
//             </button>
//           </div>
//           <div className="navbar-collapse collapse" id="collapsingNavbar">
//             <ul className="navbar-nav">
//               <li className="nav-item active">
//                 <a className="nav-link" href="">Hosting
//                   <span className="sr-only">Hosting</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="">Attending</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="" data-toggle="collapse">Account</a>
//               </li>
//             </ul>
//           </div>
//
//         </nav>
//         <div id="main">
//           <div className="row-offcanvas row-offcanvas-left">
//             <div className="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
//               <div className="list-group">
//                 <ul className="nav flex-column pl-1">
//                   <a href="#" className="list-group-item disabled">
//                     Events
//                   </a>
//                   <li className="nav-item">
//                     <a href="#" className="list-group-item" id="HostingNav" onClick={this.onClick}>Hosting</a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#" className="list-group-item" id="AttendingNav" onClick={this.onClick}>Attending</a>
//                   </li>
//                   <a href="#" className="list-group-item disabled">
//                     Settings
//                   </a>
//                   <li className="nav-item">
//                     <a href="#" className="list-group-item" id="AccountNav" onClick={this.onClick}>Account</a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#" className="list-group-item" id="Billing" onClick={this.onClick}>Billing</a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#" className="list-group-item" id="Logout" onClick={this.logout}>Logout</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/*/col*/}
//             <div className="col-md-9 col-lg-10 main">
//               {/*toggle sidebar button
//                   <p class="hidden-md-up">
//                       <button type="button" class="btn btn-primary-outline btn-sm" data-toggle="offcanvas"><i class="fa fa-chevron-left"></i> Menu</button>
//                   </p>*/}
//               <MainContent/>
//             </div>
//           </div>
//         </div>
//         {/*scripts loaded here*/}
//       </div>
//
//       )
//         : (<Loading/>)}
// </div>
