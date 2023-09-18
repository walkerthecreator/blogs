const jwt = require("jsonwebtoken")
const User = require("../Model/user")

const auth = async (req , res , next) => {

    
    try{
        const token = req.cookies.token
        const decode = jwt.decode(token)
        const user = await User.find({ _id : decode.id })

        console.log(user)

        if(!user) return res.status("user not exsist")
        
        req.user = decode
        next()

    }
    catch(err){
        return res.status(400).redirect('/user/login')
    }

}

module.exports = auth 