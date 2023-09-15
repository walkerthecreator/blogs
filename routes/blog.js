const express = require("express")
const { getBlog , postBlog , deleteBlog , getProfile } = require("../controller/blog")
const router = express.Router()

router.get('/' , getBlog )
router.post('/' , postBlog )
router.get('/delete/:id' , deleteBlog )
router.get('/profile' , getProfile)

module.exports = router