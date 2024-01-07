const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/home", (req,res)=>{
    res.send("Welcome to my first MERN app that uses a monorepo");
});

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});