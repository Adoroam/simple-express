const express = require('express')
const multer = require('multer')
const Bluebird = require('bluebird')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const upload = multer({ dest: 'dist/img/' })
  
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
app.use(cookieParser('clods'))

app.use(express.static(__dirname + '/dist'))

const port = 80
app.listen(port, () => {console.log(`listening on ${port}`)})