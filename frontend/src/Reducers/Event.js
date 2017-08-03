const Events = (state = [], action) => {
  switch (action.type) {
    case "STORE_EVENTS":
    return action.events;
    break;
    case 'DELETE_GUEST_FROM_EVENT_IN_STORE':
      return state.map((event,index) => {
              if(event._id===action.event_id){
                event.guests = event.guests.filter( (guest,index) => {
                  return guest.id !== action.guest.id;
                })
              }
              return event
            })
      break;
    case 'UPDATE_GUEST_INFO_TO_STORE':
      return state.map((event,index) => {
              if(event._id===action.event._id){
                event = action.event
              }
              return event
            })
      break;


    default:
      return state;

  }
}

export default Events;
