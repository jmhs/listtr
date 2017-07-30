import axios from 'axios'

export const getEventFromGuestId = (guest_id, event) => {
  return (dispatch) => {
    axios.get('/event/guest/:guest_id', event)
    .then((response) => {
      console.log(response);
      console.log("AJAX: Getting event guest_id belongs to@ '/event/guest/:guest_id'");
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}
