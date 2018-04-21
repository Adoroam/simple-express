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

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => { res.render('index', { title: 'home' }) })
app.get('/users', (req, res) => { res.render('index', { title: 'users' }) })

app.use(express.static(__dirname))
app.use('*.js', (req, res, next) => {
  res.setHeader('content-type', 'text/javascript')
  next()
})

const port = 80
app.listen(port, () => {console.log(`listening on ${port}`)})