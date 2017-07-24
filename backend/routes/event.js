import express from 'express';
import eventController from '../controllers/eventController';

const router = express.Router();

router.get('/',eventController.getEvents);
router.get('/:event_id', eventController.getSpecificEvent);
router.post('/',eventController.postEvent);

export default router;
