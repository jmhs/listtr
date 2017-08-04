import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom'

import './ResponseConfirmation.css'

export default class ResponseConfirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" id="responseConfirmationContainer">
        <div className="row">

          <div className="col-sm-6 col-sm-offset-3" id="responseConfirmationHeader">
            <h1>RESPONSE CONFIRMATION</h1>
            <p>Your response has been recorded, see you soon!</p>
            <hr/>
          </div>

        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 backToHomeRow">
            <Link to="/">
              <button className="uk-button uk-button-default" id="responseConfirmationToHome" onClick={this.onClick}>Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ResponseConfirmation.propTypes = {};
