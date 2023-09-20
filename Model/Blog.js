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
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User' ,
        required : true 
    } ,
    isEdited : {
        type : Boolean ,
        default : false 
    }
} , 
    { 
        timestamps : true 
    }
)

const Blog = mongoose.model("Blog" , blogSchema )

module.exports = Blog 