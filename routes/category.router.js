import { Router } from 'express';

import categoryHandler from '../controllers/categoryController.js';


const router = Router();



router.route('/')
    .get(categoryHandler);

export default router;