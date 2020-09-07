var express = require('express');
const commentsController = require('../controllers/commentsController');
var router = express.Router();

/* GET home page. */
router.get('/:id', commentsController.comments);
router.post('/:id', commentsController.submit);

module.exports = router;
