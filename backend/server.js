import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db.js';
dotenv.config();
const app = express();
app.get('/',(req,res)=>{
res.send("Server is Running")
})
app.listen(5000,()=>{
    connectDB();
    console.log("server started at port: 5000")
})

