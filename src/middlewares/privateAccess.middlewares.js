
function privateAccess(req,res,next){
    if(!req.session.user) return res.redirect("/login") // SI queres entrar sin haber iniciado sesion lo que hace es redireccionarte al login
  
    next()
  } 


  module.exports =  privateAccess