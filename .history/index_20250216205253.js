// import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";

const app = express();

app.post("/user/signup", (req, res) => {
    res.json({{
        msg: "Signup"
}})
})

app.post("/user/signup", (req, res) => {
    res.json({{
        msg: "Signup"
    }})
})