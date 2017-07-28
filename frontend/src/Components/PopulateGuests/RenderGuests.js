import React, {PropTypes} from 'react';
import './RenderGuests.css'
export default class RenderGuests extends React.Component {
  constructor(props) {
    super(props);
  }
  toDelete = () => {
    console.log('delete clicked')
    let id = this.props.id;
    this.props.removeGuestRow(id);

  }
  render() {
    return (
      <div className="col-sm-12 render-guests-row">
        <div className="col-sm-3">
          {this.props.name}
        </div>
        <div className="col-sm-3">
          {this.props.email}
        </div>
        <div className="col-sm-3">
          {this.props.contact}
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger" onClick={this.toDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
