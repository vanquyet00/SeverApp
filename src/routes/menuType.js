var express = require('express');
const router = express.Router();
const MenuTypeController = require('../app/controllers/MenuTypeController');


// router.get('/search', siteController.search);

//add NhaHang
router.post('/add', MenuTypeController.addMenuType) 


router.delete('/delete/:id', MenuTypeController.deleteMenuType)

router.put('/update/:id', MenuTypeController.updateMenuType)

// getAllMenuType
router.get('/get', MenuTypeController.getAllMenuType)

// screen 
router.get('/menuScreen', MenuTypeController.menuScreen)


//APi


router.post('api/add', MenuTypeController.apiAddMenuType) 

// getAll
router.get('api/get', MenuTypeController.apiGetAllMenuType)





module.exports = router;
