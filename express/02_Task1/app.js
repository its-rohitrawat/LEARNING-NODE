import express from "express"
import { log } from "node:console"
import fs from "node:fs"
import mongodb from "mongodb"

async function connectDB() {

    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017")
    let database = await client.db("task1")
    let collection = await database.createCollection("user")

    return collection;
    
}



const app = express()
const port = 9000


app.get("/", (req,res)=>{

    let src = fs.createReadStream("./pages/index.html", "utf-8");
    src.pipe(res);

})

//middleware is function which is used in between req and res

app.use(express.urlencoded({extended : true})); //parses form data


app.post("/submit", async(req,res)=>{
    let {username, email, password} = req.body;

    try{
    let collection = await connectDB();
    collection.insertOne({username, email, password})

    res.json({message: "user created"})
    
    res.send("form submitted")
    }
    catch(err){
        log(err)
        res.json({message: "unable to create user"})

    }
})

app.get("/all", async(req,res)=>{
    try {
        let collection = await connectDB()
        let users = await collection.find({}).toArray()
        res.json({data: users})
    } catch (error) {
        log(error)
        res.json({message: "unable to get all users"})
    }
    
})


app.listen(port, (e)=>{
    if(e) console.log(e);

    console.log("server stared at", port)
    
})