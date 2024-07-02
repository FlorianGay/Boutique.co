import { Router } from "express";
import { addCategory } from "../controllers/categoriesControllers.js";


const categoriesRouter = Router()

categoriesRouter.post('/addCategory', addCategory)

export default categoriesRouter