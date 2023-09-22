var express = require('express');
const router = express.Router();
const OderMenuController = require('../app/controllers/OderMenuController.js');


// router.get('/search', siteController.search);

//add NhaHang
router.post('/add', OderMenuController.addOderMenu) 

// getAllOderMenu
router.get('/get', OderMenuController.getAllOderMenu)






module.exports = router;
