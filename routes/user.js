const express = require("express")
const router = express.Router()
const { getLogin , getSignUp, postLogin, postSignUp , logout  } = require("../controller/user")

router.get('/login' , getLogin )
router.get('/signup' , getSignUp )

router.post('/login' , postLogin )
router.post('/signup' , postSignUp )
router.get('/logout' , logout )

module.exports = router