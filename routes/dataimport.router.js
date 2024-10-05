import express from 'express';
import Hotel from '../model/hotel.model.js';
import hotels from '../data/hotels.js';

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            console.log('Starting the data import...');
            await Hotel.deleteMany({});
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDB);
        } catch (err) {
            console.log('Error:', err);
            res.json({ message: "Could not add data to DB" });
        }
    });

export default router;