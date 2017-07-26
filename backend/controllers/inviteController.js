import Invite from '../models/Invite';

exports.getInvites = (req, res) => {
  Invite.find({}, (err, invite) => {
    if(err){console.log(err); return;}
    res.json(invite)
  })
}

exports.getSpecificInvite = (req, res) => {
  Invite.findOne({'_id':req.params.event_id},(err,invite) => {
    if(err){console.log(err); return;}
    res.json(invite);
  })
}
