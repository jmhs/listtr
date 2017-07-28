const Invites = (state = [], action) => {
  switch (action.type) {
    case "STORE_INVITES":
    return action.invites;
    break;




    default:
      return state;

  }
}

export default Invites;
