import express from "express";
import "./Data/data";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

import shoesRoutes from "./api/shoesRoutes";
app.use('/api', shoesRoutes)



app.listen(3000, () => {
    console.log("listen on:3000");
    });
    