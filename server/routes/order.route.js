const express = require('express')
const router = express.Router()

const { createOrder } = require('../controllers/order.service')

router.post('/order', createOrder)

module.exports = router
