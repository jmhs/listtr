import Invite from '../models/Invite';

exports.getInvites = (req, res) => {
  Invite.find({}, (err, invite) => {
    if(err){console.log(err); return;}
    res.json(invite)
  })
}

// exports.getOne = (req, res) => {
//   let id = req.params.id
//   Invite.findById({_id: id}, (err, invite) => {
//     if (err) return res.json({message: 'could not find invite by id because: ' + err})
//     res.send(invite)
//   })
// }

exports.getSpecificInvite = (req, res) => {
  Invite.findOne({'_id':req.params.invite_id},(err,invite) => {
    if(err){console.log(err); return;}
    res.json(invite);
  })
}

// CREATE an invite with the following inputs
exports.postInvite = (req, res) => {
  console.log('post')
  let newInvite = new Invite()

  // newInvite.inviteEventimage = req.body.inviteEventimage
  // console.log(newInvite.inviteEventimage)
  newInvite.inviteDescription = req.body.inviteDescription

  // newInvite.inviteDressCode = req.body.inviteDressCode
  newInvite.inviteLocation = req.body.inviteLocation
  newInvite.inviteStartDate = req.body.inviteStartDate
  newInvite.inviteEndDate = req.body.inviteEndDate
  newInvite.inviteTimeStart = req.body.inviteTimeStart
  newInvite.inviteTimeEnd = req.body.inviteTimeEnd
  newInvite.inviteSubject = req.body.inviteSubject
  newInvite.inviteName = req.body.inviteName

  newInvite.save((err, invites) => {
    if (err) {
      res.json({message: 'could not create invite because: ' + err})
    } else {
      res.json('stored invite!')
    }
  })
}

// UPDATE a current invite
exports.updateInvites = (req, res) => {
  let id = req.params.id
  Invite.findById({_id: id}, (err, invite) => {
    if (err) return res.json({message: 'could not find invite by id because: ' + err})
    invite.inviteEventimage = req.body.inviteEventimage
    invite.inviteDescription = req.body.inviteDescription
    // invite.inviteDressCode = req.body.inviteDressCode
    invite.inviteLocation = req.bodyinvite.inviteLocation
    invite.inviteStartDate = req.body.inviteStartDate
    invite.inviteEndDate = req.body.inviteEndDate
    invite.inviteTimeStart = req.body.inviteTimeStart
    invite.inviteTimeEnd = req.body.inviteTimeEnd
    invite.inviteSubject = req.body.inviteSubject
    invite.inviteName = req.body.inviteName

    invite.save((err, invites) => {
      if (err) {
        res.json({message: 'could not create invite because: ' + err})
      } else {
        res.redirect('/dashboard')
      }
    })
  })
}

// DELETE a current invite
exports.deleteInvite = (req, res) => {
  let id = req.params.id
  Invite.findById({_id: id}, (err, invite) => {
    if (err) return res.json({message: 'could not find invite by id because: ' + err})
    invite.remove((err, invites) => {
      if (err) {
        res.json({message: 'could not delete invite because: ' + err})
      } else {
        res.redirect('/dashboard')
      }
    })
  })
}
