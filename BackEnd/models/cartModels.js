import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: {type: Number, required: true}
})

const cartSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    total: {type: Number, required: true}
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart