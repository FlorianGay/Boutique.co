import Comment from "../models/commentModels.js"
import Product from "../models/productModels.js"
import User from "../models/userModels.js"


export const getAllComment = async (req, res) => {
    const {productId} = req.params
    try {
        const comment = await Comment.findOne({productId})
        if (!comment) {
            return res.status(400).json({error: 'Comment not found'})
        }
        return res.status(200).json(comment)
    }catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const addComment = async (req, res) => {
    const {productId, userId, comment, rating, date} = req.body

    const product = await Product.findById(productId)
    const user = await User.findById(userId)
        if (!product || !user) {
            return res.status(404).json({error: 'Product or user not found'})
        }

    try {
        const newComment = new Comment({
            productId, userId, comment, rating, date, userName: user.firstName
        })
        await newComment.save()
        return res.status(201).json({message: 'Comment added successfully'})


    } catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}


