import express from 'express';
import { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } from '../controllers/wishlistController.js'

import verifyUser from '../middleware/verifyuser.js';

const router = express.Router();

router.route("/")
    .post(verifyUser, createWishlistHandler)

router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)


router.route("/")
    .get(verifyUser, getWishlistHandler);


export default router;