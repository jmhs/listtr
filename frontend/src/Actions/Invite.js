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

// POSTING guest email invite request to server. Server will send out email invite.
export const handleEmail = (event_id, event) => {
  return (dispatch) => {
    axios.post('/email/' + event_id, event)
    .then((response) => {
      console.log('sending handleEmail action to server..');
      console.log(response);
      console.log("AJAX: Posting guest emails @ '/email'");
      // window.location.href = "/dashboard";
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}

// POSTING guest email invite request to server. Server will send out email invite.
export const reminderEmail = (event_id, event) => {
  return (dispatch) => {
    axios.post('/email/' + event_id +'/reminder', event)
    .then((response) => {
      console.log('sending reminderEmail action to server..');
      console.log(response);
      console.log("AJAX: Posting reminder emails @ '/email'");
      // window.location.href = "/dashboard";
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}





// retrieving guest emails
// export const getEventGuestEmails = (event_id, event) => {
//   return (dispatch) => {
//     axios.get('/event/getEventGuestEmails/' + event_id, event)
//     .then((response) => {
//       console.log(response);
//       console.log("AJAX: Getting guest emails @ '/:event_id/guests/email'");
//       window.location.href = "/dashboard";
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
//   }
// }



// // Sending in invite
// export const postEmail = (event_id, invite) => {
//   return (dispatch) => {
//     axios.put('/email/' + event_id, invite)
//     .then((response) => {
//       console.log(response);
//       console.log("AJAX: Created New Invite @ '/invite/postInvite'");
//       window.location.href = "/dashboard";
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
//   }
// }
