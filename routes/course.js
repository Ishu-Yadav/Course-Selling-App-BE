const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.json({
        msg: "purchase a course"
    })
})

courseRouter.get("/preview", (req, res) => {
    res.json({
        msg: "courses"
    })
})
module.exports = {
    courseRouter : courseRouter
}