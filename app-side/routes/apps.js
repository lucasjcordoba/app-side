var express = require('express');
var router = express.Router();
let appsController = require('../controllers/appsController')
let multer = require ('multer')
let path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/', appsController.list) 
router.get('/detail/:id', appsController.detail) 
router.get('/edit/:id', appsController.editForm);
router.put('/edit/:id', appsController.edit)
router.get('/create', appsController.new);
router.post('/create', appsController.create)


module.exports = router;