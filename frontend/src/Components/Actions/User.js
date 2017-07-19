import axios from 'axios';

export const updateUser = (user) => {
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
        const notLoggedIn = {}
          user.isFetching = false
          console.log('user exists', user.isFetching)
          dispatch(updateUser(user));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
        dispatch(updateUser({isFetching: true}));
      });
  };
}

export const initUser = (user={isFetching: true}) => {
  return {
    type: "INIT_USER",
    user
  }
}
