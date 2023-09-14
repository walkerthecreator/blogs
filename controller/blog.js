const Blog = require("../Model/Blog")


const getBlog = async (req , res) => {
    const blog = await Blog.find()
    return res.render("blog.ejs" ,{ blog : blog })
}

const deleteBlog = async (req , res) => {

    const { id } = req.params
    const blog = await Blog.deleteOne({ _id :  id })
    return res.redirect('/blogs')
}

const postBlog = async (req , res) => {
    const { title , content  } = req.body
    const blog = await Blog.create({ title , content })
    return res.status(201).redirect('/blogs')
}




module.exports = { getBlog , postBlog , deleteBlog }