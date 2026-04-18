import { log } from "node:console"
import fs from "node:fs"

// fs.readFile("./ABCD.txt", "utf-8",(err,data)=>{
//     if(err) {
//         log("something went wrong")
//     }
        
//     log("file read successfuly")
//     log(data)
    
// })

//! STREAMS AND BUFFER

//! BUFFER is a temporary space in a memory
//! STREAMS means continously reading and writing the data in chunks

//! DEAFULT BUFFER SIZE
//normal file--> 64kb
// large file audio or video --> 128kb


//! STREAMS ARE OF 4 TYPES
// 1. writable stream
// fs.createWriteStream("./demo.py")

// 2. readable stream
// fs.createReadStream("./courses.txt", "utf-8")

// 3. duplex stream. <--- important <---- pipe()
// syntax --> src.pipr(destinantion)

// let src = fs.createReadStream("./courses.txt", "utf-8")
// let destination = fs.createWriteStream("./demo_duplex.txt")
// src.pipe(destination);


// 4. transform stream


//! HOW CHUNKS WORK
let src = fs.createReadStream("./ABCD.txt", {
    encoding: "utf-8",
    highWaterMark: 1, // ---> size of chunk in byte!
})

//1 byte = 8 bits ===> ! alphabet takes 8 bit of space!

src.on("data", (chunk)=>{
    log(chunk)
    log(chunk.length)
});