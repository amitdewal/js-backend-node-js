//require('dotenv').config({path:"./env"})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express()

dotenv.config({
    path:"./env"
})

// second approach to connect DB

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!", err)
})






/*

// first apporach to connect db

( async() =>{

    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error) =>{
        console.log("ERROR ",error)
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
        console.log("ERROR", error)
        throw err
    }
})() */