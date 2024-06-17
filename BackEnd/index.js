import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect(process.env.MONGO_URI)

app.get('/', (req, res) => res.send['Welcome to Boutique.co API'])

app.listen(8080, () => {
    console.log('Server is running on port 8080 👌')
})
