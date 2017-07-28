const Navigation = (state = {nav:"HostingNav"}, action) => {
  switch (action.type) {

    case "UPDATE_NAVPATH":
    return {
        nav : action.state,
      }
      break;
    default:
      return state;

  }
}

export default Navigation;
