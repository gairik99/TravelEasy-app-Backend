import { Router } from 'express';
import singleHotelHandler from '../controllers/singleHotelController.js';

const router = Router();

router.route('/:id')
    .get(singleHotelHandler);

export default router;