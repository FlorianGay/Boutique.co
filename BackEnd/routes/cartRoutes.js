import { Router } from "express";
import { addProductOnCart, getCart } from "../controllers/cartControllers.js";


const cartRouter = Router()

cartRouter.post('/addCart', addProductOnCart)

cartRouter.get('/cart/:userId', getCart)

export default cartRouter