import express from "express";
import cors from 'cors'
import connectDB from "./db/connection.js";
import * as dotenv from "dotenv";
import * as fs from "fs";
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 if(process.env.NODE_ENV !== 'production'){
  
   dotenv.config({ path: "/.env" });
  
 }




const app = express();
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({useTempFiles: true}))




connectDB();
import stu from './db/router/userRouter.js'
import movie from './db/router/moviesRouter.js'


console.log()

app.use('/user',stu)
app.use('/movies',movie)
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
})





app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT} `);
});
