const Events = (state = [], action) => {
  switch (action.type) {
    case "STORE_EVENTS":
    return [
      ...state,console.log(action),
      {
        events : action.events,

      }
    ];
    case "STORE_GUESTS":
    return [
      ...state,
      {
        events: action.events,
        guests : action.guests,

      }
    ]

      break;
    default:
      return state;

  }
}

export default Events;
