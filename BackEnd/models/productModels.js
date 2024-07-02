
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required : true},
    image: [{type: String, required: true}],
    rating: {type: Number, default: 0}
})

const Product = mongoose.model('Product', productSchema)

export default Product
