import React, {PropTypes} from 'react';

import './TestingDashboard.css'

export default class TestingDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
      {/*HEADER ROW SEGMENT*/}
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
              <a id="Logout" onClick={this.onClick}><i className="fa fa-fw fa-sign-out"/> Logout </a>
            </li>
            </ul>

          </div>
        {/*end SIDEBARNAV SEGMENT*/}


          <div className="col-xs-10" id="contentwrapper">


            <div className="row">
              <div className="col-md-12" id="contentNavHeader">
                <h1>This should be the header for the current component</h1>
                <hr />
              </div>
              <div className="col-md-12" id="contentToRender">
              contentToRender
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

TestingDashboard.propTypes = {};
