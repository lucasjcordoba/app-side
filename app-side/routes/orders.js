var express = require('express');
var router = express.Router();
let ordersController = require('../controllers/ordersController');
const { editFormComment, editComment } = require('../controllers/ordersController');


router.get('/', ordersController.list) 
router.get('/detail/:id', ordersController.detailOrder) 
router.post('/add/:id', ordersController.add)
router.get('/detail/:id', editFormComment)
router.put('/detail/:id', editComment)
module.exports = router;