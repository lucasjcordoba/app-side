let indexController = {
    hola: function(req, res, next){
        res.render('index', {title:'index'})
    }
}

module.exports = indexController