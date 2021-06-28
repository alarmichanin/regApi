const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const btcRoutes = require('./routes/btcRate')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/user', authRoutes)
app.use('/',btcRoutes)
module.exports = app;