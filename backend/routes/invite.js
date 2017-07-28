import express from 'express';
import inviteController from '../controllers/inviteController';
import multer from 'multer';
const upload = multer({ dest: './uploads/events' });
const router = express.Router();

router.get('/',inviteController.getInvites);
router.get('/:invite_id', inviteController.getSpecificInvite);

router.post('/postInvites', inviteController.postInvite);
// router.post('/postInvitesWithImage',upload.single('inviteImage'), inviteController.postInvitesWithImage);
router.put('/updateInvites/:event_id/:invite_id', inviteController.updateInvites)
// router.put('/updateInvitesWithImage/:invite_id',upload.single('inviteImage'), inviteController.updateInvitesWithImage)

router.delete('/:invite_id', inviteController.deleteInvite)

export default router;
