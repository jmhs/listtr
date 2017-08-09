import axios from 'axios';
import { store } from '../index.js';
import { push } from 'react-router-redux';

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
        store.dispatch(push('/'));
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
