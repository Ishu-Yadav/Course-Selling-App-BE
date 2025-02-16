const {Router} = require("express");
const courseRouter = Router();

app.post("/course/purchase", (req, res) => {
    res.json({
        msg: "purchase a course"
    })
})

app.get("/courses", (req, res) => {
    res.json({
        msg: "courses"
    })
}).post("/course/purchase", (req, res) => {
    res.json({
        msg: "purchase a course"
    })
})

courseRouter.get("/courses", (req, res) => {
    res.json({
        msg: "courses"
    })
})
module.exports = {
    courseRouter : courseRouter
}