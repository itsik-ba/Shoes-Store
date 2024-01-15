import mongoose, { Schema } from "mongoose";



const ShoesSchema = new Schema({
    name: {
        type: String,
        required: true
       },
    url: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true  
    }
})





const ShoesModel = mongoose.model("store", ShoesSchema);


export default ShoesModel;