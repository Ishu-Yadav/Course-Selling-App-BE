import express from 'express';
import { userRouter } from "./routes/user.js";
const app = express();

user

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

