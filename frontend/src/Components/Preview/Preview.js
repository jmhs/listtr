import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { activeEvent} from '../../Actions/Event';
import './Preview.css';
import uikit from './react-uikit-base'
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }



  render() {
    let events = this.props.events
    return (
      <div className ='card'>

      <div className ='cardimage'>
      <img src={events.eventImage}/>
      </div>
      <div>
      <h2>{events.eventName}</h2>
      <h3>{events.location}</h3>
      <h4>{events.description}</h4>
      <h4>{events.startDate}</h4>
      <h4>{events.endDate}</h4>
      <h4>{events.timeStart}</h4>
      <h4>{events.timeEnd}</h4>
      </div>

      <Link to="/guest">
      <button type="button"
              className="btn btn-default"
              onClick={this.onClick}>AddGuest</button>
      </Link>


      <button type="button"
              className="btn btn-default"
              onClick={this.onDelete}>Delete</button>




              <Modal
              show={this.state.show}
              type='alert'
              ok={{context: 'primary'}}
              trigger={{
                body: 'Open',
                animate: {
                  'in': (modal, dialog) => this.animateIn(modal, dialog),
                  out : (modal, dialog) => this.animateOut(modal, dialog)
                }
              }}
            >
              <p>
                This is an alert modal.
              </p>
            </Modal>


          <a className="uk-link-reset" href> Headin </a>

          <div>
            <a className="uk-button uk-button-text" href="#">Read more</a>
          </div>
          <div>
            <a className="uk-button uk-button-text" href="#">5 Comments</a>
          </div>
        </div>



  );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.active,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    activeEvent: (event) => {
      dispatch(activeEvent(event))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
