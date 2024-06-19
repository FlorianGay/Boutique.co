import jwt  from "jsonwebtoken"
import User from "../models/userModels.js"
import bcrypt from 'bcryptjs'


export const registerUser = async (req, res) => {
    const {email, password, firstName, lastName, mobileNumber, address} = req.body
    try {
        const emailVerification = await User.findOne({email})
        // Vérifie si l'email est déjà utilisé
        if (emailVerification) {
            return res.status(400).json({error: 'Email already in use'})
        }
        // Sécurise le mot de passe avec bcrypt
        const salt =  bcrypt.genSaltSync(10)
        const hasedPassword = await bcrypt.hashSync(password, salt)
        const newUser = new User({
            email,
            password: hasedPassword,
            firstName, 
            lastName,
            mobileNumber,
            address
        })
        await newUser.save()
        return res.status(201).json({message: 'User created successfully'})
    } catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({error: `Email or password invalid`})
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return res.status(400).json({error: `Email or password invalid`})
        }

        const token = jwt.sign({userID: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        return res.json({token})
    }catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}

export const getUserByToken = async (req, res) => {
    const token = req.headers['authorization']
    if (!token) {
            return res.status(401).json({error: 'Token missing'})
        }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.userID).select('-password')
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        return res.status(200).json(user)
    }catch (err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    } 
}