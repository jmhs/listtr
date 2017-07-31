const Response = (state = [], action) => {
  switch (action.type) {
    case "SUCCESS_RESPONSE":
    return action.response;
    break;




    default:
      return state;

  }
}

export default Response;
