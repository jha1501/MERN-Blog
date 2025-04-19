import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const userSchema = new mongoose.schema({
    username:{
        Type: String,
        required: true,
        unique: true,
    },
    email:{
        Type: String,
        required: true,
        unique: true,
    },
    password:{
        Type: String,
        required: true,
    }
},{Timestamps: true}
);

const User = mongoose.model('user', userSchema);

export default User;