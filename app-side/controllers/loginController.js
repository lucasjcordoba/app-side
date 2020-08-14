let loginController = {
    login: function(req, res, next){
        res.render('login', {title:'login'})
    }
}

module.exports = loginController