const {Router} = require("express");
const course = Router();

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

userRouter.get("/user/purchases", (req, res) => {
    res.json({
        msg: "purchases"
    })
})

module.exports = {
    userRouter : userRouter
}