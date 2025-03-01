import userMondel from "../models/userModel.js";
import bcrypt, {hash}   from 'bcrypt';
import jwt from 'jsonwebtoken'

const registerUser = async (req,res)=>{
    try {
        const{name, email, password} = req.body;
        if (!name || !email || !password) {
            return res.json({success:false, message: 'Missing Details'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userMondel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN)
        res.json({success: true, token, user: {user: user.name}})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await userMondel.findOne({email})
        if(!user){
            return res.json({success:false, message: 'User dose not exit'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN)
            res.json({success: true, token, user: {user: user.name}})
        }else{
            return res.json({success:false, message: 'Invalid email or password'})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const userCredits = async (req, res)=>{
    try {
        const {userId} = req.body

        const user = await userMondel.findById(userId)
        res.json({success: true, credit: user.creditBalance, user: {name: user.name}})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {registerUser, loginUser, userCredits}