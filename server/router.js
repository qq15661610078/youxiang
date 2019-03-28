var express = require("express");
var router = express.Router();
var carouselData = require('./data/carouselData.js')
var shopListData = require('./data/shopData.js')
var url = require("url");
var message = require("./data/message.js");

var minedata = require('./data/minedata.js')
var bannerData = require('./data/banner.js')
var buyData = require('./data/buyData.js')
var hotData = require("./data/hotData.js")
var moreData = require('./data/more.js')




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
//获取对应id的数据
router.get('/bannerid',function(req,res){
    var query = url.parse(req.url,true).query;
    var id = query.id;
    // console.log(id)
    res.send(bannerData.banners.filter(function(group){
        return group && group.id == id;
    }))
})
//buy详情页对应id的数据
router.get('/shoplistid' ,function(req,res){
    var id = url.parse(req.url,true).query.id;
        //过滤数据
    res.send(shopListData.shopList.filter(function(group){
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

module.exports = router;