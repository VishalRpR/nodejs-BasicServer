import http from "http"
import generateLovePercent from "./features.js";
import fs from "fs"

const home = fs.readFileSync("./index.html")

const server = http.createServer((req,res)=>{   
  if (req.url === "/about"){
    res.end(`<h1>About ${generateLovePercent()}</h1>`)
  }
  else if (req.url === "/contact"){
    res.end('<h1>Contact</h1>t</h1>')
  }
  else if (req.url === "/"){
    res.end(home)
  }
  else{
    res.end('<h1>Page Not Found</h1>')
  }
 })

server.listen(5000,()=>{
  console.log("server is working")
})