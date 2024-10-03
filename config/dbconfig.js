import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

const connectDB = async () => {
    try {
        await connect(process.env.DATABASE_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.log("Failed to connect to MongoDB", err);
    }


}
export default connectDB;