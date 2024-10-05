import User from '../model/user.model.js';
import CryptoJS from 'crypto-js';


const signupHandler = async (req, res) => {
    try {
        // const userObj = {
        //     username: req.body.username,
        //     number: req.body.number,
        //     email: req.body.email,
        //     password: req.body.password
        // }
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json({ message: 'Err Creating a new User' });
    }
}

export default signupHandler;