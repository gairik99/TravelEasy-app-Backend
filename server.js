import express, { json } from 'express';
import { mongoose } from 'mongoose';


import hotelRouter from './routes/hotel.router.js';
import connectDB from './config/dbconfig.js';

const app = express();

app.use(json());
connectDB();

const PORT = 3500;
app.get("/", (req, res) => {
    res.send('Hello,geek');
})

app.use("/api/hotels", hotelRouter);

mongoose.connection.once('open', () => {
    console.log('connecting.........')
    app.listen(process.env.PORT || PORT, () => {
        console.log("sever is up and running");
    })
})
