const express = require("express")
const app = express()
const db = require("./config/mongoose")
const Product = require("./Model/Product")
const path = require("path")
const auth = require("./middleware/auth")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5001

// for parsing cookies 
app.use(cookieParser())

// for parsing body data 
app.use(express.json())

// for parsing url 
app.use(express.urlencoded({ extended : true }))


app.set('view engine' , "ejs")
app.set('views' , path.join(__dirname , "/views"))

app.get('/' , (req , res)=>{
    return res.render("home.ejs")
})

app.use('/blogs' , auth ,  require("./routes/blog"))


app.use('/user' , require("./routes/user"))

app.listen( port , ()=>{
    console.log("started server on " + port )
})