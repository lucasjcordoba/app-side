let db = require('../database/models')

let indexController = {
    hola: function(req, res, next){
        
        if (req.session.email){
            res.render('index', {title:'index'})
        }
        else{
            res.render('index', {title:'index'})
        }
        
    }
}

module.exports = indexController