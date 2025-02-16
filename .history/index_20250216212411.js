import express from 'express';
import { userRoutes } from "./routes";
const app = express();
const router = Router();



app.post("/course/purchase", (req, res) => {
    res.json({
        msg: "purchase a course"
    })
})

app.get("/courses", (req, res) => {
    res.json({
        msg: "courses"
    })
})

