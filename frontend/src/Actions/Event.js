import axios from 'axios'
import {successResponse, successDeleteEvent} from './ResponseAJAX.js'
export const activeEvent = (event) => {
  return {
    type: 'ACTIVE_EVENT',
    event
  }
}


//in-charge of sending events to store
export const storeEvents = (events) => {
  return {
    type: "STORE_EVENTS",
    events
  }
}
const deleteGuestFromEvent = (event_id, guest) => {
  return {
    type: "DELETE_GUEST_FROM_EVENT_IN_STORE",
    event_id,
    guest
  }
}

export const deleteGuest = (event_id, guest) => {
  return (dispatch) => {
    // dispatch(deleteGuestInStore(guest.id));
    dispatch(deleteGuestFromEvent(event_id, guest));

    axios.put('/event/guest/deleteGuest/'+event_id, guest)
    .then( (response)=>{
      console.log(response.data)
    }).catch( (error) =>{
      // dispatch(loadingReviewError(error));
    })
  };
}

export const storeGuestsToActive = (active, guest) => {
  return{
    type: 'STORE_GUEST_TO_ACTIVE',
    active,
    guest
  }

}
// sends guests to store
export const postGuest = (event_id, guest) => {
  return (dispatch) => {
    axios.put('/event/guest/' + event_id, guest)
      .then( (response) => {
        console.log(response.data);

        // dispatch(storeGuests(response.data))

      })
      .catch((error)=> {
        console.error("guest not posted to server'")
      });
  }
}

//in-charge of defining the action to store the event into the store
export const getEvents = () => {
  return (dispatch) => {
    axios.get('/event')
      .then( (response) => {
        // console.log(response.data);
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
        dispatch(activeEvent(response.data))
        dispatch(successResponse())
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
    EventDataWithImage.append('timeStart', events.timeStart);
    EventDataWithImage.append('timeEnd', events.timeEnd);
    EventDataWithImage.append('user_id', events.user_id);


      axios.post('/event/postEventsWithImage', EventDataWithImage)
        .then( (response) => {
          console.log(response.data);
          dispatch(activeEvent(response.data))
          dispatch(storeEvents(response.data))
          dispatch(successResponse())
        })
        .catch((error)=> {
          console.error("event not posted to server'")
        });
      };
    }

}

export const deleteEvent = (event) => {
    return (dispatch) => {
      console.log(event)
      //t inlcue mechanism to updae store
      axios.delete('/event/'+ event._id )
      .then((response)=>{
        dispatch(successDeleteEvent())
        setTimeout(window.location.href="/dashboard", 2000);

      })
      .catch((error)=>{

      })

    }
}


//Splits Actions for with and without Image
export const updateEvent = (events) => {
  return (dispatch) => {

   if (typeof events.eventImage == "string") {
    console.log('Image not changed Bro')
      axios.put('/event/updateEvents/'+ events._id, events)
      .then( (response) => {
        console.log(response.data);
        // dispatch(storeEvents(response.data))
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
    EventDataWithImage.append('timeStart', events.timeStart);
    EventDataWithImage.append('timeEnd', events.timeEnd);
    EventDataWithImage.append('user_id', events.user_id);


      axios.put('/event/updateEventsWithImage/'+ events._id, EventDataWithImage)
        .then( (response) => {
          console.log(response.data);

          // dispatch(storeEvents(response.data))
        })
        .catch((error)=> {
          console.error("event not posted to server'")
        });
      };
    }


}

export const updateGuestInfoToStore = (event_id, guest) => {
  return (dispatch) => {
    axios.put('/event/guest/update/' + event_id, guest)
      .then( (response) => {
        console.log(response.data);

        // dispatch(storeGuests(response.data))

      })
      .catch((error)=> {
        console.error("guest not posted to server'")
      });
  }
}