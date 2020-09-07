var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')
let checkAdmin = require('../middlewares/checkAdmin')


router.get('/', checkAdmin, usersController.list) 
module.exports = router;