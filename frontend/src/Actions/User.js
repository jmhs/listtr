import axios from 'axios';
import { store } from '../index.js';
import { push, replace } from 'react-router-redux';

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

export const localLogin = (credentials) => {
  return(dispatch) => {
    axios.post('/auth/login', credentials)
    .then((response) => {
      const data = response.data;
      //dispatch(getUser());
      if(data.error){
        console.log(data.message);
        // dispatch(triggerNotification());
        // dispatch(userNotification(data.message));
      }else {
        console.error("AJAX: Logged on @ '/auth/user'");
        //react-router-redux to dispatch routes from non-components
        store.dispatch(replace('/dashboard'));
        // get user credentials here; dispatch notification as callback after user has been authenticated by passport
        // const cbArray = [
        //   () => {dispatch(triggerNotification())},
        //   () => {dispatch(userNotification("Welcome"))}
        // ];
        // dispatch(getUser(cbArray));
        //window.location.href = "/";
      }
    })
    .catch((error) => {
      console.error("AJAX: Logged on @ '/auth/login'");
      console.log(error);
    });
  }
}

export const initUser = (user={isFetching: true}) => {
  return {
    type: "INIT_USER",
    user
  }
}
