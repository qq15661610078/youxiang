var express = require("express");
var router = express.Router();
var haidaiData = require('./data/haidaiData.js');
var bannerData = require('./data/banner.js')
var buyData = require('./data/buyData.js')
var hotData = require("./data/hotData.js")
router.get('/haidai',function(req,res){
    res.send(haidaiData)
})
router.get('/banner',function(req,res){
    res.send(bannerData)
})
router.get('/buydata',function(req,res){
    res.send(buyData)
})
router.get('/hotdata',function(req,res){
    res.send(hotData)
})

module.exports = router;