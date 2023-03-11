const {Router} = require("express")
const FileDao = require("../dao/File.dao")
const UsersDao = require("../dao/User.dao")

const fileManager = new FileDao("products.json")
const Product = new UsersDao()
const router = Router()
const { Server } = require('socket.io')



router.get("/", async (req,res)=>{
   
   const { user } = req.session
      console.log(user)
     let role = ""

   if(user.email === "adminCoder@coder.com" || user.password === "adminCod3r123"){

       role = "admin"
   }else{
       role = "usuario"
   }

   const userWithRole ={
      ...user,
      role
   }

   const products = await Product.find()  

   res.render("products.handlebars", { userWithRole , products })
   
})

router.post("/", async (req,res) =>{


    try {
       const products = await fileManager.loadItems()
       const response = await Product.insertMany(products)
       res.json({message:response})
    } catch (error) {
       res.json({error})
    }
   })


module.exports = router