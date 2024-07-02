import Category from "../models/categoriesModels.js"


export const addCategory = async (req, res) => {
     const {name, image} = req.body

     try {
        const categoryVerification = await Category.findOne({name})
        if (categoryVerification) {
            return res.status(400).json({error: 'Category already existed'})
        }

        const newCategory = new Category({name, image})
        await newCategory.save()
        return res.status(201).json({message: 'Category added successfully'})
     }catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find()
        if (categories.length < 1) {
            return res.status(400).json({error: 'Categories not found'})
        }
        return res.status(200).json(categories)
    }catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}