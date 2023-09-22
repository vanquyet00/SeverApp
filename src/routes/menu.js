var express = require('express');
const router = express.Router();
const MenuController = require('../app/controllers/MenuController');


// router.get('/search', siteController.search);

//add menu
router.post('/add', MenuController.addMenu) 

// getAll
router.get('/get', MenuController.getAllMenu)

//delete
router.delete('/delete/:id', MenuController.deleteMenu)

//update

router.put('/update/:id', MenuController.updateMenu)

//screen
router.get('/createScreen', MenuController.createMenuScreen)

// Api 


router.post('api/add', MenuController.apiAddMenu) 

// getAll
router.get('api/get', MenuController.apiGetAllMenu)

// //delete
// router.delete('api/delete/:id', MenuController.apiDeleteMenu)

// //update

// router.put('api/update/:id', MenuController.apiUpdateMenu)








module.exports = router;
