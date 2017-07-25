import express from 'express';
import eventController from '../controllers/eventController';
import multer from 'multer';
const upload = multer({ dest: './uploads/events' });
const router = express.Router();

router.get('/',eventController.getEvents);
router.get('/:event_id', eventController.getSpecificEvent);
router.post('/postEvents', eventController.postEvent);
router.post('/postEventsWithImage',upload.single('eventImage'), eventController.postEventsWithImage);

export default router;
