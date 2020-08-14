var express = require('express');
var router = express.Router();
let newAppController = require('../controllers/newAppController')


router.get('/', newAppController.new)

module.exports = router;