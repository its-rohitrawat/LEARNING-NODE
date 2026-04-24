import http from "node:http"
import fs from "node:fs"
import { log } from "node:console";

let PORT = 9000;

let server = http.createServer((req,res)=>{

    if(req.url === "/"){
        //! SENDING HTML FILE

        let html = fs.createReadStream("./index.html", "utf-8")
        res.writeHead(200, {"content-type":"text/html"})
        html.pipe(res)

    }
    else if(req.url === "/css"){
        //! SENDING CSS FILE

        let css = fs.createReadStream("./style.css", "utf-8")
        res.writeHead(200, {"content-type":"text/css"})
        css.pipe(res)
    }
    else if(req.url === "/json"){
        //! SENDING JSON FILE

        let json = fs.createReadStream("./data.json", "utf-8")
        res.writeHead(200, {"content-type":"application/json"})
        json.pipe(res)
    }
    else{
        //!GIVING SOME ERROR MESSAGE
        
        res.end("PAGE NOT FOUND")
    }

});

server.listen(PORT, (err)=>{
    if(err) log(err)
        log("server started at", PORT)
})  