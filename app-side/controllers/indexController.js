let db = require('../database/models')

let indexController = {
    index: function(req, res, next){
       
        db.Application.findAll()
            .then(function (application) {
                res.render('index', { application: application })
            })
            .catch(function(){
                res.send('Error')
            })
    },
}

module.exports = indexController