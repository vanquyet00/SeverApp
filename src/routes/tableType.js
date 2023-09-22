var express = require('express');
const router = express.Router();
const TableTypeController = require('../app/controllers/TableTypeController.js');





//add NhaHang
router.post('/add', TableTypeController.addTableType) 

// getAllTableType
router.get('/get', TableTypeController.getAllTableType)

// delete
router.delete('/delete/:id', TableTypeController.deleteTableType)

// update

router.put('/update/:id', TableTypeController.updateTableType)

// screen
router.get('/createScreen', TableTypeController.createTableTypeScreen)


//api

router.post('/api/add', TableTypeController.apiAddTableType) 

// getAll
router.get('/api/get', TableTypeController.apiGetAllTableType)





module.exports = router;
