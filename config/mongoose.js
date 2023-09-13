const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/basic")

const db = mongoose.connection

db.on("error" , ()=>{
    console.log("could not connect with database")
})

db.once("open" , ()=>{
    console.log("connected with database")
})