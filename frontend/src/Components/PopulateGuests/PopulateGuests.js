import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {storeGuests} from '../../Actions/Event'
import RenderGuests from './RenderGuests'

class PopulateGuests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    name: "",
    email: "",
    contact:"",

};
  }

//saves user's input into local state before sending to "actons" together
  onChange = (e) => {
    let state = this.state;

    if(e.target.name == "name") {
      state.name = e.target.value;
    }

    if(e.target.name == "email") {
      state.email = e.target.value;
    }

    if(e.target.name == "contact") {
      state.contact = e.target.value;
    }

    this.setState(state);
    console.log(state)
  }

  onClick = (e) => {

    this.props.storeGuests(this.state);

  }
  render() {
    return (
      <section className="row create">
        <div className="col-md-2 title">
          <div className="form-group">
            <input type="text"
                   name="name"
                   placeholder="title"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.name}/>
          </div>
        </div>
        <div className="col-md-2 price">
          <div className="form-group">
            <input name="email"
                   placeholder="email"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.email}/>
          </div>
        </div>
        <div className="col-md-2 title">
          <div className="form-group">
            <input name="contact"
                   placeholder="contact"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.contact}/>
          </div>
        </div>

        <div className="col-md-2 PopulateGuests">
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Add Guest</button>
        </div>
        <RenderGuests/>
      </section>);
  }
}

PopulateGuests.propTypes = {
};

//export default PopulateGuests;
const mapStateToProps = (state) => {
  return {
    guests: state.guests,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    storeGuests: (guests) => {dispatch(storeGuests(guests))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopulateGuests);//to include guest population
