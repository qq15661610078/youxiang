var express = require("express");
var app = express();
var router = require("./router.js");
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'))
app.use("/api",router);

// app.get("./",(req,res) => res.send("hello"))
app.listen(3000,function(){
    console.log("服务器运行在3000端口上");
    
})