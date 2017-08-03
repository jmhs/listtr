import React, {PropTypes} from 'react';
import uuid from 'uuid'
import './AddCollab.css'
export default class AddCollab extends React.Component {
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


        <div className="col-md-2 PopulateGuests">
          <button type="button"
                  className="uk-button uk-button-default" id="add-collab-button"
                  onClick={this.onClick}>Add Collaborators</button>
        </div>

      </section>
    );
  }
}
