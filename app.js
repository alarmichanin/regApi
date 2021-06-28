const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const btcRoutes = require('./routes/btcRate')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(session({
    secret: 'aaa2C44-4D44-WppQ38Siuyiuy',
    cookie: {maxAge: 90000},
    resave: true,
    saveUninitialized: true
}));

app.use('/user', authRoutes)
app.use('/',btcRoutes)
module.exports = app;