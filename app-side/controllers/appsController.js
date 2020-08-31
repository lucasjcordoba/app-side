let db = require('../database/models')

let appsController = {
    list: function (req, res) {
        db.Application.findAll()
            .then(function (application) {
                res.render('apps', { application: application })
            })
            .catch(function(){
                res.send('Error')
            })
    },
    detail: function (req, res) {
        db.Application.findByPk(req.params.id, {
            include: [{ association: 'category' }, { association: 'user' }]
        })
            .then(function (application) {
                res.render('detail', { application: application })
            })
            .catch(function(){
                res.send('Error')
            })

    },
    new: function (req, res) {
        db.Category.findAll()
            .then(function (categories) {
                let arrayCategories = []
                categories.forEach(element => {

                    cat = {
                        id: element.dataValues.id,
                        name: element.dataValues.name
                    }
                    arrayCategories.push(cat)
                });
                console.log(arrayCategories)

                return res.render('newApp', { categories: arrayCategories })

            }
            )
    },
    create: function (req, res, next) {
        db.Application.create({
            name: req.body.name,
            image_url: 'not-image.jpeg',
            description: req.body.description,
            price: req.body.price,
            category_id: req.body.category_id,
            user_id: req.body.user_id
        })
            .then(function (created) {
                let createdJSON = {
                    meta: {
                        status: 201
                    },

                }
                res.render(createdJSON)
            })
            .catch(function () {
                res.redirect('/apps')
            })
    },
    editForm: function (req, res){
        
        db.Application.findOne({
            where: {id:req.params.id}
        })
        .then((app)=>{
            db.Category.findAll()
            .then(function(categories){
                let arrayCategories=[]
                categories.forEach(element => {
                    
                     cat={
                         id: element.dataValues.id,
                         name: element.dataValues.name
                     }
                     arrayCategories.push(cat)
                });
 
               
                
               return res.render('edit',{application:app, categories:arrayCategories})
            }
            )
        })
        .catch(function(){
            res.send('Error')
        })
    },
    edit : function(req, res){

        db.Application.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category_id: req.body.category_id,
        },
        {
            where: {id:req.params.id}
        })
        .then ((end)=>{
 
         let editedJSON = {
             meta: {
                 status: 201
             },
         }
         res.redirect('/apps/detail/'+ req.params.id)
     })
     .catch(function () {
         res.send('Error')
 
     })
     },
     search: (req, res) => {
        db.Products.findAll({
            where: {
                name:{[db.Sequelize.Op.like]:`%`+req.query.search+`%`}
            },
            include: [{association: `brands`}, {association: `discounts`}, {association: `categories`}],
            order: [[`name`, `ASC`]]
        })
        .then((prductsSearch) => {
            res.render(`productosBuscados`, {prductsSearch:prductsSearch})
            
        })
    },
     delete: function(req, res){
         db.Application.destroy({
             where: {
                 id: req.params.id
             }
         })
         
         res.redirect('/apps')
     },
     loadImage: function(req,res){
         
     }
}

module.exports = appsController