const express = require('express')
const controller=require('../controllers/btcRate')
const router = express.Router()

router.get('/btcRate', controller.btc)
module.exports=router