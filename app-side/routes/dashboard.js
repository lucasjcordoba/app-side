var express = require('express');
var router = express.Router();
let dashboardController = require('../controllers/dashboardController');
let checkAdmin= require('../middlewares/checkAdmin')


router.get('/', checkAdmin, dashboardController.list) 

module.exports = router;