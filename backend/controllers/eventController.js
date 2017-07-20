import Event from '../models/Event';

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

exports.postEvent = (req, res) => {
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
