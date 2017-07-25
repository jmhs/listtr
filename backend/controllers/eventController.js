import Event from '../models/Event';
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

exports.getSpecificEvent = (req, res) => {
  Event.findOne({'_id':req.params.id},(err,event) => {
    if(err){console.log(err); return;}
    res.json(event);
  })
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
    googleMapLink: req.body.googleMapLink || "",
    startDate: req.body.startDate || "",
    endDate: req.body.endDate || "",
    timeStart: req.body.timeStart || "",
    timeEnd: req.body.timeEnd || ""
  });
  newEvent.save((err, events) => {
    if(err){console.log(err); return;}
    res.json(events);
  });
}

exports.postEventsWithImage = (req, res) => {
    cloudinary.uploader.upload(req.file.path,(result) => {
    console.log(result)
    const newEvent = new Event({
      eventImage : result.secure_url||"",
      picHomePublicId: result.public_id||"",
      eventName: req.body.eventName || "",
      type: req.body.type || "" ,
      description: req.body.description || "",
      dressCode: req.body.dressCode || "",
      location: req.body.location || "",
      googleMapLink: req.body.googleMapLink || "",
      startDate: req.body.startDate || "",
      endDate: req.body.endDate || "",
      timeStart: req.body.timeStart || "",
      timeEnd: req.body.timeEnd || ""
    });

    newEvent.save((err) => {
      if(err){console.log(err); return;}
      res.json(newEvent);
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
