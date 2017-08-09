const io = require('socket.io-client/dist/socket.io.js');
const socket = io.connect('https://13.229.53.198/');

export const fetchLiveEventData = (eventID) => {
  return (dispatch) => {
    socket.emit('getAllGuests', eventID);
    socket.on('guest list', (data) => {
      console.log(data);
      dispatch(storeLiveEventDetails(data))
    })
  }
}

export const updateLiveEventData = (newevent) => {
  return (dispatch) => {
    socket.emit('updateGuestlist', newevent);
    // socket.on('updatedEvent', (data) => {
    // console.log(data);
    // dispatch(storeLiveEventDetails(data))
    // })
  }
}





export const fetchupdateLiveEventData = () => {
  return (dispatch) => {
    socket.on("updatedEvent", (data) => {
      console.log("updatedEvent", data);
      dispatch(updateLiveEventDetails(data))
    })
  }
}

export const storeLiveEventDetails = (event) => {
  return {type: "STORE_DETAILS", event}
}

export const updateLiveEventDetails = (event) => {
  return {type: "UPDATE_EVENT", event}
}
