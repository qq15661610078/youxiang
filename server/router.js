var express = require("express");
var router = express.Router();
var url = require("url");
var bannerData = require('./data/banner.js');
var message =require("./data/message.js");

var minedata = require('./data/minedata.js')
var bannerData = require('./data/banner.js')
var buyData = require('./data/buyData.js')
var hotData = require("./data/hotData.js")
var moreData = require('./data/more.js')
var searchData = require('./data/search.js')
var hotsearch = require('./data/hotsearch')

router.get('/mine',function(req,res){
    res.send(minedata)
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
router.get('/message',function(req,res){
    res.send(message)
})
router.get('/buydata',function(req,res){
    res.send(buyData)
})
router.get('/hotdata',function(req,res){
    res.send(hotData)
})
router.get('/moredata',function(req,res){
    res.send(moreData)
})
router.get('/search',function(req,res){
    res.send(searchData)
})
router.get('/hotsearch',function(req,res){
    res.send(hotsearch)
})

module.exports = router;