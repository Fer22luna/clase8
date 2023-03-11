const { Router } = require("express")
const User = require("../dao/models/User.model")



const router = Router()

router.post("/", async (req,res)=>{

try {
    
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(!user) return res.status(400).json({error: "Usuario y contraseña no validos"})

    if(user.password !== password) return res.status(400).json({error: "Usuario y contraseña no validos"})

// aca estamos creando una sesion
    req.session.user = {
        first_name : user.first_name,
        last_name : user.last_name,
        email: user.email,
        password : user.password
    }


    res.status(201).json({message: "Sesion iniciada"})

} catch (error) {
    res.status(500).json({error: "INternal server Error"})
}

})


module.exports = router