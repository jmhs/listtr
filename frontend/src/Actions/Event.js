import axios from 'axios'

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

export const storeGuestsToActive = (active, guest) => {
  return{
    type: 'STORE_GUEST_TO_ACTIVE',
    active,
    guest
  }

}
// sends guests to store
export const postGuest = (guest) => {
  return (dispatch) => {
    axios.post('/event/guest', guest)
      .then( (response) => {
        console.log(response.data);
        //dispatch(storeGuests(response.data))
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

export const deleteEvent = (event) => {
    return (dispatch) => {
      console.log(event)
      //t inlcue mechanism to updae store
      axios.delete('/event/'+ event._id )
      .then((response)=>{

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
    EventDataWithImage.append('timeStart', events.startTime);
    EventDataWithImage.append('timeEnd', events.endTime);
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








// export const updateReviewWithPic = (picReview, review) => {
//   return (dispatch) => {
//     // here picReview is a file
//     let picReviewToBackEnd = new FormData();
//     picReviewToBackEnd.append('picReview', picReview);
//     picReviewToBackEnd.append('title', review.title);
//     picReviewToBackEnd.append('star', review.star);
//     picReviewToBackEnd.append('description', review.description);
//     picReviewToBackEnd.append('picReviewPublicId', review.picReviewPublicId)
//
//     // axios function to send info to backend database
//     axios.put('/review/updateReviewWithPic/'+review._id,picReviewToBackEnd)
//     .then( (response)=>{
//       // here picReview is a new url
//       dispatch(updateUserReviewInStore(response.data))
//     }).catch( (error) =>{
//       dispatch(loadingReviewError(error));
//     })
//   }
// }
// export const updateReviewWithoutPic = (review) => {
//   return (dispatch) => {
//     // axios function to send info to backend database
//     axios.put('/review/updateReviewWithoutPic/'+review._id,review)
//     .then( (response)=>{
//       dispatch(updateUserReviewInStore(response.data))
//     }).catch( (error) =>{
//       dispatch(loadingReviewError(error));
//     })
//   }
// }

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
