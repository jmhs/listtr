const ActiveHome = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_EVENT':
      return action.event
      break;
    default:
      return state

  }
}

export default ActiveHome;
