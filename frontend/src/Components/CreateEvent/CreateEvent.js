import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {CreateEvents} from '../../Actions/CreateEvent'

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    title: "",
    date: "",
    description:"",
    location:""

};
  }

//saves admin's input into local state before sending to actons together
  onChange = (e) => {
    let state = this.state;

    if(e.target.name == "title") {
      state.title = e.target.value;
    }

    if(e.target.name == "date") {
      state.date = e.target.value;
    }

    if(e.target.name == "description") {
      state.description = e.target.value;
    }
    if(e.target.name == "location") {
      state.location = e.target.value;
    }

    this.setState(state);
  }

  onClick = (e) => {
    const consolidatedevents = [this.state]
    console.log(consolidatedevents)
    this.props.CreateEvents(consolidatedevents);

  }
  render() {
    return (
      <section className="row create">
        <div className="col-md-2 title">
          <div className="form-group">
            <input type="text"
                   name="title"
                   placeholder="title"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.title}/>
          </div>
        </div>
        <div className="col-md-2 price">
          <div className="form-group">
            <input name="date"
                   placeholder="date"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.date}/>
          </div>
        </div>
        <div className="col-md-2 title">
          <div className="form-group">
            <input name="description"
                   placeholder="description"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.description}/>
          </div>
        </div>
        <div className="col-md-2 title">
          <div className="form-group">
            <input name="location"
                   placeholder="location"
                   className="form-control"
                   onChange={this.onChange}
                   value={this.state.location}/>
          </div>
        </div>
        <div className="col-md-2 createEvent">
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Create</button>
        </div>
      </section>);
  }
}

CreateEvent.propTypes = {
};

//export default CreateEvent;
const mapStateToProps = (state) => {
  console.log(state)
  return {
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    CreateEvents: () => {dispatch(CreateEvents())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
