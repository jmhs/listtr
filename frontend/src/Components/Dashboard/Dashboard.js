import React, {PropTypes} from 'react';

import { connect } from 'react-redux';

import { getUser, updateUser } from '../../Actions/User';

import axios from 'axios';

import SidebarNav from './SidebarNav/SidebarNav';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import MainContentHeader from './MainContentHeader/MainContentHeader';
import MainContentBody from './MainContentBody/MainContentBody';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SidebarNav />
          <DashboardHeader />
          <MainContentHeader />
          <MainContentBody />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
};

// <main className="Content">
//   {this.props.children}
// </main>

// <h1>
// test
// </h1>
// <SidebarNav />
