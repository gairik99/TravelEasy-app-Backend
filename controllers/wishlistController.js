
import Wishlist from '../model/wishlist.model.js';

const createWishlistHandler = async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    } catch (err) {
        res.status(500).json({ message: "wishlist create failed" });
    }
}

const deleteWishlistHandler = async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel Deleted from Wishlist" })
    } catch (err) {
        res.status(500).json({ message: "wishlist delete failed" });
    }
}

const getWishlistHandler = async (req, res) => {
    try {
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({ message: "No item in Wishlist" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
}

export { createWishlistHandler, deleteWishlistHandler, getWishlistHandler };