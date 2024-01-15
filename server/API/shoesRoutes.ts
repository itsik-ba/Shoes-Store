import express from "express";

const router = express.Router();

import {
    getAllShoes,
    createNewShoes,
    deleteShoes,


} from "./controlls";


router
.get("/getAllShoes", getAllShoes)
.post("/createNewShoes", createNewShoes)
.delete("/deleteShoes", deleteShoes)

export default router;