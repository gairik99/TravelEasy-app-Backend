import { Router } from 'express';
const router = Router();

import getAllHotelHandler from '../controllers/hotelController.js';


router.route('/')
    .get(getAllHotelHandler);

export default router;