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
 if (req.body.eventImage == 'undefined'){
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
} else {console.log('supsupsup')}
//}
 // else {
 //  console.log(req.body.eventImage)
 //  upload.single(req.body.eventImage) //send file to multer
 //  cloudinary.uploader.upload(req.file.path,(result) => {
 //    const newRestaurant = new Restaurant({
 //      eventImage : result.secure_url||"",
 //      picHomePublicId: result.public_id||"",
 //      eventName: req.body.eventName || "",
 //      type: req.body.type || "" ,
 //      description: req.body.description || "",
 //      dressCode: req.body.dressCode || "",
 //      location: req.body.location || "",
 //      googleMapLink: req.body.googleMapLink || "",
 //      startDate: req.body.startDate || "",
 //      endDate: req.body.endDate || "",
 //      timeStart: req.body.timeStart || "",
 //      timeEnd: req.body.timeEnd || ""
 //    });
 //
 //    newRestaurant.save((err) => {
 //      if(err){console.log(err); return;}
 //      res.json(newRestaurant);
 //    });
 //  })
 //  .then(
 //    fs.unlink(req.file.path, (err) => {
 //      if (err) {
 //            console.log("failed to delete local image:"+err);
 //        } else {
 //            console.log('successfully deleted local image');}
 //    })
 //  );
 //}

}
