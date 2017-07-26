const Events = (state = [], action) => {
  switch (action.type) {
    case "STORE_EVENTS":
    return action.events;
    break;

    case "STORE_GUEST":
    return [
      ...state,
      {
        active: action.active,
        active.guests: action.guest

      }
    ]

      break;


    default:
      return state;

  }
}

export default Events;
