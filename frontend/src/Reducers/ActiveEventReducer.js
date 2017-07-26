const ActiveEvent = (state = [], action) => {
  switch (action.type) {
    case 'ACTIVE_EVENT_TO_PREVIEW':
      return action.event;
      break;
    default:
      return state;

  }
}

export default ActiveEvent;
