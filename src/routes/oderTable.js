var express = require('express');
const router = express.Router();
const OderTableController = require('../app/controllers/OderTableController');


// router.get('/search', siteController.search);

//add NhaHang
router.post('/add', OderTableController.addOderTable) 

// getAllOderTable
router.get('/get', OderTableController.getAllOderTable)






module.exports = router;
