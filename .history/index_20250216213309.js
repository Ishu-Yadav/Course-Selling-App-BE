const exp = require("express");
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const app = exp();

app.use("/user", userRouter);
app.use('/course', courseRouter);

app.listen(3000);