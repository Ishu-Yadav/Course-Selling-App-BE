// import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";

const app = express();

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

app.post("/user/purchases", (req, res) => {
    res.json({
        msg: "Signup"
    })
})

app.get("/courses", (req, res) => {
    res.json({
        msg: "Signup"
    })
})

