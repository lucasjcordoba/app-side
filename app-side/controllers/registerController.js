let db = require('../database/models')
let {check, validationResult, body} = require('express-validator');
let bcrypt = require('bcrypt')

let registerController = {
    register: function(req, res){
        res.render('register', {title:'register'})
    },
    newUser: async function (req, res, next) {

        let errors = validationResult(req);
        
    
        if (errors.isEmpty()) {
    
        let response;
        try {
          let exists = await db.User.findOne({
            where: { email: req.body.email }
          })
          if (exists) {
            response = {
              meta: {
                status: 422,
                message: 'Email already exists'
              }
              
            }
            res.json(response)
          } else {
            let user = await db.User.create({
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10)
            })
            response = {
              meta: {
                status: 200,
                message: 'User created successfully'
              },
              data: {
                id: user.dataValues.id,
                email: user.dataValues.email
              }
            }
            res.json(response)
          }
        } catch (e) {
          console.log(e)
          response = {
            meta: {
              status: 500,
              message: "Invalid data"
            }
          }
          res.json(response)
        }
      } else {
        let response = {
          meta: {
            status: 422,
            error: "Invalid data"
          }
        }
        res.json(response)
      }
      }
   
}

module.exports = registerController