const db= require('../database/models');

    function checkAdmin (req,res,next) {
        if (req.session.usuarioLogeado==undefined){
    
            res.send('No tiene permisos de administrador');
        } else {
    
            db.User.findOne({
                where:{
                 id: req.session.usuarioLogeado.id,
                }
            })
            .then((resultado)=> { 
console.log(resultado.dataValues)

                if(resultado.dataValues.admin==true) {
                    next()
                }
                else{
                    res.redirect('/')
                }
            })
        }
    };
    module.exports=checkAdmin;