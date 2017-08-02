import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import './RenderGuests.css'
import {updateGuestInfoToStore} from '../../Actions/Event'
class RenderGuests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      name: this.props.name,
      email: this.props.email,
      contact: this.props.contact,
      response: this.props.response,
      id: this.props.id,
      checkedIn: this.props.guestDetails.checkedIn

    }
  }
  toDelete = () => {
    console.log('delete clicked')
    let id = this.props.id;
    this.props.removeGuestRow(id);

  }
  toUpdate = () => {
    if (this.state.editing){
      this.setState({
        editing: false
      })
      let guest = {
        name: this.state.name,
        email: this.state.email,
        contact: this.state.contact,
        response: this.state.response,
        id: this.state.id,
        checkedIn: this.state.checkedIn
      }
      this.props.updateGuestInfoToStore(this.props.active._id, guest)
    } else {
      this.setState({
        editing: true
      })
    }
    
  }
  onChange = (e) => {
    switch(e.target.name){
      case 'name':
        this.setState({
          name: e.target.value
        })
        break;
      case 'email':
          this.setState({
            email: e.target.value
          })
          break;
      case 'contact':
            this.setState({
              contact: e.target.value
            })
            break;
      case 'response':
          this.setState({
            response: e.target.value
          })
          break;
      default: this.state
    }
  }
  render() {
    return (
      <div className="col-sm-12 render-guests-row">
        <div className="col-sm-3">
          {this.state.editing ? <input className="uk-input" name="name" value={this.state.name} onChange={this.onChange}/> : this.state.name}
        </div>
        <div className="col-sm-3">
          {this.state.editing ? <input className="uk-input" name="email" value={this.state.email} onChange={this.onChange}/> : this.state.email}
        </div>
        <div className="col-sm-3">
          {this.state.editing ? <input className="uk-input" name="contact" value={this.state.contact} onChange={this.onChange}/> : this.state.contact}
        </div>
        <div className="col-sm-1">
          {this.state.editing ? <input className="uk-input" name="response" value={this.state.response} onChange={this.onChange}/> : this.state.response}
        </div>
        <div className="col-sm-1">
          <button type="button" className="btn btn-danger" onClick={this.toDelete}>Delete</button>
        </div>
        <div className="col-sm-1">
          <button type="button" className="btn btn-primary" onClick={this.toUpdate}>Update</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.active
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    updateGuestInfoToStore: (active_id, event) => {dispatch(updateGuestInfoToStore(active_id, event))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderGuests);//to include guest population