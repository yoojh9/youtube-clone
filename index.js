import express from "express";
//const express = require('express')

const app = express()  // execute express
const PORT = 4000;

const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

const handleHome = (req, res) =>  res.send('hello from home');

const handleProfile = (req, res) => res.send("you are on my profile");

// middleware
const betweenGlobal = (req, res, next) => {
    console.log("Between");
    next(); // maybe handleHome();
}

const betweenProfile = (req, res, next) => {
    console.log("Between Profile");
    next();
}

app.use(betweenGlobal);   // /와 /profile 모두 설정되는 middleware

app.get("/", handleHome); 

app.use(betweenProfile);    // /profile에만 설정되는 middleware

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);