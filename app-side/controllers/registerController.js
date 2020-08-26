let db = require('../database/models')
let {check, validationResult, body} = require('express-validator');
let bcrypt = require('bcrypt')

let registerController = {
    register: function(req, res){
        res.render('register', {title:'register'})
    },
    newUser:function(req, res){
        let errors = validationResult(req);

        req.body.email = req.body.email

        
        if (errors.isEmpty()) {
            db.User.create({
            email: req.session.email,
            password: bcrypt.hashSync(req.body.password, 10)
            ,
            })
            .then(function(e){
                let productJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(productJSON)
            })
            .catch(function(){
                res.send('Error')
            })
            
            
            
            res.render('register')
            
    } 
    else {
        return res.render('register', {errors: errors.errors})
    }
    
}
}

module.exports = registerController