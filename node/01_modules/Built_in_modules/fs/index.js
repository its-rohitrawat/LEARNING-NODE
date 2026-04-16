//! FILE SYSTEM - FS (CORE MODULE)

import { log } from "node:console";
import fs from "node:fs";

// console.log(fs);

//------SYNCHRONOUS WAY-----------

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

fs.unlinkSync("./demo.txt")