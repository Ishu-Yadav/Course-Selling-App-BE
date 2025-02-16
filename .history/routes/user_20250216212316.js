const {Router} = require("express");
const userRouter = Router();

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