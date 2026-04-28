import dotenv from "dotenv";
dotenv.config({quiet: true});


import express from "express";
import { connectDB } from "./config/database.js";

import EmpRoutes from "./routes/emp_routes.js";


const app = express();

const PORT = process.env.PORT || 9000;



connectDB() //database connection

app.use(express.json()); //middleware for parsing JSON data

app.use("/v1/api", EmpRoutes) //routes related to employee


app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
})


