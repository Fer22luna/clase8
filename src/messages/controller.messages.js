const {Router} = require("express")


const router = Router()


router.get("/", (req,res)=>{
    res.render("index.handlebars")
})

router.post("/", (req,res)=>{
    res.json({message:"POST"})
})


module.exports = router