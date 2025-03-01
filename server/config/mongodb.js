import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=>{
            console.log("DataBase Connnected")
        })
    
        await mongoose.connect(`${process.env.MONGODB_URI}/photofy`)
    } catch (error) {
        console.error("Database Connection Failed:", error.message);
        process.exit(1);
    }
}

export default connectDB