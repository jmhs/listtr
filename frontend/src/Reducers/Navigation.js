const Navigation = (state = ["HostingNav"], action) => {
  switch (action.type) {

    case "UPDATE_NAVPATH":
    return [
      {
        currentNav : action.state,
      }
    ];
      break;
    default:
      return state;

  }
}

export default Navigation;
