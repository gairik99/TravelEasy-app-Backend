import { Router } from 'express';
const router = Router();

import data from '../data/hotels.js';



router.route('/')
    .get((req, res) => {
        res.json(data);
    })

export default router;