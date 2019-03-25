var express = require("express");
var router = express.Router();
var haidaiData = require('./data/haidaiData.js')
router.get('/haidai',function(req,res){
    res.send(haidaiData)
})
module.exports = router;