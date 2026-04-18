//! http is a core module used to create a server

//! STEPS TO CREATE A HTTP SERVER
// 1. import http()
// 2. use createServer()
// 3. assign a PORT number
// 4. define routes



import { log } from "node:console"
import http from "node:http"

 let server = http.createServer((req,res)=>{
//     log(req); // req.body, req.params, req,cookies
//     log(res)  // req.write(), req.json(), req.end()

// res.write("hello world")
//res.end() indicates all chunks are recieved and it ends all the req res cycle

//! WAY 1
// res.setHeader("content-type", "text/html")
// res.statusCode = 200


//! WAY 2
res.writeHead(200, {"content-type":"text/html"})

res.end(" <h2>hello world</h2>    <h1>BIG HELLO WORLD</h1>"); 

})

server.listen(9000, (err)=>{
    if(err){
        log("unable to start a sever at port 9000")
    }
    log("server started at port 9000")
})

// browser --> http://localhost:PORTNUMBER
// modify --> restart the server, and to avoid that we use below command
//! node --watch filename.js!!!!!