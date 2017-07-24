import axios from 'axios';

const updateUser = (user) => {
  return {
    type: "USER_UPDATE",
    user
  }
}

export const getUser = () => {
  return (dispatch) => {
    axios.get('/auth/user')
      .then( (response) => {
        const user = response.data;
        // console.log(response.data);
        dispatch(updateUser(user));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")

      });
  };
}

export const initUser = (user={isFetching: true}) => {
  return {
    type: "INIT_USER",
    user
  }
}
