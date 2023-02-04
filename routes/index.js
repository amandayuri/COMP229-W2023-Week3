var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  }); // linked to views/index.ejs
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Us page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
