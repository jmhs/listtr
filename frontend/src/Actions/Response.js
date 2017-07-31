import axios from 'axios';
import {activeEvent} from './Event.js'

export const activeGuest = (guest) => {
  return {
    type: 'RESPONSE_ACTIVE_GUEST',
    guest
  }
}

//Getting event based on eventid to pass into the store. This is so that we can use it to populate the fields in ResponseDisplay
export const getSpecificEvent = (event_id) => {
  return (dispatch) => {
    axios.get('/event/' + event_id)
      .then( (response) => {
        console.log(response.data);
        dispatch(activeEvent(response.data))
      })
      .catch((error)=> {
        console.error("AJAX: Could not get event'")
      });
  };
}
