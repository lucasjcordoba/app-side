let db = require('../database/models')
let {check, validationResult, body} = require('express-validator');

let registerController = {
    register: function(req, res){
        res.render('register', {title:'register'})
    },
    newUser:function(req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.create({
            email: req.body.email,
            password: req.body.password,
            })
    } else {
        return res.render('register', {errors: errors.errors})
    }
    }
}

module.exports = registerController