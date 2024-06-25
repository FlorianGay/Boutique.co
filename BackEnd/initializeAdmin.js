
import User from "./models/userModels.js"
import bcrypt from 'bcryptjs'


 const initializeAdmin = async() => {
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    try {
        const existingAdmin = await User.findOne({email: adminEmail})

        if (!existingAdmin) {
            const salt = await bcrypt.genSaltSync(10)
            const hashedPassword = await bcrypt.hashSync(adminPassword, salt)

            const newAdmin = new User({
                email: adminEmail,
                password: hashedPassword,
                firstName: 'Admin',
                lastName: 'User',
                mobileNumber: '1234567890',
                address: 'Admin Address',
                isAdmin: true
            })

            await newAdmin.save()
            console.log('Admin user created successfully')
        } else {
            console.log('Admin user already exists')
        }
    } catch(err) {
        console.error(`Internal server error`, err)
        return res.status(500).json({error: `Internal server error`})
    }
}

export default initializeAdmin