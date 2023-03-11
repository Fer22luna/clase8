const viewsTemplateController = require("../viewsTemplate/controller.viewsTemplate")
const sessionController = require("../session/controller.session")
const productsController = require("../products/controller.products")
const cartsController = require("../carts/controller.carts")
const messagesController = require("../messages/controller.messages")
const authController = require("../auth/controller.auth")
const usersController = require("../users/controller.users")

const router = (app) =>{
    app.use("/", viewsTemplateController)
    app.use("/session", sessionController)
    app.use("/products", productsController)
    app.use("/carts", cartsController)
    app.use("/messages", messagesController)
    app.use("/auth", authController)
    app.use("/users", usersController)
}

module.exports = router