let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductPage);

/* GET Services page. */
router.get('/services', indexController.displayServicePage);

/* GET Contact Us page. */
router.get('/Contact', indexController.displayContactPage);

module.exports = router;
