const Events = (state = [], action) => {
  switch (action.type) {
    case "STORE_EVENTS":
    return action.events;
    break;

    case "STORE_GUESTS":
    return [
      ...state,
      {
        events: state.events,
        guests : action.guests,

      }
    ]

      break;
    default:
      return state;

  }
}

export default Events;
