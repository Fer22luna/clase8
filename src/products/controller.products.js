const {Router} = require("express")
const FileDao = require("../dao/File.dao")
const UsersDao = require("../dao/User.dao")

const fileManager = new FileDao("products.json")
const Product = new UsersDao()
const router = Router()
const { Server } = require('socket.io')



router.get("/", async (req,res)=>{
   
   const { user } = req.session

  const products = await Product.find()

  res.render("products.handlebars", {products, user})
  
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