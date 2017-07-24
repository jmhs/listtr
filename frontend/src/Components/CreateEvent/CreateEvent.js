import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {postEvents} from '../../Actions/Event'
import PopulateGuests from '../PopulateGuests/PopulateGuests'

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events:{},
    eventImage: null
  };

}

//saves user's input into local state before sending to "actons" together
  onChange = (e) => {
    let state = this.state;
    let object = {}
    // if(e.target.name == "title") {
    //   state.title = e.target.value;
    // }
    //
    // if(e.target.name == "date") {
    //   state.date = e.target.value;
    // }
    //
    // if(e.target.name == "description") {
    //   state.description = e.target.value;
    // }
    //
    // if(e.target.name == "location") {
    //   state.location = e.target.value;
    // }
    object[e.target.name] = e.target.value

    this.setState({
      events:object
    });
    console.log(state)
  }



//Accesses uploded files via files[0] and appends to state
  imageUpload = (e) => {
    let eventImage = e.target.files[0]
  this.setState({
    eventImage: eventImage
  })

}

// if loop for when create button pressed with & without image(different actions)
  onClick = (e) => {
    this.props.postEvents(this.state.eventImage,this.state.events)
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

        <input name="file" type="file" onChange={this.imageUpload}/>

      </section>
    );
  }
}

CreateEvent.propTypes = {
};


const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    postEvents: (pic,events) => {dispatch(postEvents(pic,events))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
