var express = require("express");
var router = express.Router();
var haidaiData = require('./data/haidaiData.js')
var carouselData = require('./data/carouselData.js')
var shopListData = require('./data/shopData.js')

router.get('/haidai',function(req,res){
    res.send(haidaiData)
})

router.get('/carousel',function(req,res){
    res.send(carouselData)
})

router.get('/shoplist',function(req,res){
    res.send(shopListData)
})

module.exports = router;