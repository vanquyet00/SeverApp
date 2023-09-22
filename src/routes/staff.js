var express = require('express');
const router = express.Router();
const StaffController = require('../app/controllers/StaffController');


// router.get('/search', siteController.search);

// dang nhap

router.post('/login',StaffController.login);

//add Staff
router.post('/add', StaffController.addStaff);

//getAllStaff

router.get('/get', StaffController.getAllStaff);





module.exports = router;
