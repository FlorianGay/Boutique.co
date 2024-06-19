import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique : true, match: [/.+@.+\..+/, 'Please fill a valid email address']},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    mobileNumber: {type: Number, required: true},
    address : {type: String, required: true},
    isAdmin: {type: Boolean, default: false}
})

const User = mongoose.model('User', userSchema)

export default User