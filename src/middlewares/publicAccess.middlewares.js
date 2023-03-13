

function publicAccess(req,res,next){
    if(req.session.user) return res.redirect("/")  // Public Access es que cualquiera puede entrar sin haber iniciado sesion
  
    next()
  } 

  
  module.exports = publicAccess