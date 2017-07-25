import axios from 'axios'

//in-charge of sending events to store
export const storeEvents = (events) => {
  return{
    type: "STORE_EVENTS",
    events
  }
}
//sends guests to store
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
        console.error("AJAX: Could not get events'")
      });
  };
}


//Splits Actions for with and without Image
export const postEvents = (events) => {
  return (dispatch) => {

   if (events.eventImage === null) {
    console.log('No Image Bro')
    axios.post('/event/postEvents', events)
      .then( (response) => {
        console.log(response.data);
        dispatch(storeEvents(response.data))
      })
      .catch((error)=> {
        console.error("event not posted to server'")
      });
  }
  else {
    console.log('Theres an Image!')
    console.log(events)
    let EventDataWithImage = new FormData();
    EventDataWithImage.append('eventImage', pic);
    EventDataWithImage.append('location', events.location);


      axios.post('/event/postEventsWithImage', EventDataWithImage)
        .then( (response) => {
          console.log(response.data);
          dispatch(storeEvents(response.data))
        })
        .catch((error)=> {
          console.error("event not posted to server'")
        });
      };
    }


}


// export function uploadSuccess({ data }) {
//   return {
//     type: 'UPLOAD_DOCUMENT_SUCCESS',
//     data,
//   };
// }
//
// export function uploadFail(error) {
//   return {
//     type: 'UPLOAD_DOCUMENT_FAIL',
//     error,
//   };
// }
