import { Router } from 'express';
import User from '../model/user.model.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const router = Router();
router.route('/register')
    .post(async (req, res) => {
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
    })



router.route('/login')
    .post(async (req, res) => {
        try {
            const user = await User.findOne({ number: req.body.number });
            if (!user) {
                return res.status(401).json({ message: "Incorrect Mobile Number" });
            }

            const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
            if (decodedPassword !== req.body.password) {
                return res.status(401).json({ message: "Incorrect Password" });
            }
            const { password, ...rest } = user._doc;
            const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN);
            res.json({ ...rest, accessToken });
        } catch (err) {
            res.status(500).json({ message: 'User does not exist' });
        }
    });

export default router;
