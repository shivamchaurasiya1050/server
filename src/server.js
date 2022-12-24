const express = require("express");
const app=express();
const cors=require("cors");
const port = process.env.PORT || 8000;
 app.use(cors());

app.get("/api",(req,res)=>{
    res.send("hello from the other frontend")

});

app.listen(port ,()=>{
    console.log(`connection is setup at ${port}`);
})
