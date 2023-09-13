const User = require("../Model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const getLogin = (req , res) => {
    return res.render('login.ejs')
}

const getSignUp = (req , res) => {
    return res.render('signup.ejs')
}

const postLogin = async (req , res ) => {
    const { email , password } = req.body

    const encodedData = jwt.sign({ email , password } , process.env.JWT_PRIVATE)
    res.cookie("user" , encodedData )


    const user = await User.findOne({ email })

    // if(!user){
    //     return res.redirect('/user/signup')
    // }
    // res.cookie("user" , user )
    // return res.send("got it")
    return res.redirect("/blogs")
}

const postSignUp = async (req , res) => {
    const { name , email , password } = req.body 
    let user = await User.find({email })

    // if(user){
    //     return res.redirect('/user/login')
    // }

    const newPassword = await bcrypt.hash(password , 10 )
    user = await User.create({ email , name , password : newPassword }) 

    const encoded = jwt.sign( { name : user.name , email : user.email } , process.env.JWT_PRIVATE )
    console.log(encoded)
    res.header('x-token' , encoded )
    return res.redirect('/blogs')
}

module.exports = { getLogin , getSignUp , postLogin , postSignUp }