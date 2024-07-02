import Category from "../models/categoriesModels.js"
import Product from "../models/productModels.js"

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find().populate('category', 'name')
        if (products.length < 1 ) {
            return res.status(400).json({error: 'Products not found'})
        }
        return res.status(200).json(products)
    } catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const getProductById = async (req, res) => {
    const {productId} = req.params

    try {
        const productById = await Product.findById(productId)
        if (!productById) {
            return res.status(400).json({error: 'Product not found'})
        }
        return res.status(200).json(productById)
    }catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const addProduct = async (req, res) => {
    const {name, description, price, categoryId, image} = req.body
    try {
        const category = await Category.findById(categoryId)
        if (!category) {
            return res.status(404).json({error: 'Category not found'})
        }
    const newProduct = new Product({
            name, description, price, category : categoryId, image
        })
        await newProduct.save()
        return res.status(201).json({message: 'Product added successfully'})
    }catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const getProductsByCategory = async (req, res) => {
    const {categoryId} = req.params
    
    try {
        const products = await Product.find({category: categoryId}).populate('category', 'name')
        if (products.length === 0) {
            return res.status(404).json({ error: 'No products found for this category' });
        }
        return res.status(200).json(products)
    } catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

