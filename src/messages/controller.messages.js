const {Router} = require("express")


const router = Router()


router.get("/", (req,res)=>{
    res.json({message:"GET"})
})

router.post("/", (req,res)=>{
    res.json({message:"POST"})
})


module.exports = router