const initState = {
  createEvent: "",
  deleteEvent: "",
  addCollab: "",
  createInvite: "",
  sendInvite: ""
}
const ResponseAJAX = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS_RESPONSE":
    return {
      createEvent: action.response,
      deleteEvent: state.deleteEvent,
      addCollab: state.addCollab,
      createInvite: state.createInvite,
      sendInvite: state.sendInvite
    }
    break;
    case "SUCCESS_DELETE_EVENT":
    return {
      createEvent: state.createEvent,
      deleteEvent: action.response,
      addCollab: state.addCollab,
      createInvite: state.createInvite,
      sendInvite: state.sendInvite
    }
    break;
    case "SUCCESS_ADD_COLLAB":
    return {
      createEvent: state.createEvent,
      deleteEvent: state.deleteEvent,
      addCollab: action.response,
      createInvite: state.createInvite,
      sendInvite: state.sendInvite
    }
    break;
    case "FAIL_ADD_COLLAB":
    return {
      createEvent: state.createEvent,
      deleteEvent: state.deleteEvent,
      addCollab: action.response,
      createInvite: state.createInvite,
      sendInvite: state.sendInvite
    }
    break;
    case "SUCCESS_CREATE_INVITE":
    return {
      createEvent: state.createEvent,
      deleteEvent: state.deleteEvent,
      addCollab: state.addCollab,
      createInvite: action.response,
      sendInvite: state.sendInvite
    }
    break;
    case "SUCCESS_SEND_INVITE":
    return {
      createEvent: state.createEvent,
      deleteEvent: state.deleteEvent,
      addCollab: state.addCollab,
      createInvite: state.createInvite,
      sendInvite: action.response
    }
    break;




    default:
      return state;

  }
}

export default ResponseAJAX;
