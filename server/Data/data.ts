import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI

if(uri){
  mongoose
  .connect(uri)
  .then(() =>{
    console.log('Db connection established')
  })
  .catch((err) => console.log(err))  
} else {
console.log('Db connection not established')
}