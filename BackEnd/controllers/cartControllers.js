import mongoose from 'mongoose'
import Cart from '../models/cartModels.js'
import Product from '../models/productModels.js'

const calculateTotalPrice = (items) => {
    return items.reduce((totalQuantity, item) => totalQuantity + (item.price * item.quantity), 0)
}

const calculateTotalQuantity = (items) => {
    return items.reduce((totalQuantity, item) => totalQuantity + Number(item.quantity), 0)
}

export const addProductOnCart = async (req, res) => {
    const {productId, quantity, userId} = req.body

    try {
        const product = await Product.findById(productId)
        if (!product) {
            return res.status(404).json({error: 'Product not found'})
        }

        let cart = await Cart.findOne({userId: new mongoose.Types.ObjectId(userId)})

        if (cart) {
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId)

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity +=  Number(quantity)
            } else {
                cart.items.push({productId, quantity, price: product.price})
            }
        } else {
            cart = new Cart({
                userId: new  mongoose.Types.ObjectId(userId),
                items: [{productId, quantity, price: product.price}]
            })
        }

        cart.totalPrice = calculateTotalPrice(cart.items)
        cart.totalQuantity = calculateTotalQuantity(cart.items)
        const newCart = await cart.save()
        res.status(201).json(newCart)

        // const newCart = new Cart({productId, quantity})
        // await newCart.save()
        // return res.status(201).json(newCart)
    } catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const getCart = async (req, res) => {
    const {userId} = req.params
    try {
        const cart = await Cart.findOne({userId}).populate('items.productId')
        if (!cart) {
            return res.status(404).json({error: 'Cart not found'})
        }
        return res.status(200).json(cart)
    } catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}