var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Decktracker' });
});
router.post('/', function(req, res) {
    console.log(req.files);
});
module.exports = router;
