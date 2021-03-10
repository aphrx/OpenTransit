import express from 'express';
import { getTrains, updateTrain } from '../controllers/trains.js'

const router = express.Router();

router.get('/', getTrains);
router.patch('/:id', updateTrain);

export default router;