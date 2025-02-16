const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/user/signup", (req, res) => {
    res.json({
        msg: "Signup"
    })
})

courseRouter.post("/user/signin", (req, res) => {
    res.json({
        msg: "signin"
    })
})

courseRouter.get("/user/purchases", (req, res) => {
    res.json({
        msg: "purchases"
    })
})

module.exports = {
    courseRouter : userRouter
}