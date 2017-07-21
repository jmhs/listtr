import axios from 'axios'
const storeEvents = (events) => {
  return{
    type: "STORE_EVENTS",
    events
  }
}

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
