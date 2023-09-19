const express = require("express")
const { getBlog , postBlog , deleteBlog , getProfile, getUpdate } = require("../controller/blog")
const router = express.Router()

router.get('/' , getBlog )
router.post('/' , postBlog )
router.get('/delete/:id' , deleteBlog )
router.get('/profile' , getProfile)

router.route('/update/:id').get(getUpdate).post()

module.exports = router