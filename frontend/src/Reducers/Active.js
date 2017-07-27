let update = require('react/lib/update')
const ActiveHome = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_EVENT':
      return action.event
      break;
    case "STORE_GUEST":
      action.active.guests.push(action.guest)
    return action.active

      break;
    default:
      return state
  }
}

export default ActiveHome;
