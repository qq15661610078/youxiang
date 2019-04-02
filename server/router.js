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
var searchData = require('./data/search.js')
var hotsearch = require('./data/hotsearch')




router.get('/carousel',function(req,res){
    res.send(carouselData)
})

router.get('/shoplist',function(req,res){
    res.send(shopListData)
})
var mysqlFn = require("./mysql.js");
var config = require("./config.js");
urlObj = config.urlObj;

router.get('/mine',function(req,res){
    res.send(minedata)
})
router.get('/banner',function(req,res){
    res.send(bannerData)
})
router.get('/buymore',function(req,res){
    res.send(moreData)
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
//morebuy详情页对应id的数据
router.get('/morebuyid',function(req,res){
    var query = url.parse(req.url,true).query;
    var id = query.id;
    res.send(moreData.xiangbao.filter(function(group){
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

// 查询用户列表
router.get(urlObj.userList, function (req, res) {
    // 创建查询语句
    var sql = "select * from student";
    mysqlFn(sql, null, function (data) {
        res.send(data);
    })
})
// 登陆
router.post(urlObj.login, function (req, res) {
    // 用户名和密码
    var username = req.body.username;
    var password = req.body.password;

    var sql = "SELECT * FROM student WHERE `username`=? AND `password`=?"
    var params = [username, password];
    mysqlFn(sql, params, function (data) {
        if (data.length > 0) {
            res.send(data);
        } else {
            res.send({
                msg: "用户名密码错误"
            })
        }
    })
});


// 注册
router.post(urlObj.register, function (req, res) {
    var re_username = req.body.username;
    var re_password = req.body.password;
    var sql = "insert into student values(null,?,?)";
    var params = [re_username, re_password];
    mysqlFn(sql, params, function (data) {
        // 判断是否成功
        if (data.affectedRows > 0) {
            res.send({
                msg: "注册成功"
            })
        } else {
            res.send({
                msg: "注册失败"
            })
        }
    })

});

module.exports = router;