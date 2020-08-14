let registerController = {
    register: function(req, res, next){
        res.render('register', {title:'register'})
    }
}

module.exports = registerController