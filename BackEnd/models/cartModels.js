import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: {type: Number, required: true, default: 1},
    price: {type: Number, required : true}
})

const cartSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    totalQuantity: {type: Number, required: true, default: 0},
    totalPrice: {type: Number, required: true, default: 0}
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart