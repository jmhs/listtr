import axios from 'axios'

//in-charge of sending events to store
export const storeEvents = (events) => {
  return{
    type: "STORE_EVENTS",
    events
  }
}
export const storeGuests = (guests) => {
  return {
    type: 'STORE_GUESTS',
    guests
  }
}

//in-charge of defining the action to store the event into the store
export const getEvents = () => {
  return (dispatch) => {
    axios.get('/event')
      .then( (response) => {
        console.log(response.data);
        dispatch(storeEvents(response.data))
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
      });
  };
}

export const postEvents = () => {
  return (dispatch) => {
    axios.post('/event')
      .then( (response) => {
        console.log(response.data);
        dispatch(storeEvents(response.data))
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
      });
  };
}
