import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { getEventFromGuestId } from '../../../Actions/Response';

class ResponseVerification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestid: ''
    }
  }

onChange = (e) => {
  switch (e.target.name) {
    case 'invitationVerificationKey':
      this.setState({
        guestid: e.target.value
      })
      break;

      default:
    }
}

onClick = (e) => {
  e.preventDefault();
  console.log("clicked getEventFromGuestId!");
  this.props.getEventFromGuestId(this.state);
}


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>RESPONSE VERIFICATION</h1>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
          <div className="form-group">
            <label htmlFor="invitationVerificationKey">Invitation Verification Key:</label>
            <input type="text"
                   className="form-control"
                   id="invitationVerificationKeyInput"
                   placeholder="Input Invitation Verification Key"
                   defaultValue=''
                   onChange={this.onChange}
                   name="invitationVerificationKey"/>
          </div>
          <hr/>
          <button className="uk-button uk-button-primary"
                  id="invitationVerificationKeyBtn" onClick={this.onClick}>Submit</button>
          </div>
          </div>
          </div>
    );
  }
}

ResponseVerification.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getEventFromGuestId: (guestid) => {dispatch(getEventFromGuestId(guestid))},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResponseVerification);
