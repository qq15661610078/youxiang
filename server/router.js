var express = require("express");
var router = express.Router();
var haidaiData = require('./data/haidaiData.js');
var bannerData = require('./data/banner.js');
var message =require("./data/message.js");

router.get('/haidai',function(req,res){
    res.send(haidaiData)
})
router.get('/banner',function(req,res){
    res.send(bannerData)
})
router.get('/message',function(req,res){
    res.send(message)
})

module.exports = router;