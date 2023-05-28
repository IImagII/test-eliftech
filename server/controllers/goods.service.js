const Goods = require('../models/goods')
const errorHandler = require('../utils/errorHandler')

const getGoods = async (req, res) => {
   try {
      const goods = await Goods.find()
      res.status(200).json(goods)
   } catch (e) {
      errorHandler(res, e)
   }
}

const getIdGood = async (req, res) => {
   try {
      const good = await Goods.findOne({ _id: req.params.id })
      res.status(200).json(good)
   } catch (e) {
      errorHandler(res, e)
   }
}

module.exports = {
   getGoods,
   getIdGood,
}
