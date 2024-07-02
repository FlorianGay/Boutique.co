import { Router } from "express";
import { addCategory, getAllCategory } from "../controllers/categoriesControllers.js";


const categoriesRouter = Router()

categoriesRouter.post('/addCategory', addCategory)

categoriesRouter.get('/category', getAllCategory)

export default categoriesRouter