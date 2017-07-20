import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventImage: String,
  eventName: String,
  type: String,
  description: String,
  dressCode: String,
  location: String,
  googleMapLink: String, // Additional juice feature, to include bit.ly/google url shortener for google map location
  startDate: String,
  endDate: String,
  timeStart: String,
  timeEnd: String,
  hosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //To push in userids that created event or given host status
  guests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //To push in userids that were invited to event
},{timestamp: true})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event;
