const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title  : {
        type : String  ,
        required : true 
    } ,
    content  : {
        type : String  ,
        required : true 
    } ,
    user : {
        type : String ,
        required : true 
    }
} , 
    { 
        timeStamps : true 
    }
)

const Blog = mongoose.model("Blog" , blogSchema )

module.exports = Blog 