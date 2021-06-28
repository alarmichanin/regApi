const express = require('express')
const controller=require('../controllers/auth')
const router = express.Router()

//localhost:5000/user/login
router.post('/login', controller.login)

//localhost:5000/user/create
router.post('/create', controller.create)

module.exports=router