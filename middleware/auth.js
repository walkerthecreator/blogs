const jwt = require("jsonwebtoken")
const User = require("../Model/user")

const auth = async (req , res , next) => {
    try{
        const token = req.cookies.token
        const decode = jwt.decode(token)
        const user = await User.find({ _id : decode.id })

        if(!user) return res.status("user not exsist")
        
        req.user = decode
        next()

    }
    catch(err){
        return res.status(400).redirect('/user/login')
    }
}

const checkLogin = (req , res , next) => {
    try{
        const token = req.cookies.token

        if(!token){
            next()
        }
        else{
            return res.redirect('/blogs')
        }
    }
    catch(err){
        return res.send("something went wrong")
    }
}

module.exports = { auth , checkLogin }
// module.exports = { checkLogin } 