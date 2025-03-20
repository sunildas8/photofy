import userMondel from "../models/userModel.js";
import bcrypt, {hash}   from 'bcrypt';
import jwt from 'jsonwebtoken'
// import Stripe from 'stripe';
// import transactionMondel from "../models/transactionModel.js";

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

        const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN , { expiresIn: '1d' })
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
            const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN, { expiresIn: '1d' })
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

// const stripeInstance = new Stripe({
//     publishable_key: process.env.PUBLISHABLE_KEY,
//     secret_key: process.env.SECRET_KEY,
// })

// const paymentSripe = async (req, res)=>{
//     try {
//         const {userID, planId} = req.body
//         const userData = await userMondel.findById(userID)

//         if (!userID || !planId) {
//             return res.json({success: false, message: 'Missing Details'})
//         }

//         let credits, plan, amount, date

//         switch (planId) {
//             case 'Basic':
//                 plan = 'Basic'
//                 credits = 100
//                 amount = 500
//                 break;
                
//             case 'Advanced':
//                 plan = 'Advanced'
//                 credits = 500
//                 amount = 1500
//                 break;

//             case 'Business':
//                 plan = 'Business'
//                 credits = 1000
//                 amount = 3000
//                 break;
        
//             default:
//                 return res.json({success: false, message: 'Plan not found'})
//         }

//         date = Date.now()

//         const transactionData = {
//             userID, credits, plan, amount, date
//         }

//         const newTransaction = await transactionMondel.create(transactionData)

//         const options = {
//             amount: amount * 100,
//             currency: process.env.CURRENCY,
//             receipt: newTransaction._id,
//         }

//         await stripeInstance.orders.create(options, (error, order)=>{
//             if (error) {
//                 console.log(error);
//                 return res.json({success: false, message: error.message})
//             }
//             res.json({success: true, order})
//         })

//     } catch (error) {
//         console.log(error);
//         res.json({success: false, message: error.message})
//     }
// }

export {registerUser, loginUser, userCredits}