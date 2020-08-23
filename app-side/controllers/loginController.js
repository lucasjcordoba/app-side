let {check, validationResult, body} = require('express-validator');
let db = require('../database/models')

let loginController = {
    login: function(req, res, next){
        res.render('login', {title:'login'})
    },
    enter: async function (req, res, next) {

        let errors = validationResult(req);
        errors.isEmpty()
    
        if (errors.isEmpty()) {
          console.log(errors);
        let response;
        try {
          let exists = await db.User.findOne({
            where: { email: req.body.email }
          })
          if (!exists) {
            response = {
              meta: {
                status: 422,
                message: "Email doesn't exist"
              }
            }
            res.json(response)
          } else {
            response = {
              meta: {
                status: 200,
                message: 'Login successfull'
              },
              data: {
                id: exists.dataValues.id,
                email: exists.dataValues.email
              }
            }
          
            if (!bcrypt.compareSync(req.body.password, exists.password)) {
              response = {
                meta: {
                  status: 401,
                  message: 'Wrong Password'
                }
              }
            }
            console.log(exists.dataValues)
            res.json(response)
          }
        } catch (e) {
          console.log(e)
          response = {
            meta: {
              status: 422,
              message: "Wrong Password"
            }
          }
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

module.exports = loginController