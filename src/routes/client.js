var express = require('express');
const router = express.Router();
const ClientController = require('../app/controllers/ClientController.js');


// router.get('/search', siteController.search);

//add NhaHang
router.post('/add', ClientController.addClient) 

// getAllClient
router.get('/get', ClientController.getAllClient)






module.exports = router;
