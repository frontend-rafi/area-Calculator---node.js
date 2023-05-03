const express  = require("express");
const app= express();
const bodyParser = require
("body-parser");
const PORT = 8080;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname + "/circle.html");
})
app.get("/tringle",(req,res)=>{
    res.sendFile(__dirname + "/tringle.html");                                                                                                                                
})

//* post tringle
app.post("/tringle",(req,res)=>{
   const height = req.body.height;
   const base = req.body. base;
   const area = 0.5 * base * height;
   res.send(`tringle are ais : ${area}`)
});


//* post circle
app.post("/cirlce",(req,res)=>{
    const radius = req.body.radius;
    
    const area = Math.PI * radius * radius;
    res.send(`circle are ${area}`)
 })
 

app.listen(PORT,(req,res)=>{
console.log((`hello world at http://localhost:${PORT}`));
})

