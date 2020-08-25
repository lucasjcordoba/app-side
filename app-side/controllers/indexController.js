let indexController = {
    hola: function(req, res, next){
        if (req.session.email){
            res.render('admin', {title:'Admin'})
        }
        else{
            res.render('index', {title:'index'})
        }
        
    }
}

module.exports = indexController