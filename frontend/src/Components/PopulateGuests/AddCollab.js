import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import {updateNavPath} from '../../Actions/Navigation'

import './AddCollab.css'

class AddCollab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  onChange = (e) => {


    switch (e.target.name) {

      case 'email':
        this.setState({
          email: e.target.value
        })
        break;

      default:

    }

  }

  onClick = (e) => {

    this.props.addCollabFunction(this.props.event._id, this.state.email)
    this.setState({
      email: "",
    })
  }

  backToEventPreview = (e) => {
    this.setState({currentNav: e.target.id});
    //console.log('new component state', this.state)
    this.props.updateNavPath(e.target.id);
  }

  render() {
    return (
      <section className="row create">

        <div className="col-md-3 price">
          <div className="form-group">
            <input name="email"
                   placeholder="Email"
                   className="uk-input"
                   onChange={this.onChange}
                   value={this.state.email}/>
          </div>
        </div>


        <div className="col-md-8 PopulateGuests">
          <button type="button"
                  className="uk-button uk-button-default" id="add-collab-button"
                  onClick={this.onClick}>Add Collaborators</button>
          <button type="button"
                  className="uk-button uk-button-default" id="collabBackToHome"
                  onClick={this.backToEventPreview}>Back to Event Preview</button>
        </div>


      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNavPath: (currentNav) => {dispatch(updateNavPath(currentNav))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCollab);
