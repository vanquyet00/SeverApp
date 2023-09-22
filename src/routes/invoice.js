var express = require('express');
const router = express.Router();
const InvoiceController = require('../app/controllers/InvoiceController.js');


// router.get('/search', siteController.search);

//add NhaHang
router.post('/add', InvoiceController.addInvoice) 

// getAllInvoice
router.get('/get', InvoiceController.getAllInvoice)






module.exports = router;
