let db = require('../database/models')

let ordersController = {
    orders: function (req, res) {
        db.Application.findAll()
            .then(function (application) {
                res.render('orders', { application: application })
            })
            .catch(function(){
                res.send('Error')
            })
    },
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
                res.render('orders')
            })
            .catch(function () {
                res.send('error')
            })
           })
    },
}
   


module.exports = ordersController