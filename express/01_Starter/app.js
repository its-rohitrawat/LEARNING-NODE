// EXPRESS js is framework(multiple libraries make a framework) of NODE.js

// step 1: install express js

// step 2: import express

// step3: create server


import express from "express";

const app = express();
const PORT = 9000;

//! ROUTES
// app.METHOD("/path", "callback")

app.get("/", (req,res)=>{
    res.send("HomePage")
})

app.get("/about", (req,res)=>{
    res.send("AboutPage")
})

app.get("/contacts", (req,res)=>{
    res.send("ContactPage")
})




app.listen(PORT, (err)=>{
    if(err)  console.log(err);
            
    console.log("server started at", PORT);
})