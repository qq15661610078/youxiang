var express = require("express");
var router = express.Router();
var minedata = require('./data/minedata.js')
var bannerData = require('./data/banner.js')

router.get('/mine',function(req,res){
    res.send(minedata)
})
router.get('/banner',function(req,res){
    res.send(bannerData)
})

module.exports = router;