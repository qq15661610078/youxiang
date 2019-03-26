var express = require("express");
var router = express.Router();
var bannerData = require('./data/banner.js');
var message =require("./data/message.js");

var minedata = require('./data/minedata.js')
var bannerData = require('./data/banner.js')
var buyData = require('./data/buyData.js')
var hotData = require("./data/hotData.js")

router.get('/mine',function(req,res){
    res.send(minedata)
})
router.get('/banner',function(req,res){
    res.send(bannerData)
})
router.get('/message',function(req,res){
    res.send(message)
})
router.get('/buydata',function(req,res){
    res.send(buyData)
})
router.get('/hotdata',function(req,res){
    res.send(hotData)
})

module.exports = router;