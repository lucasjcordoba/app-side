var express = require('express');
var router = express.Router();
let ordersController = require('../controllers/ordersController')


router.get('/', ordersController.list) 
router.post('/add/:id', ordersController.add)
module.exports = router;