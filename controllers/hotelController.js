import Hotel from '../model/hotel.model.js';


const getAllHotelHandler = async (req, res) => {
    const hotelCategory = req.query.category;
    try {
        let hotels;
        if (hotelCategory) {
            hotels = await Hotel.find({ category: hotelCategory });
        } else {
            hotels = await Hotel.find({});
        }

        hotels ? res.json(hotels) : res.status(404).json({ message: 'no data found' });
    }
    catch (err) {
        console.log(err);
    }
}

export default getAllHotelHandler;