const db= require('../database/models');

    function checkAdmin (req,res,next) {
        db.Application.findAll()
        if (req.session.userLog==undefined){
    
            res.render('notAdmin');
        } else {
    
            db.User.findOne({
                where:{
                 id: req.session.userLog.id,
                }
            })
            .then((resultado)=> { 
console.log(resultado.dataValues)

                if(resultado.dataValues.admin==true) {
                    next()
                }
                else{
                    res.redirect('notAdmin')
                }
            })
        }
    };


    module.exports=checkAdmin;