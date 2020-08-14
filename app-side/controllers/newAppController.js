let newAppController = {
    new: function(req, res, next){
        res.render('newApp', {title:'newApp'})
    }
}

module.exports = newAppController