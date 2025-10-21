import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`${process.env.MONGO_URL}`);
//@ts-ignore
const userSchema = mongoose.Schema({
    firstName: {
        
    }
});