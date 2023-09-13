const mongoose = require("mongoose")

// schema 
const productSchema = mongoose.Schema({
        name : String ,
        price : Number ,
        rating : Number
    } , {
        timestamps : true 
    })

// model
const Product = mongoose.model('product' , productSchema )

module.exports = Product