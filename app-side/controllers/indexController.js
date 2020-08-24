let db = require('../database/models')
let indexController = {
    hola: function(req, res, next){
        db.Application.findAll()
        .then(function(application){
            res.render('index')
    })
}
}
module.exports = indexController