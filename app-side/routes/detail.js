var express = require('express');
var router = express.Router();
let detailController = require('../controllers/detailController')


router.get('/', detailController.detail);

module.exports = router;