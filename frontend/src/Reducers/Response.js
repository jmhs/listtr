
const ResponseActive = (state = [], action) => {
  switch (action.type) {
    case 'RESPONSE_ACTIVE_EVENT':
      return action.event


      break;
    case "RESPONSE_ACTIVE_GUEST":
      return [...state,{
        activeEvent: state.event,
        guest: action.guest
}]

      break;
    default:
      return state

  }
}

export default ResponseActive;
