
import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true}
})

const Category = mongoose.model('Category', categorySchema)

export default Category