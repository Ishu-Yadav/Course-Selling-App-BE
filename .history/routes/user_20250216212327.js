const {Router} = require("express");
const userRouter = Router();

userRouter.post("/user/signup", (req, res) => {
    res.json({
        msg: "Signup"
    })
})

userRouter.post("/user/signin", (req, res) => {
    res.json({
        msg: "signin"
    })
})

app.get("/user/purchases", (req, res) => {
    res.json({
        msg: "purchases"
    })
})