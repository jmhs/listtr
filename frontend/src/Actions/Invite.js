import axios from 'axios'

export const activeInvite = (invite) => {
  return {
    type: 'ACTIVE_INVITE',
    invite
  }
}

//in-charge of sending invites to store
export const storeInvites = (invites) => {
  return {
    type: "STORE_INVITES",
    invites
  }
}

//update Invite
export const updateInvite = (invites) => {
  return (dispatch) => {
      axios.put('/invite/updateInvites/'+ invites._id, invites)
      .then( (response) => {
        console.log(response.data);
      })
      .catch((error)=> {
        console.error("invite not posted to server'")
      });
  }
}
