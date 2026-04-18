import http from "node:http"
import fs from "node:fs"
import { log } from "node:console"


let server = http.createServer((req,res)=>{

    //! sending HTML file
    let src = fs.createReadStream("./index.html", "utf-8")
    res.writeHead(200, {"content-type" :  "text/html"})
    src.pipe(res) // --> pipe -> left (readable stream) -: right (writable stream)


})

server.listen(9000, (err)=>{
    if(err){
        log(err)
    }
    log("Server running at portnumber 9000")
})