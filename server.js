import express, { json } from 'express';
import { mongoose } from 'mongoose';
import connectDB from './config/dbconfig.js';
import cors from 'cors';

import hotelDataAddedToDBRoute from './routes/dataimport.router.js';
import categoryDataAddedToDBRoute from './routes/categoryimport.router.js';

import hotelRouter from './routes/hotel.router.js';
import categoryRouter from './routes/category.router.js'
import singleHotelRouter from './routes/singlehotel.router.js'
import authRouter from './routes/auth.router.js'
import wishlistRouter from './routes/wishlist.router.js'

const app = express();
app.use(cors());

app.use(json());
connectDB();

const PORT = 3500;
app.get("/", (req, res) => {
    res.send('Hello,geek');
})

app.use("/api/hoteldata", hotelDataAddedToDBRoute);
app.use("/api/categorydata", categoryDataAddedToDBRoute);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once('open', () => {
    console.log('connecting.........')
    app.listen(process.env.PORT || PORT, () => {
        console.log("sever is up and running");
    })
})
