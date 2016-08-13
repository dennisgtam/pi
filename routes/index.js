var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/green', function(req,res,next) {
 console.log("GREEN");
 res.render('green_led', {});
});

module.exports = router;
