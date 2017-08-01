import React, {PropTypes} from 'react';
import './NotFound.css'
import {Link} from 'react-router-dom'
export default class NotFound extends React.Component {


  render() {
    return (
      <div className="container-not-found">
      <div className="text-not-found">
        <h1 id="not-found-brand">Listtr</h1>
        <h3 id="not-found">404 PAGE NOT FOUND</h3>
        <Link to="/"><button className="uk-button uk-button-default back-to-home-button">Back to Home</button></Link>
      </div>
      </div>
    );
  }
}
