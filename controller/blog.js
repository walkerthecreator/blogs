const Blog = require("../Model/Blog")


const getBlog = async (req , res) => {
    console.log(req)
    const blog = await Blog.find()
    return res.render("blog.ejs" ,{ blog : blog })
}

const deleteBlog = async (req , res) => {

    const { id } = req.params
    const blog = await Blog.deleteOne({ _id :  id })
    return res.redirect('/blogs')
}

const postBlog = async (req , res) => {
    const { email } =   req.user
    const { title , content   } = req.body
    const blog = await Blog.create({ title , content , user  : email })
    return res.status(201).redirect('/blogs')
}

const getProfile = async (req , res) => {
    // const {email } = req.user
    const user = req.user
    const email = user.email

    const blog = await Blog.find({user : email})
    return res.render('myProfile.ejs' , {blog , user : user })
}




module.exports = { getBlog , postBlog , deleteBlog , getProfile }