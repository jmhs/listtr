import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventImage: String,
  eventName: String,
  type: String,
  description: String,
  dressCode: String,
  location: String,

  startDate: String,
  endDate: String,
  timeStart: String,
  timeEnd: String,
  hosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //To push in userids that created event or given host status
  guests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //To push in userids that were invited to event
  invites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invite'}] //To push in inviteids that were created within event
},{timestamp: true})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event;
