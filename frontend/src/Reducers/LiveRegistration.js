const LiveRegistration = (state = [], action) => {
  switch (action.type) {
    case "STORE_DETAILS":
    return action.event;

  break;
  case "UPDATE_EVENT":
    return action.event;

    default:
      return state;

  }
}

export default LiveRegistration;
