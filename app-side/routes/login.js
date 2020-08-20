var express = require('express');
var router = express.Router();
let loginController = require('../controllers/loginController')
let {check, validationResult, body} = require('express-validator');


router.get('/',loginController.login);
router.post('/',[
    check('email').isEmail().withMessage('Invalid Email'),
    check('password').isLength({min:6}).withMessage('Password must be 6-32 characters in length '),
    ],loginController.enter);

module.exports = router;
