const LiveRegistration = (state = [], action) => {
  switch (action.type) {
    case "STORE_DETAILS":
    return action.event;

  break;
    case 'DELETE_GUEST_FROM_EVENT_IN_STORE':

    default:
      return state;

  }
}

export default LiveRegistration;
