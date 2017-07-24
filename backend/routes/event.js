import express from 'express';
import eventController from '../controllers/eventController';

const router = express.Router();

router.get('/event',eventController.getEvents);
router.get('/:event_id', eventController.getSpecificEvent);
router.post('/event', eventController.postEvent);

export default router;
