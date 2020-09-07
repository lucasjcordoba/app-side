let db = require('../database/models')

let commentsController = {
    comments: function(req, res, next){
       
        db.Order.findOne({
            where: {id:req.params.id}
        },
        {
            include: [{ association: 'applications' }]
        }
        )
        .then(function (order) {
            
            res.redirect('comments',{order:order})
        })
        .catch(function () {
            res.send('error')
        })
    },
    submit: function(){
        db.Comment.create({
            content: req.body.content,
            ranking: req.body.ranking
        },
        {
            where: {id:req.params.id}
        })
        .then ((done)=>{
 
         let doneJSON = {
             meta: {
                 status: 201
             },
         }
         res.redirect('/comments/'+ req.params.id)
     })
     .catch(function () {
         res.send('Error')
 
     })
    }
}

module.exports = commentsController