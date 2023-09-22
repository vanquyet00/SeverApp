var express = require('express');
const router = express.Router();
const RestaurantController = require('../app/controllers/RestaurantController.js');


// router.get('/search', siteController.search);

//add Restaurant
router.post('/add', RestaurantController.addRestaurant) 

// getAllRestaurant
router.get('/get', RestaurantController.getAllRestaurant)






module.exports = router;
