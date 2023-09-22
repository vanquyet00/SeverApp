var express = require('express');
const router = express.Router();
const TableController = require('../app/controllers/TableController');


//add 
router.post('/add', TableController.addTable) 

// getAll
router.get('/get', TableController.getAllTable)

//delete
router.delete('/delete/:id', TableController.deleteTable)

//update

router.put('/update/:id', TableController.updateTable)

//screen
router.get('/createScreen', TableController.createTableScreen)

//api

router.post('/api/add', TableController.apiAddTable)

// getAll
router.get('/api/get', TableController.apiGetAllTable)


module.exports = router;
