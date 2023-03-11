const express = require("express")
const router = require("./router")
const mongoose = require("mongoose")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const handlebars = require("express-handlebars")
const { Server } = require('socket.io')
const Message = require("./dao/models/Message.model")

const port = 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use(express.static(__dirname + '/public'))
app.use(session({                  
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://admin:admin@codercluster.e299zch.mongodb.net/class10-sessions?retryWrites=true&w=majority",
        mongoOptions: {
            useNewUrlParser:true, useUnifiedTopology:true
        },
        ttl:100 
    }),
    secret: "algo",  
    resave:false,
    saveUninitialized: false
}))


app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")

router(app)

mongoose.set("strictQuery", false)

mongoose.connect("mongodb+srv://admin:admin@codercluster.e299zch.mongodb.net/class10-data?retryWrites=true&w=majority", error => {
    if (error) {
        console.log(`Error : ${error}`)
    }
    console.log("server connected to db")
})

const httpServer = app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
const io = new Server(httpServer)  // io sera un servidor para trabajar con sockets


const messages = []

io.on('connection', socket => {
    console.log(`Client with id ${socket.id} is connected`)

    socket.on('newUser', user => {
        socket.broadcast.emit('userConnected', user)
       // console.log(user)
        socket.emit("messageLogs", messages)
    })

    socket.on('message',  async data => {
        messages.push(data)
        io.emit("messageLogs", messages)

        Message.insertMany(messages)
    })

   
}) 


module.exports = io