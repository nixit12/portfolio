var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about this page', 
  pageText:"Here is some info about project",
  var:'This about my page'
});
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio',
});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page',
});
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'user Page',
});
});

module.exports = router;
