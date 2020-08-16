var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController')


router.get('/',registerController.register);
router.post('/',registerController.newUser);
module.exports = router;