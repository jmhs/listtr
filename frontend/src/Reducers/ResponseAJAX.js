const initState = {
  createEvent: "",
  deleteEvent: "",
  addCollab: ""
}
const ResponseAJAX = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS_RESPONSE":
    return {
      createEvent: action.response,
      deleteEvent: state.deleteEvent,
      addCollab: state.addCollab
    }
    break;
    case "SUCCESS_DELETE_EVENT":
    return {
      createEvent: state.createEvent,
      deleteEvent: action.response,
      addCollab: state.addCollab
    }
    break;
    case "SUCCESS_ADD_COLLAB":
    return {
      createEvent: state.createEvent,
      deleteEvent: state.deleteEvent,
      addCollab: action.response
    }
    break;
    case "FAIL_ADD_COLLAB":
    return {
      createEvent: state.createEvent,
      deleteEvent: state.deleteEvent,
      addCollab: action.response
    }
    break;




    default:
      return state;

  }
}

export default ResponseAJAX;
