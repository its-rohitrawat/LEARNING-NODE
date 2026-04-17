//! FILE SYSTEM - FS (CORE MODULE)

// import { error, log } from "node:console";
// import fs from "node:fs";

// console.log(fs);

//!------SYNCHRONOUS WAY-----------

//! create a file --> fs.writeFileSync("path", data)
// -if file is not present then it creates the file and if file is created then it overwrites the data with the new one

//! Example 1

// log(1)
// let val = fs.writeFileSync("./demo.txt", "file created sync way")
// if(val === undefined){
//     log("file created")
// }

// log(2)

//! Example 2

// fs.writeFileSync("./module.txt", "shutup!!")



//! Read a file --> (fs.readFileSymc("path", "encoding"))

// let val = fs.readFileSync("./demo.txt", "utf-8")
// log(val)


//! Update a file --> appendFileSync("path", "data")

// fs.appendFileSync("./module.txt", " \nbye byeee")


//! Delete a file --> fs.unlinkSync("path")

// fs.unlinkSync("./demo.txt")




//!------ASYNCHRONOUS WAY-----------


//! CREATE A FILE

//! fs.writeFile("path","data","callback")

// log(1)
// fs.writeFile("./demo_async.txt", "hey hey new text here", (err)=>{
//     if(err){
//         log("unable to create a file")
//     }
//     else{
//         log("file created")
//     }
// })
// log(2)


//! READ A FILE

//! fs.readFile("path", "fencoding", (err,data)

// fs.readFile("./demo_async.txt", "utf-8", (err,data)=>{
//     if (err){
//         log("unable to read")
//     }
//     else{
//         log("file read successfuly")
//     }
//     log(data)
// })


//! UPDATE A FILE

//! fs.appendFile("path", "new data", "callback")

// fs.appendFile("./demo_async.txt", "\nblah blah blah", (err)=>{
//     if(err){
//         log("file didnt updated successfully")
//     }
//     else{
//         log("updated successfully")
//     }
// })


//! DELETE A FILE

//! fs.unlink("path", "callback")\


// fs.unlink("./eg.txt", (err)=>{
//     if(err){
//         log("unable to del")
//     }
//     else{
//         log("deleted successfully!")
//     }
// }) 



//! CREATE AND APPEND 

// fs.writeFile("courses.txt", "Courses are: ", (err)=>{
//     if(err) log("file not created successfully")
//     log("file created successfully")

//     fs.appendFile("./courses.txt", "\n1. Node.js", (err)=>{
//         if(err) log("file not updated successfully")
//             log("1 course added")

//         fs.appendFile("./courses.txt", "\n2. MongoDB", (err)=>{
//         if(err) log("file not updated successfully")
//             log("2 course added")
        
//         });
//     });
// });




//! ---------------FS using promise------------------

import { log } from "node:console";
import fsp from "node:fs/promises"

//! CREATE A FILE using promise

// let res = fsp.writeFile("ABCD.txt", "iam the alphabet");
// log(res);

// res.then(()=>{
//     log("file created")
// })
// res.catch((err)=>{
//     log("unable to create a file")
// })


//! READ A FILE using promise

// let res = fsp.readFile("./ABCD.txt", "utf-8")

// res.then((data)=>{
//     log(data)
//     log("file read successfully")
    
// })
// res.catch((err)=>{
//     log("unable to read a file")
// })

//! CREATE AND UPDATE using promise chain

// let res1 = fsp.writeFile("classes.txt", "Your classes are :")

// res1.then(()=>{
//     log("file created")

//     let res2 = fsp.appendFile("./classes.txt", "\nHTML class")

//     res2.then(()=>{
//         log("class added successfully")

//         let res3 = fsp.appendFile("./classes.txt", "\nCSS class")

//         res3.then(()=>{
//             log("class added successfully")
            

//             let res4 = fsp.appendFile("./classes.txt", "\nJS class")

//             res4.then(()=>{
//                 log("JS class added successfully")
//             })
//             res4.catch((err)=>{
//                 log("unable to add JS class")
//             })
//         })

//         res3.catch((err)=>{
//             log("unable to add CSS class")
//         })
//     })
//     res2.catch((err)=>{
//     log("unable to add HTML class")
// })
// })

// res1.catch((err)=>{
//     log("unable to create a file")
// })




 //! ASYNC AND AWAIT (BEST PRACTICE)

// async function fsOperation(){

//     try{
//          await fsp.writeFile("classes.txt", "Your classes are :")
//     log("file created")
    
//     await fsp.appendFile("./classes.txt", "\nHTML class")
//     log("html class added successfully")

//     await fsp.appendFile("./classes.txt", "\nCSS class")
//     log("CSS class added successfully")

//     await fsp.appendFile("./classes.txt", "\nJS class")
//     log("JS class added successfully")
//     }

//     catch (err){
//         log("Something went wrong")
//     }
   

// }

// fsOperation();