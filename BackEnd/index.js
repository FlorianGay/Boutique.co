import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import productRouter from './routes/productRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

mongoose.connect(process.env.MONGO_URI)

app.get('/', (req, res) => res.send('Welcome to Boutique.co API'))

app.use('/api', userRouter, cartRouter, productRouter)

app.listen(8080, () => {
    console.log('Server is running on port 8080 👌')
})
