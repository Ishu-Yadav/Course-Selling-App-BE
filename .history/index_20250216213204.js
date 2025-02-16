const exp = require("express");
const { userRouter } require"./routes/user.js";
const { courseRouter } from "./routes/course.js";
const app = express();

app.use("/user", userRouter);
app.use('/course', courseRouter);

app.listen(3000);