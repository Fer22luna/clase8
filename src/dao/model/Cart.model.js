const mongoose = require("mongoose")

const cartsCollection = "carts"

const cartsSchema = new mongoose.Schema({
    products:{
        type: Array,
        default: []
    }
})


const Cart = mongoose.model(cartsCollection,cartsSchema)

module.exports = Cart