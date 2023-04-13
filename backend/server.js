const express = require('express')
const connectDB = require('./config/db')
const session = require('express-session')
const dotenv = require('dotenv')
dotenv.config()
// const cors = require('cors')
const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(session({
  secret: process.env.SECRET_TOKEN,
  resave: false,
  saveUninitialized: true
}))
// allow cors
// app.use(cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})
connectDB()

const port = process.env.PORT || 3000

const itemsRouter = require('./routes/items')
const authRouter = require('./routes/auth')

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/items', itemsRouter)
app.use('/api/auth', authRouter)

//
app.listen(port, () => console.log('server started on port ' + port))
