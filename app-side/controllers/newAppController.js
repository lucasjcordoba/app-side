let db = require('../database/models')

let newAppController = {
    new: function(req, res){
        db.Category.findAll()
        .then(function(categories){
            return res.render('newApp', {categories:categories},)
        }
        )
    }
    
    ,
    create: function(req, res){
        db.Application.create({
            name: req.body.name,
            image_url: req.body.image_url,
            description: req.body.description,
            price: req.body.price,
            category_id: req.body.category_id,
            user_id: req.body.user_id
        })
    }
}

module.exports = newAppController