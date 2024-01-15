import express from "express";
import "./Data/data";
import cors from "cors";
import shoesRoutes from "./API/View/shoesRoutes";
const app = express();

app.use('/api/view', shoesRoutes)
app.use(cors());
app.use(express.json());






app.listen(3000, () => {
    console.log(`listening on ${"http://localhost:3000/"}`);
    });
    