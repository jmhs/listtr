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
    console.log('events', events)
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
    console.log( 'events action', events)
    let EventDataWithImage = new FormData();
    EventDataWithImage.append('eventImage', events.eventImage);
    EventDataWithImage.append('location', events.location);
    EventDataWithImage.append('eventName', events.eventName);
    EventDataWithImage.append('description', events.description);
    EventDataWithImage.append('type', events.type);
    EventDataWithImage.append('dressCode', events.dressCode);
    EventDataWithImage.append('startDate', events.startDate);
    EventDataWithImage.append('endDate', events.endDate);
    EventDataWithImage.append('timeStart', events.startTime);
    EventDataWithImage.append('timeEnd', events.endTime);
    EventDataWithImage.append('user_id', events.user_id);


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
