const Navigation = (state = [], action) => {
  switch (action.type) {

    case "UPDATE_NAVPATH":
    return [
      ...state,console.log(action),
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
