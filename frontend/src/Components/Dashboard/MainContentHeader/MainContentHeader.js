import React, {PropTypes} from 'react';
import {
    LineChart, Line,
    BarChart, Bar,
    Tooltip
} from 'recharts';

/**
* IMPORT CSS STYLYING
**/
import './MainContentHeader.css'

export default class MainContentHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view-header d-flex align-items-center">
          <header className="text-white">
              <h1 className="h5 title text-uppercase">Dashboard</h1>
              <p className="mb-0 subtitle text-nowrap">Latest statistics&nbsp;<span className="hidden-sm-down">&amp; summary</span></p>
          </header>
          <div className="ml-auto d-flex mt-2">
          </div>
      </div>

    );
  }
}

MainContentHeader.propTypes = {
};
