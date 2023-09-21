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
    
    const user = await User.findOne({ email })
    
    if(!user) return res.redirect('/user/login')

    
        const encodedData = jwt.sign({ email , name : user.name , id : user._id  } , process.env.JWT_PRIVATE)
        res.cookie("token" , encodedData )
        return res.status(200).redirect("/blogs")
}

const postSignUp = async (req , res) => {
    const { name , email , password } = req.body 
    let user = await User.find({email })
    const newPassword = await bcrypt.hash(password , 10 )
    user = await User.create({ email , name , password : newPassword }) 

    const encoded = jwt.sign( { name : user.name , email : user.email , id : user._id } , process.env.JWT_PRIVATE )

    res.cookie("token" , encoded)
    return res.redirect('/blogs')

    

    // res.header("x-auth-token" , encoded)
    //  res.redirect("/blogs")
    // return res.redirect('/blogs')
}



module.exports = { getLogin , getSignUp , postLogin , postSignUp  }