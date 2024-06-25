import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: {type: String, required: true},
    comment: {type: String, required: true},
    rating: {type: Number, required: true, min: 0, max: 5},
    date: {type: Date, default: Date.now}
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment