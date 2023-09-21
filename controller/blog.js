const Blog = require("../Model/Blog")


const getBlog = async (req , res) => {
    const blog = await Blog.find().sort({ updatedAt : -1  }).populate("user")
    console.log("from blog page" , blog)
    return res.render("blog.ejs" ,{ blog : blog })
}

const deleteBlog = async (req , res) => {
    const { id } = req.params
    const blog = await Blog.deleteOne({ _id :  id })
    return res.redirect('/blogs')
}

const postBlog = async (req , res) => {
    const { id } =   req.user
    console.log("this is what we checking", req.user)
    const { title , content   } = req.body
    const blog = await Blog.create({ title , content , user  :  id })
    return res.status(201).redirect('/blogs')
}

const getProfile = async (req , res) => {
    console.log("next fn ")

    return res.send("something")
}

// get blog by id 
const getSingleBlog = async (req , res) => {
    const { id }  = req.params
    const blog  = await Blog.findOne({_id : id })
    return res.status(200).render("singleBlog.ejs" , { blog })
} 

// GET for updating blog
const getUpdate = async (req , res) => {
    const { id } = req.params
    const blog = await Blog.findOne({_id : id })
    console.log(blog)
    return res.status(200).render('updateBlog.ejs' , {blog : blog })
}

const postUpdate = async (req , res) => {
    const { id } = req.params 
    const { title , content } = req.body

    try{
        const blog = await Blog.updateOne({ _id : id } , { title , content , isEdited : true })
        return res.status(201).redirect('/blogs')
    }
    catch(err){
        return res.status(500).send("somthing went wrong")
    }
}




module.exports = { getBlog , postBlog , deleteBlog , getProfile , getUpdate , postUpdate , getSingleBlog }