import { Router } from "express";
import { addComment, getAllComment } from "../controllers/commentControllers.js";


const commentRouter = Router()

commentRouter.get('/comment/:productId', getAllComment)

commentRouter.post('/addComment', addComment)

export default commentRouter