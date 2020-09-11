var express = require('express');
var router = express.Router();
let appsController = require('../controllers/appsController')
let multer = require ('multer')
let path = require('path')
let checkAdmin = require('../middlewares/checkAdmin')

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
router.get('/edit/:id', checkAdmin, appsController.editForm);
router.put('/edit/:id', appsController.edit)
router.get('/create', checkAdmin,appsController.new);
router.post('/create', appsController.create)
router.post('/delete/:id', appsController.delete)
router.get('/loadImage/:id', appsController.editImage);
router.post('/loadImage/:id', upload.any(), appsController.loadImage);
router.get('/search', appsController.search);
router.post('/search', appsController.search);

module.exports = router;