import express from 'express';
import emailController from '../controllers/emailController';
const router = express.Router();

// router.get('/',emailController.getEvents);
// router.get('/:event_id', emailController);

router.post('/:event_id', emailController.handleEmail);
router.post('/reminder/:event_id', emailController.reminderEmail);

// router.post('/',emailController.postEvent);

export default router;
