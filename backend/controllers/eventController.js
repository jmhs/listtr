import Event from '../models/Event';
import User from '../models/User'
import cloudinary from 'cloudinary';
import fs from 'fs';
import multer from 'multer';
const upload = multer({ dest: './uploads/events' });


exports.getEvents = (req, res) => {
  Event.find({}, (err, event) => {
    if(err){console.log(err); return;}
    res.json(event)
  })
}

// Controller accepts callback 'cb' as an argument
// Cb will only exceute on completion of async database operation 'Queue.find()'
exports.getGuestlist = (eventId,  cb) => {
  Event.findById(eventId, (err, guestlist) => {
      cb(guestlist);
  })
};

exports.updateGuestlist = (event,  cb) => {
  Event.findById(event._id, (err, receivedEvent) => {
    receivedEvent.guests = event.guests;
    receivedEvent.save((err) => {
      if (err) { return (err); }
    });
    cb(receivedEvent);
  });
};

exports.getSpecificEvent = (req, res) => {
  Event.findOne({'_id':req.params.event_id},(err,event) => {
    if(err){console.log(err); return;}
    res.json(event);
  })
}

exports.postGuest = (req, res) => {
   console.log(req.body);
   console.log('Inside if')
  Event.findById(req.params.event_id, (err, event) => {
    if (err) { return err; }
    console.log('event', event)
    event.guests.push(req.body)
    event.save((err) => {
      if (err) { return (err); }
      console.log(event);

    });
    res.json(event);
  })
}

exports.updateGuestInfo = (req, res) => {
   console.log(req.body);
   console.log('Inside if')
  Event.findById(req.params.event_id, (err, event) => {
    if (err) { return err; }
    console.log('event', event)

    let editedGuest = event.guests.filter((guest, index) => {
      return guest.id === req.body.id
    })

    let guestOldArray = event.guests.filter((guest, index) => {
      return guest.id !== req.body.id
    })
    editedGuest = editedGuest[0]
    console.log(editedGuest)
    console.log(guestOldArray)
    editedGuest.name = req.body.name
    editedGuest.email = req.body.email
    editedGuest.contact = req.body.contact
    editedGuest.response = req.body.response

    guestOldArray.push(editedGuest)
    event.guests = guestOldArray;
    event.markModified('guests');
    event.save((err) => {
      if (err) { return (err); }
      console.log(event);

    });
    res.json(event);
  })
}

exports.deleteGuest =(req, res) => {
  Event.findOne({'_id':req.params.event_id},(err, event) => {

    if(err){console.log(err); return;}


    // let newArray = event.guests;
    let newArray = event.guests.filter( (guest,index) => {
      return guest.id !== req.body.id;
    })

    event.guests = newArray;
    event.save((err) => {
      if (err) { return (err); }
      console.log(event);

    });
  })

}

exports.addNewHost = (req, res) => {
  let userId = "";
  console.log('email is', req.body.email)
  User.findOne({'email':req.body.email}, (err, user) => {
    if (err){
      console.log('error!', err);
      res.json('notuser')
      return;
    }
    else{
      if(user === null){
        res.json('not user')
      }

      else if(user !== null){
        res.json('user')
        userId = user._id
        user.hostFor.push(req.params.event_id)
        user.save((err) => {
          if (err) { console.log('error!', err); return; }
          console.log('updated user');

        });
      }

    }

  });
  if(userId !== ""){
    Event.findOne({'_id':req.params.event_id},(err, event) => {

      if(err){console.log(err); return;}
      event.hosts.push(userId)
      event.save((err) => {
        if (err) { return (err); }
        console.log(event);

      });
    })
  }

}
//logic for incoming data for events
exports.postEvent = (req, res) => {
   console.log(req.body);
   console.log('Inside if')
   const newEvent = new Event({
    eventImage:  "",
    eventName: req.body.eventName || "",
    type: req.body.type || "" ,
    description: req.body.description || "",
    dressCode: req.body.dressCode || "",
    location: req.body.location || "",

    startDate: req.body.startDate || "",
    endDate: req.body.endDate || "",
    timeStart: req.body.timeStart || "",
    timeEnd: req.body.timeEnd || "",
  });
  newEvent.hosts.push(req.body.user_id);
  newEvent.save((err) => {
    if(err){console.log(err); return;}

    res.json(newEvent);
    console.log("problem")
  });
  User.findOne({'_id':req.body.user_id}, (err, user) => {
    if (err){console.log('error!', err); return;}
    console.log("newEvent", newEvent)
    console.log('user', user)
    user.hostFor.push(newEvent._id)
    user.save((err) => {
      if (err) { console.log('error!', err); return; }
      console.log('updated user');

    });
  });
}

exports.postEventsWithImage = (req, res) => {
    cloudinary.uploader.upload(req.file.path,(result) => {
    console.log('with image')
    console.log(req.body)
    const newEvent = new Event({
      eventImage : result.secure_url||"",
      eventImagePublicId: result.public_id||"",
      eventName: req.body.eventName || "",
      type: req.body.type || "" ,
      description: req.body.description || "",
      dressCode: req.body.dressCode || "",
      location: req.body.location || "",

      startDate: req.body.startDate || "",
      endDate: req.body.endDate || "",
      timeStart: req.body.timeStart || "",
      timeEnd: req.body.timeEnd || ""
    });
    newEvent.hosts.push(req.body.user_id);
    newEvent.save((err, events) => {
      if(err){console.log(err); return;}

      res.json(newEvent);
      console.log("problem")
    });
    User.findOne({'_id':req.body.user_id}, (err, user) => {
      if (err){console.log('error!', err); return;}
      console.log("newEvent", newEvent)
      console.log('user', user)
      user.hostFor.push(newEvent._id)
      user.save((err) => {
        if (err) { console.log('error!', err); return; }
        console.log('updated user');

      });
    });
  })
  .then(
    fs.unlink(req.file.path, (err) => {
      if (err) {
            console.log("failed to delete local image:"+ err);
        } else {
            console.log('successfully deleted local image');}
    })
  );
}

exports.updateEvents = (req,res) => {
  Event.findOne({'_id':req.params.event_id}, (err,event) => {
    console.log(event ,req.body, "update events incoming"),
    event.eventImage = req.body.secure_url||event.eventImage,
    event.eventImagePublicId= req.body.public_id||event.eventImagePublicId,
    event.eventName= req.body.eventName || event.eventName,
    event.type = req.body.type || event.type ,
    event.description= req.body.description || event.description,
    event.dressCode= req.body.dressCode || event.dressCode,
    event.location= req.body.location || event.location,

    event.startDate= req.body.startDate || event.startDate,
    event.endDate= req.body.endDate || event.endDate,
    event.timeStart= req.body.timeStart || event.timeStart,
    event.timeEnd= req.body.timeEnd || event.timeEnd

    event.save((err)=>{
      console.log(event)
      if(err){console.log(err); return;}
      res.json(event)
    });
  });
}

exports.updateEventsWithImage = (req,res) => {
  Event.findOne({'_id':req.params.event_id}, (err,event) => {
    event.eventName= req.body.eventName || event.eventName,
    event.type= req.body.type || event.type ,
    event.description= req.body.description || event.description,
    event.dressCode= req.body.dressCode || event.dressCode,
    event.location= req.body.location || event.location,

    event.startDate= req.body.startDate || event.startDate,
    event.endDate= req.body.endDate || event.endDate,
    event.timeStart= req.body.timeStart || event.timeStart,
    event.timeEnd= req.body.timeEnd || event.timeEnd

    cloudinary.uploader.upload(req.file.path,(result) => {
      event.eventImage = result.secure_url|| event.eventImage,
      event.save((err)=>{
      if(err){console.log(err); return;}
      res.json(event)
      });
    }, {public_id: req.body.eventImagePublicId}) //updates the prev image on cloudinary
    .then(
      fs.unlink(req.file.path, (err) => {
        if (err) {
              console.log("failed to delete local image:"+ err);
          } else {
              console.log('successfully deleted local image');
          }
      })
    );
  });
}

exports.deleteEvent = (req,res) => {
  Event.findOneAndRemove({'_id':req.params.event_id}, (err,event) => {
    // other updates this event is linked to
    // Restaurant.findOneAndUpdate({'_id':event.restaurant}, {
    //   '$pull':{'events': req.params.id}
    // },(err, restraurant) => {
    //   if(err){console.log(err); return;}
    // })
    //
    User.findOneAndUpdate({'_id':event.hosts},{
      '$pull':{'hostFor': req.params.event_id}
    },(err, user) => {
      if(err){console.log(err); return;}
    })
    if(err){console.log(err); return;}
    res.json(event);
  })

}

//logic for incoming data for events
exports.postInvite = (req, res) => {
   console.log(req.body);
   console.log('Inside if')
   Event.findById(req.params.event_id, (err, event) => {
     if (err) { return err; }
     console.log('event', event)
     if (event.invites.length > 0) {
       event.invites.pop(req.body)
       event.invites.push(req.body)
     } else {
       event.invites.push(req.body)
     }
     event.save((err) => {
       if (err) { return (err); }
       console.log(event);

     });
     res.json("success");
   })
}

exports.updateGuestResponse = (req, res) => {
  console.log('Inside updateGuestResponse')
  Event.findById({'_id': req.params.event_id}, (err, event) => {
    if (err) { return err; }
    // console.log(req.body.data.guestId)
    let guestUpdated = event.guests.map((guest) => {

      if (guest.id === req.body.data.guestId ) {
        guest.response = req.body.data.response
        // console.log(guest.id)
        // console.log(req.body.data.guestId)
        // console.log(guest.response)
      }
      return guest
    })
    event.guests = guestUpdated
    // console.log(guestUpdated)
    event.markModified('guests');
    event.save((err, saved) => {
       if (err) {
         console.log(err);
         return (err);
       }
       console.log(saved);
         res.json(saved);
    });
    });
  }
