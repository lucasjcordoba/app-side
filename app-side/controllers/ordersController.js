let db = require('../database/models')

let ordersController = {
    
    add: function(req, res){
        db.Application.findOne ({
           where : {id: req.params.id}})
           .then (app =>{
               console.log(req.params.id)
               db.Order.create({
                   application_id: req.params.id,
                   user_id:req.session.email,
                   price:app.dataValues.price
               })
               .then((created) =>{
                   console.log(created);
                let createdJSON = {
                    meta: {
                        status: 201
                    },

                }
                 res.redirect('/orders')
            })
            .catch(function () {
                res.send('error')
            })
           })
    },
    list: function (req, res) {
        db.Order.findAll({
            include: [{ association: 'applications'},{ association: 'user' }]
        })
            .then(function (order) {
                res.render('orders', { order: order })
            })
            .catch(function(){
                res.send('Error')
            })
    },
    detailOrder: function(req, res){
            db.Order.findByPk(req.params.id)
                .then(function (order) {
                    res.render('orderDetail', { order: order })
                })
                .catch(function(){
                    res.send('Error')
                })
    
        },
    }

   


module.exports = ordersController