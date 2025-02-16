const {Router} = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
    res.json({
        msg: "Signup"
    })
})

userRouter.post("/signin", (req, res) => {
    res.json({
        msg: "signin"
    })
})

userRouter.get("/user/purchases", (req, res) => {
    res.json({
        msg: "purchases"
    })
})

module.exports = {
    userRouter : userRouter
}