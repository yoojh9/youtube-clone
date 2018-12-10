import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
//const express = require('express')

const app = express()  // execute express
const PORT = 4000;

const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

const handleHome = (req, res) =>  res.send('hello from home');

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(morgan("dev"));   // /와 /profile 모두 설정되는 middleware
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", handleHome); 

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);