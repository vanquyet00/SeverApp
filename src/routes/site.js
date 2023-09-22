var express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');


// router.get('/search', siteController.search);
router.get('/login',siteController.login)
router.get('/', siteController.home);



module.exports = router;
