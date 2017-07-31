const initState = {
  createEvent: "",
  deleteEvent: ""
}
const ResponseAJAX = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS_RESPONSE":
    return {
      createEvent: action.response,
      deleteEvent: state.deleteEvent
    }
    break;
    case "SUCCESS_DELETE_EVENT":
    return {
      createEvent: state.createEvent,
      deleteEvent: action.response
    }
    break;




    default:
      return state;

  }
}

export default ResponseAJAX;
