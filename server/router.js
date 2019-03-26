var express = require("express");
var router = express.Router();
var minedata = require('./data/minedata.js')
router.get('/mine',function(req,res){
    res.send(minedata)
})
module.exports = router;