var express = require("express");
var router = express.Router();
var haidaiData = require('./data/haidaiData.js');
var bannerData = require('./data/banner.js')
router.get('/haidai',function(req,res){
    res.send(haidaiData)
})
router.get('/banner',function(req,res){
    res.send(bannerData)
})

module.exports = router;