let db = require('../database/models')

let appsController = {
    list: function (req, res) {
        db.Application.findAll()
        .then(function(application){
            res.render('apps', {application:application})
        })
    },
    detail: function(req, res){
        db.Application.findByPk(req.params.id,{
            include:[{association: 'category'}, {association: 'user'}]
        })
        .then(function(applications){
            res.render('detail', {applications:applications})
        })
        
    },
    new: function(req, res){
        db.Category.findAll()
        .then(function(categories){
            return res.render('newApp', {categories:categories},)
        }
        )
    },
    create: function(req, res){
        db.Application.create({
            name: req.body.name,
            image_url: req.body.image_url,
            description: req.body.description,
            price: req.body.price,
            category_id: req.body.category_id,
            user_id: req.body.user_id
        })
        
    },
    edit : function(req, res){
        let app = db.Application.findByPk(req.params.id)
        let category = db.Category.findAll()
        Promise.all([app, category])
            .then(function(app, category){
                res.render('edit', {app:app, category:category})
            })
    }
}

module.exports = appsController