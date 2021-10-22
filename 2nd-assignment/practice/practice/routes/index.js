var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/api",require("./api"));

router.use("/blog",require('./blog')); //blog 폴더 접근

router.use("/users", require('./users')) //users 접근
module.exports = router;
