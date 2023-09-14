const auth = (req , res , next) => {
    console.log("running middleware")
    // console.log(req.headers.authToken)

    // let token = req.headers.authToken

    // if(token){
    //     next()
    // }
    
    // return res.redirect('/')
    next()
}

module.exports = auth 