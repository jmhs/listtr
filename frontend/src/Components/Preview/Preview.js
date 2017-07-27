import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { activeEvent, deleteEvent} from '../../Actions/Event';
import './Preview.css';
import { Button, Modal } from 'semantic-ui-react'


class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })



  onDelete= () => {
    console.log('delete pressed')
    this.props.deleteEvent(this.props.events)

  }


  render() {
    const { open, size } = this.state
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

      <button type="button"
              className="btn btn-default"
              onClick={this.onDelete}>Edit</button>





           <div>

             <Button onClick={this.show('small')}>Small</Button>
             <Modal size={size} open={open} onClose={this.close}>
               <Modal.Header>
                 Delete Your Event
               </Modal.Header>
               <Modal.Content>
                 <p>Are you sure you want to delete your account</p>
               </Modal.Content>
               <Modal.Actions>
                 <Button negative>
                   No
                 </Button>
                 <Button positive icon='checkmark' labelPosition='right' content='Yes' />
               </Modal.Actions>
             </Modal>
         </div>



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
    activeEvent: (event) => {dispatch(activeEvent(event))},
    deleteEvent: (event) => {dispatch(deleteEvent(event))},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
