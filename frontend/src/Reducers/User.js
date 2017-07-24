const UserReducer = (state = {}, action) => {

  //console.log(action);
  switch (action.type) {

    case "USER_UPDATE":
        return action.user || {};
        break;

    case "INIT_USER":
        return action.user;
        break;
    default:
        return state;
  }
}


export default UserReducer;
