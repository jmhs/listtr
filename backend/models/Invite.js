import mongoose from 'mongoose';

const inviteSchema = new.mongoose.Schema({
  inviteFrom: String,
  inviteSubject: String,
  inviteName: String,
  inviteDescription: String
}, {timestamps: true});


const Invite = mongoose.model('Invite', inviteSchema)

module.exports = Invite;
