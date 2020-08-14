var express = require('express');
var router = express.Router();
let dasboardController = require('../controllers/dashboardController')


router.get('/', dasboardController.list) 

module.exports = router;