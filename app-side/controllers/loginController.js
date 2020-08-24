let {check, validationResult, body} = require('express-validator');
let db = require('../database/models')

let loginController = {
    login: function(req, res, next){
        res.render('login', {title:'login'})
    },
    enter: function(req,res){
        
        let errors = validationResult(req)
        if (errors.isEmpty()){

        } else {
            return res.render('login', {errors:errors.errors})
        }

    }
}

module.exports = loginController