const express = require("express")
const { getBlog , postBlog , deleteBlog } = require("../controller/blog")
const router = express.Router()

router.get('/' , getBlog )
router.post('/' , postBlog )
router.get('/delete/:id' , deleteBlog )

module.exports = router