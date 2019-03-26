var express = require("express");
var router = express.Router();
var url = require("url");
var haidaiData = require('./data/haidaiData.js');
var bannerData = require('./data/banner.js')
router.get('/haidai',function(req,res){
    res.send(haidaiData)
})
router.get('/banner',function(req,res){
    res.send(bannerData)
})
//获取对应id的数据
router.get('/bannerid',function(req,res){
    var query = url.parse(req.url,true).query;
    var id = query.id;
    res.send(bannerData.banners.filter(function(group){
        return group && group.id == id;
    }))
})
module.exports = router;