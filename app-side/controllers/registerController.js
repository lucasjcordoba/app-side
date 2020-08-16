let db = require('../database/models')


let registerController = {
    register: function(req, res){
        res.render('register', {title:'register'})
    },
    newUSer:function(req, res){
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            
        })
    }
}

module.exports = registerController