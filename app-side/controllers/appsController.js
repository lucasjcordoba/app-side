let db = require('../database/models')
const { application } = require('express')

let appsController = {
    list: function (req, res) {
        db.Application.findAll({
            include: [{ association: 'category' }, { association: 'user' }]
        })
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
        console.log(req.session.userLog);
        db.Application.create({
            name: req.body.name,
            image_url: 'not-image.jpeg',
            description: req.body.description,
            price: req.body.price,
            category_id: req.body.category_id,
            user_id: req.session.userLog.id
        })
            .then(function (created) {
                let createdJSON = {
                    meta: {
                        status: 201
                    },

                }
                res.redirect(`/apps/loadImage/${created.dataValues.id}`)
            })
            .catch(function () {
                res.redirect(`/apps/loadImage/${created.dataValues.id}`)
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
     delete: function(req, res){
         db.Application.destroy({
             where: {
                 id: req.params.id
             }
         })
         
         res.redirect('/apps')
     },
     editImage: function(req, res){
        db.Application.findOne({
            where:{id:req.params.id}, 
                include: [{ association: 'category' }, { association: 'user' }]
            
        }
        )
        .then(function (application) {
            res.render('loadImage', { application: application })
            console.log(application);
        })
    
        .catch(function(){
            res.send('Error')
        })
       
     },
     loadImage: (req, res) => {


        if (req.params.id == undefined) {
            res.render('Error Product')
        }

        db.Application.update({

                image_url: req.files[0].filename

            }, {
                where: {
                   id: req.params.id
                }
            }

        ).then((resultado) => {

            db.Application.findOne({
                where: {
                    id: req.params.id

                }
            }).then((resultado) => {
                req.params.id = resultado.dataValues;
            })


            res.redirect('/apps/detail/' + req.params.id)
        })
    },
}

module.exports = appsController