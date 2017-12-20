var express = require('express');
var router = express.Router();
const os = require('os')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Viseo Hong Kong - Digital Innovation Labs', hostname: os.hostname, timestamp: new Date().toLocaleString() });
});

module.exports = router;
