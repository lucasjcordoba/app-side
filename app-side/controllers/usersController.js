let db = require('../database/models')

let usersController = {
    list: function (req, res) {
        db.User.findAll()
            .then(function (users) {
                res.render('users', { users: users })
            })
            .catch(function(){
                res.send('Error')
            })
    }
}

module.exports = usersController