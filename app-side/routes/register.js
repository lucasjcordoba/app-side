var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController')
let {check, validationResult, body} = require('express-validator');


router.get('/',registerController.register);
router.post('/', [
    check('email').isEmail().withMessage('Invalid Email'),
    check('password').isLength({min:6}).withMessage('Password must be 6-32 characters in length '),
    ], 
    registerController.newUser);
module.exports = router;