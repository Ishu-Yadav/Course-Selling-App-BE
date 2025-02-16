import express from 'express';
import { userRouter } from "./routes/user.js";
import { courseRouter } from "./routes/user.js";
const app = express();

app.use("/user", userRouter);
app.use('/course', courseRouter);



