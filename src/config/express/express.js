var express = require("express")
var app = express()
var router = express.Router()
var cookieParser = require('cookie-parser')

// config body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cookieParser())

//configurando o marko
require('marko/node-require').install()
markoExpress = require('marko/express')
app.use(markoExpress())


module.exports = { express, app, router }