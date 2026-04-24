import mongodb from "mongodb";

async function connectDB(){
    //! STEP 1 : create a connection
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017")

    //! STEP 2 : create a database
    let database = client.db("nodeClass")

    //! STEP 3 : create a collection
    let collection = await  database.createCollection("users")
    
    //! CREATE SINGLE USER --> by using insertONE method
    // collection.insertOne({
    //     name:"rohit",
    //     age:25
    // })
    // console.log("user created");

    //! CREATE MANY USER --> by usinf insertMANY method
    // collection.insertMany([
    //     {name: "Rohit", id:1, age:20},
    //     {name: "rajat", id:2, age:24}
    // ])
    // console.log("users created")

    //! GET SINGLE USER --> findOne({filter})
    // let user = await collection.findOne({name:"Rohit"})
    // console.log(user);

    //! GET MULTIPLE USERS --> find({})
    // let users = await collection.find({}).toArray()
    // console.log(users);

    //! UPDATE SINGLE USER --> updateOne({filter}, {updatedValue})
    // let result = await collection.updateOne({name:"Rohit"}, {$set: {name: "Rohit Singh"}});
    // console.log(result)
    
    //! DELETE USER --> deleteOne({filter}) and deleteMany({})
    // let res = await collection.deleteOne({name : "rajat"})
    // console.log(res);
    
    let res = await collection.deleteMany({})
    console.log(res)
    
}
connectDB();