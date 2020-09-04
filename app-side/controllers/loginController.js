let {check, validationResult, body} = require('express-validator');
let db = require('../database/models')
var bcrypt = require('bcrypt');

let loginController = {
    login: function(req, res, next){
        res.render('login', {title:'login'})
    },
    enter: function(req,res){
        let errors = validationResult(req)
        if (errors.isEmpty()){

         db.User.findOne({
             where: {email:req.body.email}
         })
         .then((resultado) => { 
            if (resultado == null) {
                res.send('error');
            }
            else {
                console.log(resultado.dataValues)
                if (bcrypt.compareSync(req.body.password, resultado.password)) {

                    let profile;
                    if (resultado.dataValues.admin ==true) {
                        profile="admin";
                    } else {
                        profile="user";
                    }
                    let perfil={
                        id: resultado.dataValues.id,
                        email: resultado.dataValues.email ,
                        password:resultado.dataValues.password ,
                        admin:resultado.dataValues.admin,
                        rol: profile ,
                    }
                    req.session.userLog = perfil;


                    if(req.session.userLog.admin==true){
                        res.redirect('/')
                    }else {
                        res.redirect('/')
                    } 
                } else {
                    res.send('error en el login');
                }
            }
         })
        } else {
            return res.render('login', {errors:errors.errors})
        }
    },
   

    check: (req, res)=>{
        if (req.session.userLog) {
        res.send(req.session.userLog)
        console.log(req.session.userLog);
    }else{
        res.send('no login')
    }
    }
}

module.exports = loginController