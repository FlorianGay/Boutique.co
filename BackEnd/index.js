import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import productRouter from './routes/productRoutes.js'
import commentRouter from './routes/commentRoutes.js'
import initializeAdmin from './initializeAdmin.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connect to MongoDB')
        initializeAdmin()
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

app.get('/', (req, res) => res.send('Welcome to Boutique.co API'))

app.use('/api', userRouter, cartRouter, productRouter, commentRouter)

app.listen(8080, () => {
    console.log('Server is running on port 8080 👌')
})
