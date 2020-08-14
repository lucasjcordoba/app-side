let detailController = {
    detail: function(req, res, next){
        res.render('dashboard', {title:'detail'})
    }
}

module.exports = detailController