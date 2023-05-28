const express = require('express')
const router = express.Router()

const { getGoods, getIdGood } = require('../controllers/goods.service')

router.get('/goods', getGoods)

router.get('/good/:id', getIdGood)

module.exports = router
