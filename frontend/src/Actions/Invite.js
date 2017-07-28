import axios from 'axios'

//in-charge of sending invite to store
export const storeInvites = (invites) => {
  return {
    type: "STORE_INVITES",
    invites
  }
}

// Sending in invite
export const postInvite = (event_id, invite) => {
  return (dispatch) => {
    axios.put('/event/postInvite/' + event_id, invite)
    .then((response) => {
      console.log(response);
      console.log("AJAX: Created New Invite @ '/invite/postInvite'");
      window.location.href = "/dashboard";
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}
