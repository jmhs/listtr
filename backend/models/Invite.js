import mongoose from 'mongoose';

const inviteSchema = new mongoose.Schema({
  inviteEventImage: String,
  inviteName: String,

  inviteStartDate: String,
  inviteEndDate: String,

  inviteTimeStart: String,
  inviteTimeEnd: String,

  inviteDressCode: String,
  inviteLocation: String,

  inviteSubject: String,

  inviteDescription: String

}, {timestamps: true});

const Invite = mongoose.model('Invite', inviteSchema)

module.exports = Invite;
