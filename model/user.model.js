import { mongoose } from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        number: { type: Number, required: true, uniquie: true },
        email: { type: String, required: true, uniquie: true },
        password: { type: String, required: true },
    },
    // {
    //     timestamps: true,
    // }
);

const User = mongoose.model("User", userSchema);

export default User;