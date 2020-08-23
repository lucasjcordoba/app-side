var express = require('express');
var router = express.Router();
let appsController = require('../controllers/appsController')


router.get('/', appsController.list) 
router.get('/:id', appsController.detail);
router.get('/create', appsController.new)
router.post('/create', appsController.create)

module.exports = router;