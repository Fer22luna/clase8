const mongoose = require("mongoose")
//const mongoosePaginate = require("mongoose-paginate-v2")

const productsCollection = "products"

const productsSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    status: {
        type:Boolean,
        default: true
    },
    stock: Number,
    quantity: Number
})

//productsSchema.plugin(mongoosePaginate)

const Product = mongoose.model(productsCollection,productsSchema)

module.exports = Product