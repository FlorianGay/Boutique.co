import { Router } from "express";
import { addProduct, getAllProduct, getProductById, getProductsByCategory } from "../controllers/productControllers.js";


const productRouter = Router()

productRouter.get('/products', getAllProduct)

productRouter.get('/product/id/:productId', getProductById)

productRouter.post('/addProduct', addProduct)

productRouter.get('/products/category/:categoryId', getProductsByCategory) 

export default productRouter