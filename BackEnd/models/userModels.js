import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique : true},
    password: {type: String, required: true, unique : true},
    firstName: {type: String, required: true},
    LastName: {type: String, required: true},
    mobileNumber: {type: Number, required: true},
    address : {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    token: {type: String}
})

const User = mongoose.model('User', userSchema)

export default User