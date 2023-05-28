const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const goodsRoute = require('./routes/goods.route')
const orderRoute = require('./routes/order.route')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

const DB_USER = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD

app.use(express.json())
app.use(
   express.urlencoded({
      extended: true,
   })
)

app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
   res.send('Hello World')
})

app.use('/api', goodsRoute)
app.use('/api', orderRoute)

mongoose
   .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xxwvwgi.mongodb.net/?retryWrites=true&w=majority`
   )
   .then(() => {
      app.listen(port, () => {
         console.log(`MongoDb connect and server run ${port}`)
      })
   })
   .catch(error => console.log(error))
