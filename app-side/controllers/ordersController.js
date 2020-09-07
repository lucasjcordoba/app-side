let db = require('../database/models')

let ordersController = {
    
    add: function(req, res){
     /*   db.Order.create({
            where: {
                application_id: req.params.id,
                user_id:req.session.userLog,
                price: this.application_id.price
            }
        })
      
     
      
        res.redirect('/orders')
        */

       db.Application.findOne ({
           where : {id: req.params.id}})
           .then (app =>{
               console.log(app)
               db.Order.create({
                   application_id: req.params.id,
                   user_id:req.session.id,
                   price:app.price
               })
               console.log(req.session)
               .then(function (created) {
                let createdJSON = {
                    meta: {
                        status: 201
                    },

                }
                res.render(createdJSON)
            })
            .catch(function () {
                res.send(createdJSON)
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