import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`${process.env.MONGO_URL}`);
//@ts-ignore
const userSchema = mongoose.Schema({
    userDetails: {
        name: {
            default: "",
            type: String
        },
        username: {
            default: "",
            type: String
        },
        password: {
            default: "",
            type: String
        },
        friends: [{
            default: "",
            type: String 
        }]
    }
});

const users = mongoose.model('sockify-users', userSchema);

export default users;