const {Router} = require("express")
const FileDao = require("../dao/File.dao")
const UsersDao = require("../dao/User.dao")

const fileManager = new FileDao("products.json")
const Product = new UsersDao()
const router = Router()
const { Server } = require('socket.io')



router.get("/", async (req,res)=>{
/*
    try {
        const response = await Product.find()
        res.json({message: response})
    } catch (error) {
        res.json({message :error})
    }*/
    res.render("index.handlebars")
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