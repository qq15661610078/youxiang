var express = require("express");
var router = express.Router();
var carouselData = require('./data/carouselData.js')
var shopListData = require('./data/shopData.js')
var bannerData = require('./data/banner.js');
var message = require("./data/message.js");

var minedata = require('./data/minedata.js')
var bannerData = require('./data/banner.js')
var buyData = require('./data/buyData.js')
var hotData = require("./data/hotData.js")




router.get('/carousel',function(req,res){
    res.send(carouselData)
})

router.get('/shoplist',function(req,res){
    res.send(shopListData)
})
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