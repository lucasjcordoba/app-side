let dashboardController = {
    list: function(req, res, next){
        res.render('dashboard', {title:'dashboard'})
    }
}

module.exports = dashboardController