import { Router } from "express";
import { getUserByToken, loginUser, registerUser } from "../controllers/userControllers.js";


const userRouter = Router()

userRouter.post('/register', registerUser)

userRouter.post('/login', loginUser)

userRouter.get('/user', getUserByToken)

export default userRouter 