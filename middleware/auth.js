const auth = (req , res , next) => {
    console.log("running middleware")
    console.log(req.headers)

    if(req.cookies.user){
        next()
    }
    
    return res.redirect('/')
}

module.exports = auth 