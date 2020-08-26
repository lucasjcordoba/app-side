let db = require('../database/models')

db.Users.findOne(
    { where: { email: req.session.email }}) 
    .then((result) => {
        if (result.admin == false) {
            res.render("errorAccess")
        } else {
            next()
        }
    
    })