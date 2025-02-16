import express from 'express';
import { Rout}
const app = express();

app.post("/user/signup", (req, res) => {
    res.json({
        msg: "Signup"
    })
})

app.post("/user/signin", (req, res) => {
    res.json({
        msg: "signin"
    })
})

app.get("/user/purchases", (req, res) => {
    res.json({
        msg: "purchases"
    })
})

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

