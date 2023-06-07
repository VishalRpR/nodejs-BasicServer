import express from "express";

const app = express();
import path from "path"

app.get("/getproducts",(req,res)=>{
  const pathlocation = path.resolve();

  res.sendFile(path.join(pathlocation,"index.html"))
});

app.listen(5000,()=>{
  console.log('server is working');
})