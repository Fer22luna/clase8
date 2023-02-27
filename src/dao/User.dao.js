const Product = require("./model/Product.model");



class UsersDao {

    async find(){

        try {
            const response = await Product.find()
            return response
        } catch (error) {
        return error
        }

    
    }

    async insertMany(ProductInfo){

     const response = await Product.insertMany(ProductInfo)
     return response
    }


}

module.exports = UsersDao
