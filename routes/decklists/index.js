var express = require('express');
var router = express.Router();
var walk = require('walk');
var files = [];
var walker = walk.walk('./decklists/', {followLinks: false });

walker.on('file', function(root, stat, next) {
    files.push(root + '/' + stat.name);
    next(); 
});

walker.on('end', function() {
    //console.log(files);
});

router.get('/', function(req, res, next) {
    res.render('decklists', {title: 'Decklists'});
});

router.post('/', function(req, res, next) {
    res.render('decklists', {title: "Deck Uploaded", filesR : JSON.stringify(files)})
});
module.exports = router;