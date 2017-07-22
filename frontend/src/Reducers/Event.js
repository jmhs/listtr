const Events = (state = [], action) => {
  switch (action.type) {
    case "STORE_EVENTS":
    return [
      ...state,console.log(action),
      {
        events : action.events,

      }
    ];
    case "POPULATE_GUESTS":
    return [
      ...state,console.log(action),
      {
        events : action.events,

      }
    ]

      break;
    default:
      return state;

  }
}

export default Events;
