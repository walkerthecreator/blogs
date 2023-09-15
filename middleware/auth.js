const jwt = require("jsonwebtoken")
const User = require("../Model/user")

const auth = async (req , res , next) => {

    
    try{
        const token = req.cookies.token
        const decode = jwt.decode(token)
        const user = await User.find({ email : decode.email })

        if(!user) return res.status("user not exsist")
        
        req.user = decode
        next()

    }
    catch(err){
        return res.status(400).redirect('/user/login')
    }

}

module.exports = auth 