/**
 * Created by ilanv on 18/01/2017.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.render('index.html');
    // next();
});


module.exports = router;